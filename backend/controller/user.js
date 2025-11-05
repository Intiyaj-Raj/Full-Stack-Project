const userCollection = require("../models/user")
const bcrypt = require("bcrypt")
const productCollection = require("../models/product")
const queryCollecion = require("../models/query")
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
}

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

        res.status(200).json({ message: "Successfully login" })

    }
    catch (error) {
        res.status(500).json({ message: "Internal server error." })
    }

}


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
}

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
}

module.exports = {
    regDataController,
    loginDataController,
    userProductController,
    userQueryController
}