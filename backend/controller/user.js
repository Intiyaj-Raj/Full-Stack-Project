const userCollection = require("../models/user")
const bcrypt = require("bcrypt")
const productCollection = require("../models/product")

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
        const record = await productCollection.find({ productStatus: "In-Stock" })
        res.status(200).json({ data: record })
    } catch (error) {
        res.status(500).json({ message: "Internal server error." })
    }
}

module.exports = {
    regDataController,
    loginDataController,
    userProductController
}