const router = require('express').Router();
const { addProduct, getProducts, getProductById, getSellerDetails, getProductsByCategory, updateProduct ,getProductBySellerId } = require('../controller/ProductController');



router.post('/addProduct', addProduct);
router.get('/getProducts', getProducts);
router.get('/getProductById/:id', getProductById);
router.get('/getProductsByCategory/:category', getProductsByCategory);
router.put('/updateProduct/:id', updateProduct);
router.get('/getProductBySellerId/:sellerId', getProductBySellerId);
router.get('/getSellerDetails/:sellerId', getSellerDetails);
module.exports = router;