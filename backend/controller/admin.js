const { response, json } = require("express")
const productCollection = require("../models/product")
const queryCollecion = require("../models/query")
const query = require("../models/query")
const nodemailer = require("nodemailer")
const addadminproductController = async (req, res) => {

    try {
        const PImage = req.file.filename
        const { Pname, Price, Cat } = req.body
        if (!Pname || !Price || !Cat) {
            return res.status(400).json({ message: "All fields are required." })
        }

        const record = new productCollection({
            productName: Pname,
            productPrice: Price,
            productCategory: Cat,
            productImage: PImage
        })


        await record.save()

        res.status(200).json({ message: "Successfully Insert  Product." })

    } catch (error) {

        res.status(500).json({ message: "Internal Server error." })
    }


}

const getAllProductController = async (req, res) => {
    try {
        const record = await productCollection.find()
        res.status(200).json({ data: record })

    } catch (error) {
        res.status(500).json({ message: "Internal sever error." })
    }

}

const deleteProductController = async (req, res) => {
    try {
        const productId = req.params.abc
        await productCollection.findByIdAndDelete(productId)
        res.status(200).json({ message: "Sucessfully delete." })
    } catch (error) {
        res.status(500).json({ message: "Internal server error." })
    }
}

const editValueDataController = async (req, res) => {
    try {
        const productId = req.params.abc
        const record = await productCollection.findById(productId)
        res.status(200).json({ data: record })
    } catch (error) {
        res.status(500).json({ message: "Internal server error" })
    }
}

const productUpdateControler = async (req, res) => {
    try {
        const { Pname, Pprice, Cat, Pstatus } = req.body
        const productId = req.params.abc

        await productCollection.findByIdAndUpdate(productId, {
            productName: Pname,
            productPrice: Pprice,
            productCategory: Cat,
            productStatus: Pstatus,
        });
        res.status(200).json({ message: "Successfully update." })
    } catch (error) {
        res.status(500).json({ message: "Internal server error." })
    }
}


const userAllQueryController = async (req, res) => {
    try {
        const record = await queryCollecion.find()
        res.status(200).json({ data: record })

    } catch (error) {
        res.status(500).json({ message: "Internal Server Error." })
    }
}

const queryDeleteController = async (req, res) => {
    try {
        const queryId = req.params.abc
        await queryCollecion.findByIdAndDelete(queryId)
        res.status(200).json({ message: "Successfully delete" })
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" })
    }
}

const querySingleDataController = async (req, res) => {
    try {
        const queryId = req.params.abc
        const record = await queryCollecion.findById(queryId)
        res.status(200).json({ data: record })
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" })
    }
}

const mailReplyController = async (req, res) => {
    const { to, sub, body } = req.body
    const queryId = req.params.abc
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: "intiyajraj786@gmail.com",
                pass: "drwh ckgz xkyn ggkb",
            },
        });

        const info = await transporter.sendMail({
            from: '"ShopBag" <intiyajraj786@gmail.com>',
            to: to,
            subject: sub,
            text: body,
            html: body,
        });

        await queryCollecion.findByIdAndUpdate(queryId, {
            queryStatus: "Read"
        })
        res.status(200).json({ message: "Successfully Reply." })

    } catch (error) {

        res.status(500).json({ message: "Internal server error." })
    }

}
module.exports = {
    addadminproductController,
    getAllProductController,
    deleteProductController,
    editValueDataController,
    productUpdateControler,
    userAllQueryController,
    queryDeleteController,
    querySingleDataController,
    mailReplyController
}
