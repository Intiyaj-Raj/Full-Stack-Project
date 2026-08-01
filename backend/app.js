
// const express = require("express")
// const app = express()
// const dotenv = require("dotenv")
// dotenv.config()
// const apiRoute = require("./router/api")
// const connectDB = require("./config/db")
// const cors = require("cors")
// const dns = require("dns");
// dns.setServers([
//     '1.1.1.1',
//     '8.8.8.8'
// ])
// connectDB()
// // express.json() use to allow json data  ... 


// app.use(express.static("public"))
// app.use(cors())
// app.use(express.json())
// app.use("/api", apiRoute)
// let port = process.env.PORT || 5000
// app.listen(port, () => {
//     console.log(`Running on port ${port}`)
// })

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const dns = require("dns");
const path = require("path");

dotenv.config();

const app = express();

const connectDB = require("./config/db");
const apiRoute = require("./router/api");

// DNS
dns.setServers([
    "1.1.1.1",
    "8.8.8.8"
]);

// Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve Static Files
app.use(express.static(path.join(__dirname, "public")));
app.use(
    "/uploads",
    express.static(path.join(__dirname, "public", "uploads"))
);

// API Routes
app.use("/api", apiRoute);

// Test Route
app.get("/", (req, res) => {
    res.send("Backend is running...");
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});