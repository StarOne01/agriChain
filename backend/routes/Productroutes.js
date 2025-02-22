const router = require('express').Router();
const { addProduct, getProducts, getProductById, getProductsByCategory, updateProduct } = require('../controller/ProductController');

router.post('/addProduct', addProduct);
router.get('/getProducts', getProducts);
router.get('/getProductById/:id', getProductById);
router.get('/getProductsByCategory/:category', getProductsByCategory);
router.put('/updateProduct/:id', updateProduct);

module.exports = router;