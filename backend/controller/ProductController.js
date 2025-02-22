const productSchmea = require("../model/produtcsSchmea");
const orderSchmea = require("../model/ordersSchmea");
const paymentSchmea = require("../model/paymentSchmea");
const User = require("../model/userSchmea");
const Farmer = require("../model/FarmerSchmea");
const addProduct = async (req, res) => {
  try {
    //         const { name, price, stock, description, category, image, userid } = req

    // const product = await productSchmea.create({
    //   productName: name,
    //   productPrice: price,
    //   stock: stock,
    //   productDescription: description,
    //   productCategory: category,
    //   productImage: image,
    //   sellerId: userid
    // });
    const { name, price, stock, description, category, image, userid } = req.body;

    // Ensure productImage is an array
    const productImages = Array.isArray(image) ? image : [image];

    const product = await productSchmea.create({
        productName: name,
        productPrice: price,
        stock: stock,
        productDescription: description,
        productCategory: category,
        productImage: productImages,
        sellerId: userid
    });

    res.status(201).json({ success: true, product });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await productSchmea.find();
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productSchmea.findById(id);
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const getProductsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const products = await productSchmea.find({
      category: category,
    });
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, quantity, description, category, image } = req.body;
    const product = await product.findByIdAndUpdate(
      id,
      { name, price, quantity, description, category, image },
      { new: true }
    );
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const getProductBySellerId = async (req, res) => {
  try {
    const { sellerId } = req.params;
    console.log(sellerId);

    const product = await productSchmea.find({ sellerId: sellerId });
    res.json({ product }).status(200);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await productSchmea.findByIdAndDelete(id);
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const getSellerDetails = async (req, res) => {
  try {
    const { sellerId } = req.params;
    console.log(sellerId);
    
    const seller = await Farmer.findById(sellerId);
    res.json({ seller }).status(200);
  } catch (error) {
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
  deleteProduct,
  getSellerDetails
};
