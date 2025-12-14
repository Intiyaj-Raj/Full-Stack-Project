const userCollection = require("../models/user")
const bcrypt = require("bcrypt")
const productCollection = require("../models/product")
const queryCollecion = require("../models/query")
const cartCollection = require("../models/cart")
const jwt = require("jsonwebtoken")
const Razorpay = require("razorpay")
const { options } = require("../router/api")
const crypto = require("crypto")
const orderCollection = require('../models/order')

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
})


const OrderController = async (req, res) => {
    try {
        const { amount, currency, receipt } = req.body
        const options = {
            amount: amount * 100,
            currency,
            receipt,
        };

        const order = await razorpay.orders.create(options)
        res.status(200).json(order)
    } catch (error) {
        res.status(500).json({ message: "Internal server error." });

    }
};

const verifyController = async (req, res) => {
    try {
        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
            amount,
            userID,
        } = req.body

        const hmac = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
        hmac.update(razorpay_order_id + "|" + razorpay_payment_id)
        const generate_Signature = hmac.digest("hex")

        if (generate_Signature === razorpay_signature) {
            const record = new orderCollection({
                userId: userID,
                orderId: razorpay_order_id,
                paymentId: razorpay_payment_id,
                signature: razorpay_signature,
                amount: amount,
                status: "Paid"
            })
            await record.save()

            res.status(200).json({ success: true, message: "Payment successful" })
        }
        else {
            res.status(501).json({ success: false, message: "Payment verify failed" })
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error." });

    }

};


// for registration page
const regDataController = async (req, res) => {
    try {
        const { fname, email, pass } = req.body

        if (!fname || !email || !pass) {
            return res.status(400).json({ message: "All fields are required." })
        }

        const emailExist = await userCollection.findOne({ userEmail: email })
        if (emailExist) {
            return res.status(400).json({ message: "Email already registered." })
        }


        const hashPassword = await bcrypt.hash(pass, 10)


        const record = new userCollection({
            userName: fname,
            userEmail: email,
            userPass: hashPassword,
        })
        await record.save();

        res.status(200).json({ message: "Successfully register." })
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error." })
    }
};

// for login page
const loginDataController = async (req, res) => {

    try {
        const { loginEmail, loginPass } = req.body

        const userCheck = await userCollection.findOne({ userEmail: loginEmail })

        // compare email and password

        // if email is not matched send this response
        if (!userCheck) {
            return res.status(400).json({ message: "User not found." })
        }

        // check password is match or not 
        const matchPass = await bcrypt.compare(loginPass, userCheck.userPass)

        // if password is not matched send this response
        if (!matchPass) {
            return res.status(400).json({ message: "Invalid credentials." })
        }

        const token = jwt.sign({ id: userCheck._id },
            process.env.JWT_SECRET,
            { expiresIn: "2d" })

        res.status(200).json({
            message: "Successfully login",
            token: token,
            data: userCheck
        })
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error." })
    }

};


const userProductController = async (req, res) => {
    try {
        const category = req.query.category
        let filter = { productStatus: "In-Stock" }

        if (category && category.toLowerCase() !== "all") {
            filter.productCategory = category.toLowerCase()
        }

        const record = await productCollection.find(filter)

        res.status(200).json({ data: record })

    } catch (error) {
        res.status(500).json({ message: "Internal server error." })
    }
};

const userQueryController = async (req, res) => {
    try {
        const { userName, userEmail, userQuery } = req.body
        const record = new queryCollecion({
            Name: userName,
            Email: userEmail,
            Query: userQuery,
        })

        await record.save()
        res.status(200).json({ message: "Successfully  submitted  your query." })
    } catch (error) {
        res.status(500).json({ message: "Internal server error." })
    }
};

const saveCartDataController = async (req, res) => {
    try {
        const { userId, cartItems, totalPrice, totalQuantity } = req.body

        let cart = await cartCollection.findOne({ userId })

        if (cart) {
            cart.cartItems = cartItems;
            cart.totalPrice = totalPrice;
            cart.totalQuantity = totalQuantity;
            await cart.save()
        }
        else {
            cart = new cartCollection({
                userId: userId,
                cartItems: cartItems,
                totalPrice: totalPrice,
                totalQuantity: totalQuantity
            });
            await cart.save()
        }

        res.status(200).json({ message: "Cart Save Successfully" })
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" })
    }
};

const getCartController = async (req, res) => {
    try {
        const userId = req.params.id
        const cart = await cartCollection.findOne({ userId })
        res.status(200).json(cart)
    } catch (error) {
        res.status(500).json({ message: "Internal server error." })
    }
};

const searchController = async (req, res) => {
    try {
        const keyword = req.query.q
        const result = await productCollection.find({
            productName: { $regex: keyword, $options: "i" },
            productStatus: "In-Stock"
        })

        res.status(200).json({ data: result })
    } catch (error) {
        res.status(500).json({ message: "Internal server error." })
    }
};

module.exports = {
    regDataController,
    loginDataController,
    userProductController,
    userQueryController,
    saveCartDataController,
    searchController,
    getCartController,
    OrderController,
    verifyController
}