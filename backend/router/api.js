const apiRoutes = require("express").Router()
const userController = require("../controller/user")
const user = require("../models/user")
const adminController = require("../controller/admin")
apiRoutes.get("/", (req, res) => {
    res.send("Hello Backend...")
})



apiRoutes.post("/data00", (req, res) => {
    console.log(req.body)
    res.send("Data get...")
})



apiRoutes.post("/regdata", userController.regDataController)
apiRoutes.post("/loginuser", userController.loginDataController)
apiRoutes.post("/addadminproduct", adminController.addadminproductController)
apiRoutes.get("/getproduct", adminController.getAllProductController)

module.exports = apiRoutes