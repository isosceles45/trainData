const mongoose = require('mongoose');
const connectDB = require('./db/connect'); 
const Product = require('./models/products');


data  = require('./data.json');

const start = async () => {
    try {
        await connectDB();
        await Product.deleteMany({});
        await Product.create(data);
        console.log("here")
    }catch (error) {
        console.log(error);
    }
}

start()