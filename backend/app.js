
// const express = require("express")
// const app = express()
// const dns = require("dns");

// dns.setServers([
//     "8.8.8.8",
//     "1.1.1.1"
// ]);

// const dotenv = require("dotenv")
// dotenv.config()
// const apiRoute = require("./router/api")
// const connectDB = require("./config/db")
// const cors = require("cors")

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
const app = express();
const dns = require("dns");

dns.setServers([
    "8.8.8.8",
    "1.1.1.1"
]);

const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
const apiRoute = require("./router/api");
const connectDB = require("./config/db");

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

// Routes
app.use("/api", apiRoute);

// Database
connectDB();

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});
