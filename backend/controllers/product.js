import Product from "../modals/product.js"; 

export const createProduct = async (req,res,next) => {
    // const newProduct = new Product(req.body)
    console.log(req.file.originalname);
    const newProduct = new Product({
        productname:req.body.productname,
        productprices:req.body.productprices,
        productimagename:req.file.originalname,
        producttitle:req.body.producttitle
    })
    
    try{
        // const saveProduct = await newProduct.save()
        const saveProductFile = await newProduct.save()
        res.status(200).json( saveProductFile)
        
    }catch(err){
        next(err)
    }
}

export const updateProduct = async (req,res,next) => {
    try{
        const updateProduct = await Product.findByIdAndUpdate(req.params.id, { $set: req.body},
            { new: true})
        res.status(200).json(updateProduct)
    }catch(err){
        res.status(500).json(err)
    }
}

export const deleteProduct = async (req,res,next) => {
    try{
        await Product.findByIdAndDelete(req.params.id)
       res.status(200).json("Product has been deleted")
   }catch(err){
       res.status(500).json(err)
   }
}

export const getProduct = async (req,res,next) => {
    
        try{
            const Product = await Product.findById(req.params.id)
            res.status(200).json(Product)
        }catch(err){
            res.status(500).json(err)
        }
}

export const getProducts = async (req,res,next) => {
    try{
        const Products = await Product.find()
        res.status(200).json(Products)
    }catch(err){
        next(err)
    }
}