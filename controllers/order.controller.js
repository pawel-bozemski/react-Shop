const Order = require('../models/order.model');
exports.postOrder = async (req, res) => {
    console.log('req.body', req.body);

    try {
        const newOrder = new Order({
            order: req.body.order,
            cart: req.body.cart,
            total: req.body.total,
        });
        await newOrder.save();
        res.json(newOrder);
    }
    catch (err) {
        res.status(500).json(err);
        console.log('err', err)
    }
};