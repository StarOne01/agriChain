const orderSchmea = require('../model/ordersSchmea');
const productSchmea = require('../model/produtcsSchmea');
const addOrder = async (req, res) => {
    try {
        const {userid ,sellerId, productid , quantity , address} = req.body;
        
        const product = await productSchmea.findById(productid);
        const totalAmount = product.productPrice * quantity;

        const order = await orderSchmea.create({
            userid,
            productid,
            quantity,
            totalAmount,
            sellerId,
            orderStatus: 'pending',
            address,
            orderDate: new Date()
        });
        res.status(201).json({message: "Order placed successfully"});
    

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        
    }
}

const getOrdersByFarmer = async (req, res) => {
    try {
        const { farmerid } = req.params;
        const orders = await orderSchmea.find({ sellerId: farmerid });
        res.status(200).json({ orders });
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}

const getOrders = async (req, res) => {
    try {
        const { userid } = req.params;
        const orders = await orderSchmea.find({ userid });
        res.status(200).json({ orders });
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}


const updateOrderStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        await orderSchmea.findByIdAndUpdate(id, { orderStatus: status });
        res.status(200).json({ message: "Order status updated" });
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}

module.exports = { addOrder, getOrders, updateOrderStatus , getOrdersByFarmer };

