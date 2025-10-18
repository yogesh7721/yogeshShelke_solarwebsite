const { getContact, createContact, deleteContact } = require("../controllers/contact.controller")

const router = require("express").Router()

router
    .post("/userCreate", createContact)
    .delete("/deleteContact/:id", deleteContact)
    .get("/getUser", getContact)

module.exports = router