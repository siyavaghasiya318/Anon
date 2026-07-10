import express from 'express';
import { AddProduct, Getproducts, GetSellerProducts } from '../Controller/ProductController.js';
import { uploadProduct } from '../MIddleware/Multer.js';
import SellerAuth from '../MIddleware/SellerAuth.js';
import AuthUser from '../MIddleware/UserAuth.js';


const ProductRoute = express.Router();


ProductRoute.post('/addproduct', SellerAuth,  uploadProduct.any(), AddProduct)
ProductRoute.get('/getproducts', Getproducts)
ProductRoute.get('/products',SellerAuth, GetSellerProducts)

export default ProductRoute