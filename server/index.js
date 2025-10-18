
const cookieParser = require("cookie-parser")
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
// require("dotenv").config();
require('dotenv').config({ override: true });
const path = require("path");

const app = express()
app.use(cookieParser())
app.use(cors({
    origin: true,
    credentials: true
}))
app.use(express.json());
app.use("/api/auth", require("./routes/Auth.routes"))
app.use("/api/contact", require("./routes/Contact.routes"))

app.use((req, res) => {
    res.status(404).json({ message: "Resource Not Found!" })
})

mongoose.connect(process.env.MONGO_URL)
mongoose.connection.once("open", () => {
    console.log("MONGO CONNECTED")
    app.listen(process.env.PORT, console.log("SERVER RUNNING ON PORT 500 🏃‍♂️"))
})