const dns = require("dns");

dns.setServers([
    "8.8.8.8",
    "1.1.1.1"
]);

require("dotenv").config({ path: "../.env" });

const mongoose = require("mongoose");
const Product = require("../models/product.js");
const initData = require("./data.js");

const dbUrl = process.env.DB;

main()
    .then(async () => {
        console.log("Connected to DB");

        await initDB();

        await mongoose.connection.close();

        console.log("Database connection closed");
    })
    .catch((err) => {
        console.log("ERROR:", err);
    });

async function main() {
    await mongoose.connect(dbUrl);
}

const initDB = async () => {
    await Product.deleteMany({});

    await Product.insertMany(initData.data);

    console.log("Data was initialized");
};