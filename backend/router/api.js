const apiRoutes = require("express").Router()
const userController = require("../controller/user")
const user = require("../models/user")
const adminController = require("../controller/admin")
const uploads = require("../middleware/multer")
const auth = require("../middleware/auth")



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
apiRoutes.post("/userquery", userController.userQueryController)
apiRoutes.get("/userallquery", adminController.userAllQueryController)
apiRoutes.delete("/querydelete/:abc", adminController.queryDeleteController)
apiRoutes.get("/querysingledata/:abc", adminController.querySingleDataController)
apiRoutes.post("/mailreply/:abc", adminController.mailReplyController)
apiRoutes.post("/cart/save/", auth, userController.saveCartDataController)
apiRoutes.get("/search", userController.searchController)
apiRoutes.get("/cart/:id", auth, userController.getCartController)

module.exports = apiRoutes