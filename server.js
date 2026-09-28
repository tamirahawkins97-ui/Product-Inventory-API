//DEPENDANCIES 
const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 6797
//INSTALL THE NPM LOG DEPENDANCY MORGAN TO TRACK THE STATUS OF YOUR DATA ACROSS THE APPLICATION AND DB.
//PRODUCT ROUTES 

const connectDB = require('./db/connection');

//DATABASE CONNECTION 
//Mongoose/MongoDB Connection section
connectDB();

//MIDDLEWARE 
app.use(express.urlencoded())
app.use(express.json());

//Mount Router Here 

//LANDING ROUTE OR INITIAL PAGE 
app.get('/api/products', (req,res) =>{
    res.send("Welcome to the Products Page!")
})

//PORT
app.listen(PORT, (req,res) =>{
    console.log(`Server running on: http://localhost:${PORT}`);
})