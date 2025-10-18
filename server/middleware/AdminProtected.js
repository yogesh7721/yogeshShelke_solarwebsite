

const jwt = require("jsonwebtoken");

exports.AdminProtected = (req, res, next) => {
    const { admin } = req.cookies;

    if (!admin) {
        return res.status(401).json({ message: "No Cookie Found...!" });
    }

    jwt.verify(admin, process.env.JWT_KEY, (error, decode) => {
        if (error) {
            console.log("JWT Error:", error);
            return res.status(401).json({ message: "Invalid Token" });
        }
        req.admin = decode._id;
        next();
    });
};