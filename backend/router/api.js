const apiRoutes = require("express").Router()
const userController = require("../controller/user")
const user = require("../models/user")
const adminController = require("../controller/admin")
const uploads = require("../middleware/multer")



apiRoutes.get("/", (req, res) => {
    res.send("Hello Backend...")
})



apiRoutes.post("/data00", (req, res) => {
    console.log(req.body)
    res.send("Data get...")
})



apiRoutes.post("/regdata", userController.regDataController)
apiRoutes.post("/loginuser", userController.loginDataController)
apiRoutes.post("/addadminproduct", uploads.single("image"), adminController.addadminproductController)
apiRoutes.get("/getproduct", adminController.getAllProductController)
apiRoutes.delete("/productdelete/:abc", adminController.deleteProductController)
apiRoutes.get("/editvaluedata/:abc", adminController.editValueDataController)
apiRoutes.post("/productupdate/:abc", adminController.productUpdateControler)
apiRoutes.get("/userproducts", userController.userProductController)


module.exports = apiRoutes