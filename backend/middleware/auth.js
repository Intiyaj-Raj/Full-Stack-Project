const jwt = require("jsonwebtoken")


const auth = (req, res, next) => {
    const bearerHeader = req.headers.authorization

    if (!bearerHeader || !bearerHeader.startsWith("Bearer")) {
        return res.status(401).json({ message: "Access Denied :- NO token provided" })

    }

    const token = bearerHeader.split(" ")[1]
    try {
        const verifyUser = jwt.verify(token, process.env.JWT_SECRET)
        req.user = verifyUser
        next()
    } catch (error) {
        return res.status(403).json({ message: "Token is invalid or expired" })
    }
}

// const adminAuth = (req, res, next) => {
//     auth(req, res, () => {
//         if (req.user.userEmail !== "admin@gmail.com") {
//             return res.status(403).json({ message: "Access Denied:- Admin Only" })
//         }
//         next();
//     })
// }
module.exports = auth