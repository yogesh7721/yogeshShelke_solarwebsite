const User = require("../model/User");



exports.createContact = async (req, res) => {
    try {
        const { fullName, email, mobile, message } = req.body;

        if (!fullName || !email || !mobile || !message) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const newUser = new User({ fullName, email, mobile, message });
        await newUser.save();

        return res.status(201).json({ message: "Message submitted successfully", user: newUser });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Server error" });
    }
};

exports.deleteContact = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({ error: "Contact not found" });
        }
        return res.status(200).json({ message: "Contact deleted successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Server error" });
    }
};



exports.getContact = async (req, res) => {
    try {
        const users = await User.find().sort({ createdAt: -1 });
        return res.status(200).json(users);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Server error" });
    }
};
