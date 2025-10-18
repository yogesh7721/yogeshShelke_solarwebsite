const { AdminRegister, AdminLogin, AdminLogout, getAdmin } = require("../controllers/auth.controller")
const { AdminProtected } = require("../middleware/AdminProtected")

const router = require("express").Router()

router
    .post("/adminRegister", AdminRegister)
    .post("/adminLogin", AdminLogin)
    .get("/getAdmin", AdminProtected, getAdmin)
    .post("/adminLogout", AdminLogout)

module.exports = router