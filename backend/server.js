const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const authroutes =require('./routes/Authroutes')
const productroutes = require('./routes/Productroutes')
const orderroutes = require('./routes/Orderroutes')
app.use(express.json())
app.use(cors());
const dotenv = require('dotenv');
dotenv.config();

const connectDb = async ()=>{
    try {
        const db = await mongoose.connect(process.env.DATABASE_URL, {
         dbName:"agrichain"
        });

        console.log("MongoDB connected");
        

    } catch (error) {
        console.log(error)
        
    }  
}

connectDb();

app.get('/', (req, res) => {
    res.json({ message: 'Hello from server!' });
});

app.use('/api/auth',authroutes)
app.use('/api/products',productroutes)
app.use('/api/orders',orderroutes)


app.listen(3000, () => {
    console.log('Server listening on port 5000');
});
