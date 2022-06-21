import mongoose from 'mongoose';
const { Schema } = mongoose;

const ProductSchema = new mongoose.Schema({
    productname:{
        type: String,
        required:true,
    },
    productimagename:{
        type: String,
        required:true,
    },
    productprices:{
        type: Number,
        required:true,
    },
    producttitle:{
        type: String,
        required:true,
    },
    featured:{
        type: Boolean,
        default:false,
    },
})

export default mongoose.model("Product", ProductSchema)