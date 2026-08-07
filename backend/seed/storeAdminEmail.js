const path = require("path");
const dns = require("dns");

dns.setServers([
    "8.8.8.8",
    "1.1.1.1"
]);
const dotenv = require("dotenv");

dotenv.config({
    path: path.join(__dirname, "../.env"),
});

const connectDB = require("../config/db");
const createAdmin = require("./createAdmin ");

const storeAdmin = async () => {
    try {
        await connectDB();

        await createAdmin();

        console.log("Admin seed completed");

        process.exit(0);
    } catch (error) {
        console.error("Seed error:", error);

        process.exit(1);
    }
};

storeAdmin();