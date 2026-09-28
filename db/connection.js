//DEPENDANCIES 
const mongoose = require('mongoose');

const connectDB = () =>{
    mongoose.connect(process.env.MONGO_URI2 || MONGO_URI);
    const db = mongoose.connection;

    db.on()
}