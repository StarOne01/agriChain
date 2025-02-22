const farmerSchema = require('../model/FarmerSchmea');
const bcrypt = require('bcrypt');



const registerFarmer = async (req, res) => {
    try {
        const { name, email, phone, password, state, district, village, pincode, farmSize, farmType, farmImage } = req.body;
        const farmer = await farmerSchema.findOne({ email });
        if (farmer) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const newFarmer = new farmerSchema({
            name, email, phone, password: hashedPassword, state, district, village, pincode, farmSize, farmType, farmImage
        });
        await newFarmer.save();
        res.status(201).json({ message: "User registered successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}

const loginFarmer = async (req, res) => {
    try {
        const { email, password } = req.body;
        const farmer = await farmerSchema.findOne({ email });
        if (!farmer) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }
        const isPasswordCorrect = await bcrypt.compare(password, farmer.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }
        res.status(200).json({ message: "Login successful" });
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}

module.exports = { registerFarmer, loginFarmer };