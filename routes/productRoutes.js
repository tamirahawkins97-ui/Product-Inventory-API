//DEPENDANCIES 
const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

//Routes

//I.N.D.U.C.E.S

//Index - Read all products with Advanced Querying.
router.get('/', async(req,res) =>{
    try {
       const { category, minPrice, maxPrice, sortBy, page = 1, limit = 10} = req.query;
       const filter = {};
       // Filter by category (exact match)
    if (category) {
      filter.category = category;
    }

    // Filter by price range ($gte and $lte)
    if (minPrice !== undefined || maxPrice !== undefined) {
      filter.price = {};
      if (minPrice !== undefined) {
        filter.price.$gte = Number(minPrice);
      }
      if (maxPrice !== undefined) {
        filter.price.$lte = Number(maxPrice);
      }
    }

    // 2. Build the sort options
    let sortOptions = {};
    if (sortBy === 'price_asc') {
      sortOptions = { price: 1 };
    } else if (sortBy === 'price_desc') {
      sortOptions = { price: -1 };
    } else {
      // Default fallback sort (e.g., newest first)
      sortOptions = { createdAt: -1 };
    }

    // 3. Calculate pagination values
    const pageNum = Math.max(1, parseInt(page, 10) || 1);
    const limitNum = Math.max(1, parseInt(limit, 10) || 10);
    const skip = (pageNum - 1) * limitNum;

    // 4. Execute queries in parallel (results + total count for metadata)
    const [products, totalCount] = await Promise.all([
      Product.find(filter)
        .sort(sortOptions)
        .skip(skip)
        .limit(limitNum),
      Product.countDocuments(filter)
    ]);

    // 5. Send back the payload with pagination metadata
    res.json({
      page: pageNum,
      limit: limitNum,
      totalPages: Math.ceil(totalCount / limitNum),
      totalProducts: totalCount,
      data: products
    });

    } catch(error){
        console.error(error)
        res.status(500).json({message: 'Failed to connect to the server.', error: error.message })
    }
});

//New

//Delete a product by its id.
router.delete('/:id', async (req,res) =>{
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id)
        
        if(!deletedProduct){
            return res.status(404).json({message: 'No product found to delete.'})
        }
        res.status(200).json({message: 'Product was deleted successfully.'})
    } catch(error){
        console.error(error)
        res.status(500).json({error: error.message})
    }
});

//Update the current post data.

router.put('/:id', async(req,res)=>{
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {  new: true, runValidators: true} // runValidators ensures updates obey schema rules
        );
        if(!updatedProduct){
            return res.status(400).json({message: 'No product was found updated.'})
        }
        res.status(200).json(updatedProduct);
    } catch(error){
        console.error(error);
        res.status(500).json({ error: error.message });
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
        res.status(200).json(product);
    } catch(error){
        console.error(error)
        res.status(500).json({error: error.message})
    }
});

module.exports = router;