const mongoose = require('mongoose');

uri = "mongodb+srv://user:z1Agjxcab3ZrNlaZ@cluster0.dtditcl.mongodb.net/Cluster0?retryWrites=true&w=majority"

const connectDB = async () => {
    console.log("connected to db")
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}

module.exports = connectDB;