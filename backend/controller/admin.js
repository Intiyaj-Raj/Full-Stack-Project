const { response } = require("express")
const productCollection = require("../models/product")


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

module.exports = {
    addadminproductController,
    getAllProductController,
    deleteProductController,
    editValueDataController,
    productUpdateControler
}