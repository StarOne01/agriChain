const router = require('express').Router();

const { registerUser,loginUser } = require('../controller/UserController');
const {loginFarmer,registerFarmer} = require('../controller/FarmerController');
const auth = require('../util/auth');


router.post('/register',auth, registerUser);
router.post('/login',auth, loginUser);
router.post('/registerFarmer', registerFarmer);
router.post('/loginFarmer', loginFarmer);

module.exports = router;