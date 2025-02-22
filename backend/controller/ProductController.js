const productSchmea = require('../model/produtcsSchmea');
const orderSchmea = require('../model/ordersSchmea');
const paymentSchmea = require('../model/paymentSchmea');
const User = require('../model/userSchmea');






const addProduct = async (req, res) => {
    try {
        const { name, price, quantity, description, category, image ,userid } = req.body;
        const product = await productSchmea.create({ name, price, quantity, description, category, image ,stock,
          sellerId: userid
          });
        res.status(201).json({ product });
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}


const getProducts = async (req, res) => {
    try {
        const products = await productSchmea.find();
        res.status(200).json({ products });
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}


const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await productSchmea.findById(id);
        res.status(200).json({ product });
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}

const getProductsByCategory = async (req, res) => {
    try {
        const { category } = req.params;
        const products = await productSchmea.find({
            category: category
        });
        res.status(200).json({ products });
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, price, quantity, description, category, image } = req.body;
        const product = await product
            .findByIdAndUpdate(id, { name, price, quantity, description, category, image }, { new: true });
        res.status(200).json({ product });
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}



const getProductBySellerId = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await productSchmea.find({ sellerId: id });
        res.status(200).json({ product });
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}


const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        await productSchmea.findByIdAndDelete(id);
        res.status(200).json({ message: "Product deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}



module.exports = {
    addProduct,
    getProducts,
    getProductById,
    getProductsByCategory,
    updateProduct,
    getProductBySellerId,
    deleteProduct
}


