// const multer = require("multer")

// const path = require("path")

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         // upload image to this destination
//         // used to store image in system
//         // cb(null, path.join("../public/uploads"))
//         cb(null, path.join(__dirname, "../public/uploads"))

//     },

//     // used to store  image in database
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + "-" + file.originalname)
//     }
// })


// const uploads = multer({
//     storage: storage,
//     limits: { fileSize: 1024 * 1024 * 5 } // max 5Mb image store
// })
// module.exports = uploads


const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: "shopbag-products",
        allowed_formats: ["jpg", "jpeg", "png", "webp"],
        public_id: (req, file) => {
            return Date.now() + "-" + file.originalname.split(".")[0];
        },
    },
});

const uploads = multer({
    storage,
    limits: {
        fileSize: 1024 * 1024 * 5, // 5MB
    },
});

module.exports = uploads;