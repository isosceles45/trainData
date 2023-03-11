const Product = require('../models/products');

const getAllProducts = async (req, res) => {
    const myData = await Product.find(req.query);
    console.log(req.query)
    res.status(200).json({
       myData
    })
}

const getAllTestingProducts = async (req, res) => {
    res.status(200).json({
        msg: "I am here testing"
    })
}

module.exports = {getAllProducts, getAllTestingProducts }