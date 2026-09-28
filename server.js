//DEPENDANCIES 
const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 6797
//INSTALL THE NPM LOG DEPENDANCY MORGAN TO TRACK THE STATUS OF YOUR DATA ACROSS THE APPLICATION AND DB.
//PRODUCT ROUTES 

//DATABASE CONNECTION 
//Mongoose/MongoDB Connection section

//MIDDLEWARE 
app.use(express.urlencoded())
app.use(express.json());

//LANDING ROUTE OR INITIAL PAGE 

//PORT
app.listen(PORT, (req,res) =>{
    console.log(`Server running on: http://localhost:${PORT}`);
})