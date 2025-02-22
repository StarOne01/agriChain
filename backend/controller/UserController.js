const userSchema = require('../model/userSchmea');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');

const registerUser = async (req, res) => {
    try {
        const { name, email, phone, password } = req.body;
        const user = await userSchema.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = new userSchema({
            name, email, phone, password: hashedPassword
        });
        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    }
    catch (error) {
        res.json({ message:error }).status(500);
    }
}

const loginUser = async (req, res) => {
    try {

        
        const { email, password } = req.body;
        console.log(email);
        
        const user = await userSchema.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }
        const token = jsonwebtoken.sign({ _id: user._id }, process.env.SIGN_JWT);
        res.status(200).json({ message: "Login successful" , user , token}); ;
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}

const getuserCart = async (req, res) => {
    try {
        const { userid } = req.params;
        const user = await userSchema.findById(userid);
        res.status(200).json({ cart: user.cart });
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}

const addProductToCart = async (req, res) => {
    try {
        const { userid, productid } = req.body;
        const user = await userSchema.findById(userid);
        user.cart.push({ productid });
        await user.save();
        res.status(200).json({ message: "Product added to cart" });
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}


module.exports = { registerUser, loginUser , getuserCart , addProductToCart};