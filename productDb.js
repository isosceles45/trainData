const mongoose = require('mongoose');
const connectDB = require('./db/connect'); 
const Train = require('./models/products');


data  = require('./data.json');

const start = async () => {
    try {
        await connectDB();
        await Train.deleteMany({});
        await Train.create(data);
        console.log("here")
    }catch (error) {
        console.log(error);
    }
}

start()