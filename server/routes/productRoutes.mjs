
import express from 'express'
import {  productController } from '../controllers/productController.mjs'


const product = express.Router()

product.get('/', productController.getProduct)
product.post('/', productController.postProduct)
product.post('/search', productController.searchProduct)
product.get('/:id', productController.getProductById)
product.put('/:id', productController.putProduct)
product.delete('/:id', productController.deleteProduct)

export {product}


