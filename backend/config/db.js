const mongoose = require("mongoose");

// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.DB);
//         console.log("DB Connected Successfully");
//     } catch (error) {
//         console.log("Connection failed");
//         console.log(error);
//     }
// };
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB);
        console.log("DB Connected Successfully");
    } catch (error) {
        console.error("Connection failed", error);
        process.exit(1); // don't run the server with a dead DB
    }
};
module.exports = connectDB;