import express  from "express"
import { createProduct, updateProduct, deleteProduct, getProduct, getProducts } from "../controllers/product.js";
import multer from 'multer'
// const path = require('path')

const router = express.Router();

var storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, './images/')     // './public/images/' directory name where save the file
    },
    filename: (req, file, callBack) => {
        callBack(null, new Date().getTime() + file.originalname)
    }
})

var upload = multer({
    storage: storage
});

// CREATE
router.post('/', upload.single('productimage'), createProduct);

// UPDATE
router.post('/:id', updateProduct)

// DELETE
router.delete('/:id', deleteProduct)

// GET
router.get('/:id', getProduct )

// GET ALL
router.get('/', getProducts)

export default router