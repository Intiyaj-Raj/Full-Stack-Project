const mongoose = require("mongoose")

const { model, Schema } = mongoose


const userSchema = new Schema({
    userName: { type: String, require: true },
    userEmail: { type: String, require: true },
    userPass: { type: String, require: true },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    }
})

module.exports = model("user", userSchema) 
