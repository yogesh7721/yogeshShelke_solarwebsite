const asynchandler = require("express-async-handler")
const { checkEmpty } = require("../utils/checkEmpty")
const Auth = require("../model/Auth")
const validator = require("validator")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const User = require("../model/User")


exports.AdminRegister = asynchandler(async (req, res) => {
    const { name, email, mobile, password } = req.body
    const { error, isError } = checkEmpty({ name, email, mobile, password })
    if (isError) {
        return res.status(400).json({ message: "All Field is Required", error })
    }
    const result = await Auth.findOne({ email })
    if (result) {
        return res.status(400).json({ message: "Email Already Exist" })
    }
    if (!validator.isEmail(email)) {
        return res.status(400).json({ message: "Invalid Credientials" })
    }
    if (!validator.isStrongPassword(password)) {
        return res.status(400).json({ message: "Provide Strong Password" })
    }
    const hash = await bcrypt.hash(password, 10)
    await Auth.create({ name, email, mobile, password: hash })
    res.json({ message: "Admin Register Success..!" })
})

exports.AdminLogin = asynchandler(async (req, res) => {
    const { email, password } = req.body
    const { isError, error } = checkEmpty({ email, password })
    if (isError) {
        return res.status(400).json({ message: "All Field is Required", error })
    }
    const result = await Auth.findOne({ email })
    if (!result) {
        return res.status(400).json({ message: "Invalid Creadientials" })
    }
    const isVerify = await bcrypt.compare(password, result.password)
    if (!isVerify) {
        return res.status(401).json({ message: "Invalid Creadientials" })
    }
    const Token = jwt.sign({ userId: User._id, email: User.email }, process.env.JWT_KEY, { expiresIn: "180d" }
    );
    res.cookie("admin", Token, {
        maxAge: 8600000,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production"
    })
    res.json({
        message: "Admin Login Success", result: {
            _id: result._id,
            name: result.name,
            email: result.email,
            mobile: result.mobile
        }
    })
})

exports.AdminLogout = asynchandler(async (req, res) => {
    res.clearCookie("admin", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production"
    });
    res.json({ message: "Admin logged out successfully" });
});

exports.getAdmin = asynchandler(async (req, res) => {
    const admins = await Auth.find(); // exclude password
    res.status(200).json(admins);
});