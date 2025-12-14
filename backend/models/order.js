const mongoose = require("mongoose")

const { model, Schema } = mongoose


const orderSchema = new Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        require: true
    },
    orderId: String,
    paymentId: String,
    signature: String,
    amount: Number,
    status: { type: String, default: "pending" },
    createAt: { type: Date, default: Date.now() }

})

module.exports = model("order", orderSchema) 
