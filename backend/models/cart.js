// const mongoose = require("mongoose")

// const { model, Schema } = mongoose


// const cartSchema = new Schema({
//     userId: {
//         type: mongoose.Schema.ObjectId,
//         ref: "User",
//         require: true
//     },
//     cartItems: [],
//     totalPrice: Number,
//     totalQuantity: Number
// })

// module.exports = model("cart", cartSchema) 



const mongoose = require("mongoose")
const { model, Schema } = mongoose

const cartSchema = new Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user", // matches model("user", ...) in models/user.js
            required: true,
            unique: true, // one cart document per user
        },
        cartItems: { type: [], default: [] },
        totalPrice: { type: Number, default: 0 },
        totalQuantity: { type: Number, default: 0 },
    },
    { timestamps: true }
)

module.exports = model("cart", cartSchema)