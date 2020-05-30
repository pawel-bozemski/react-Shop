const Product = require('../models/product.model');

exports.getAll = async (req, res) => {

    try {
        const products = await Product.find();
        res.json(products);
    }
    catch (err) {
        res.status(500).json(err);
    }
};

exports.getOne = async (req, res) => {

    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            res.status(404).json({ message: 'Product not found' });
        } else {
            res.json(product)
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
};