//DEPENDANCIES 
const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 6797
//INSTALL THE NPM LOG DEPENDANCY MORGAN TO TRACK THE STATUS OF YOUR DATA ACROSS THE APPLICATION AND DB.
const productRoutes = require('./routes/productRoutes')

const connectDB = require('./db/connection');

//DATABASE CONNECTION 
//Mongoose/MongoDB Connection section
connectDB();

//MIDDLEWARE 
app.use(express.urlencoded({extended: true}))
app.use(express.json());

//Mount Router Here 
app.use('/api/products', productRoutes)

//LANDING ROUTE OR INITIAL PAGE 
app.post('/api/products', (req,res) =>{
    res.send("Welcome to the Products Page!")
})

//PORT
app.listen(PORT, (req,res) =>{
    console.log(`Server running on: http://localhost:${PORT}`);
})