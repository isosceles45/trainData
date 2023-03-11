const Train = require('../models/products');

const getAllProducts = async (req, res) => {
    console.log("object")
    const myData = await Train.find(req.query);
    console.log(req.query)
    console.log(myData)
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