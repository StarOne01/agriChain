const router = require('express').Router();

const { registerUser,loginUser } = require('../controller/UserController');
const {loginFarmer,registerFarmer} = require('../controller/FarmerController');
const auth = require('../util/auth');


router.post('/register',registerUser);
router.post('/login', loginUser);
router.post('/registerFarmer', registerFarmer);
router.post('/loginFarmer', loginFarmer);

module.exports = router;