const mongoose = require("mongoose")

const { model, Schema } = mongoose


const cartSchema = new Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        require: true
    },
    cartItems: [],
    totalPrice: Number,
    totalQuantity: Number
})

module.exports = model("cart", cartSchema) 
