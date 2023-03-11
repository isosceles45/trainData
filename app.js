const express = require('express');
const app = express();
const PORT =  process.env.PORT || 5000;
const products_routes = require('./routes/products');
const connectDB = require('./db/connect');
data  = require('./data.json');
//mongodb+srv://himanshu:<password>@cluster0.dtditcl.mongodb.net/?retryWrites=true&w=majority

app.get('/', (req, res) => {
    res.send('Hello World');
})


app.use("/api/products", products_routes)

const start = async ()=> {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log("data length", data.length)
            console.log('Server is running on port 5000');
        })
    }catch(err){
        console.log(err);
    }
}

start()