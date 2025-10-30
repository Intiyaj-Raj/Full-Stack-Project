const multer = require("multer")

const path = require("path")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // upload image to this destination
        // used to store image in system
        // cb(null, path.join("../public/uploads"))
        cb(null, path.join(__dirname, "../public/uploads"))

    },

    // used to store  image in database
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname)
    }
})


const uploads = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 5 } // max 5Mb image store
})
module.exports = uploads