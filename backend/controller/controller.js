import Product from '../config/models/product.model.js';
import mongoose from 'mongoose';
export const getProducts = async(req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({success:true, data:products})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success:false, message:"Internal server error"})
    }
}

export const createProduct = async(req, res) => {
    const product = req.body;
    if(!product.name || !product.price ||!product.image){
        return res.status(400).json({success:false, message:"Please provide all the fields"})
    }
    const newProduct = new Product(product)
    try{
        await newProduct.save();
        res.status(201).json({success:true, data: newProduct})
    }catch(error){
        console.log(error.message);
        res.status(500).json({success:false, message:"Internal server error"})
    }
}

export const updateProduct = async(req, res) => {
    const {id} = req.params;
    const product = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false, message:"Invalid product id"})
        console.log(error.message);
    } 
    try {
      const updatedProduct =  await Product.findByIdAndUpdate(id, product, {new:true});
      res.status(200).json({success:true, data:updatedProduct})
    } catch (error) {
        res.status(505).json({success:false, message:"Server Error"})
        console.log(error.message);
    }
}

export const deleteProduct = async(req, res) => {
    const {id} = req.params;
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success:true, message:"Product deleted successfully"})
    } catch (error) {
        res.status(404).json({success:false, message:"Product not found"})
        
    }
}