const jsonwebtoken = require('jsonwebtoken');
const User = require('../model/userSchmea');


const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jsonwebtoken.verify(token, process.env.SIGN_JWT);
        const user = await User.findOne({ _id: decoded._id });
        if (!user) {
            res.status(401).send({ error: 'Please authenticate' });
        }
        req.user = user;
        req.token = token;
        next();
    } catch (error) {
        res.status(401).send({ error: 'Please authenticate' });
    }
}

module.exports = auth;