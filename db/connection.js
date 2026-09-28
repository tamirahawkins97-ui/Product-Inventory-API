//DEPENDANCIES 
const mongoose = require('mongoose');

const connectDB = () =>{
    mongoose.connect(process.env.MONGO_URI2 || MONGO_URI, {
        dbName: 'product-inventory-API'
    });
    const db = mongoose.connection;

    db.on('error', (error) => console.log(error.message + "MongoDB is not running."));
    db.on('connected', () => console.log(`Successfully connected to MongoDB! Database: ${db.name}`))
    db.on('disconnected', ()=> console.log('Unable to connect to MongoDB. Please try again.'))
};

module.exports = connectDB;