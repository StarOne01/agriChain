const router = require('express').Router();
const { addOrder, getOrders , getOrdersByFarmer ,updateOrderStatus } = require('../controller/ordersController');
const { getuserCart , addProductToCart } = require('../controller/UserController');
router.post('/addOrder', addOrder);
router.get('/getOrders', getOrders);
router.get('/getOrdersByFarmer/:farmerid', getOrdersByFarmer);
router.put('/updateOrderStatus/:id', updateOrderStatus);
router.get('/getuserCart/:userid', getuserCart);
router.post('/addProductToCart', addProductToCart);

module.exports = router;