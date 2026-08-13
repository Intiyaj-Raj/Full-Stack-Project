const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const apiRoute = require("./router/api");
const connectDB = require("./config/db");
const cors = require("cors");

// CORS
app.use(
    cors({
        origin: [
            "http://localhost:5173",
            "https://shopbag-ecommerce-webapp.vercel.app"
        ],
        credentials: true
    })
);

// JSON
app.use(express.json());

// Static files
app.use(express.static("public"));

// API routes
app.use("/api", apiRoute);

// Database
connectDB();

// Port
const port = process.env.PORT || 5000;

app.listen(port, "0.0.0.0", () => {
    console.log(`Running on port ${port}`);
});