//DEPENDANCIES 
const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

//Routes

//I.N.D.U.C.E.S

//Index 

//New

//Delete 

//Update the current post data.

router.put('/:id', async(req,res)=>{
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {  new: true, runValidators: true} // runValidators ensures updates obey schema rules
        );
        if(!updatedProduct){
            return res.status(404).json({message: 'No product was found updated.'})
        }

    } catch(error){

    }
});


//Create a new post!

router.post('/', async (req, res) =>{
    try{
        const createdProduct = await Product.create(req.body);
        res.status(201).json(createdProduct);

     if(!createdProduct){
        return res.status(400).json({message: 'Cannot create a product at this time. Please try again.'})
        }
    } catch (error) {
        console.error(error);
        res.status(400).json({error: error.message})
    };
});

//Edit 

//Show - Show one post by it's id. 

router.get('/:id', async (req,res) =>{
    try {
        const {id} = req.params;
        const product = await Product.findById(id)
        if (!product){
            return res.status(404).json({message: 'Product not found!'})
        }
    } catch(error){
        console.error(error)
        res.status(404).json({error: error.message})
    }
})