//DEPENDANCIES 
const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {type: String, required:true},
    description: {type: String, required:true},
    price: {type: Number, required:true, min: [0.01, 'Must be greater than 0.'], max: [100.00, 'Cannot be greater than 100.']},
    category: {type: String, required:true},
    inStock: {type: Boolean },
    tags: {type:[String],},
},
   { timestamps: true }

);

module.exports = mongoose.model('Product', productSchema);