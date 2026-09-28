//DEPENDANCIES 
const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {type: String, required:true},
    description: {type: String, required:true},
    price: {type: Number, required:true, min: [0.01, 'Must be greater than 0.'], max: [100.00, 'Cannot be greater than 100.']},
    category: {type: String, required:true},
    inStock: {type: true, },
    tags: {type:[String],},
    createdAt: {type: Date.now}

});

module.exports = mongoose.Model('Product', productSchema);