
import { productModel } from "../models/ProductModel.mjs";


const productController = {
  getProduct: async (req, res) => {
    try {
      const dbProductsData = await productModel.getProducts()
      res.status(200).json({
        status:'ok', 
        msg:'Get all product list',
        data: dbProductsData,
      })
      
      
    } catch (err) {
        console.error(err)
        res.status(500).json({ status: 'err', msg: "Can't get product data" });
    }
  },

  getProductById: async (req, res) => {
    const { id } = req.params; 
  
    try { 
      const Product = await productModel.getProductById(id);
  
      if (Product.length === 0) {
        return res.status(404).json({
          status: 'err',
          msg: 'Product not found',
        });
      }
  
      res.status(200).json({
        status: 'ok',
        msg: 'Product found',
        data: Product,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'err', msg: "Can't get Product data" });
    }
  }, 

  searchProduct: async (req, res) => {
    const{data} = req.body
   
    try {     
      const searchProduct = await productModel.searchProduct(data)     
      res.status(200).json({status: 'ok', msg:"get search data successfully", data:searchProduct})
    } catch (error) {
      console.error(error)
    }
  },

  postProduct: async (req, res) => {
    const {title, description, img_url, categoryid, price } = req.body

    try {

    const checkGenre = await productModel.genreidProduct(categoryid)

    if(checkGenre === 0 ){
      return res.status(409).json({status:'err', msg:'wrong genre'})
    }

       const postProductResult = await productModel.createProduct({
        title,
        description,
        img_url,
        categoryid,
        price
      })
      res.status(200).json({
        status:'ok',
        msg:'Create Product success',
        data:postProductResult
      })

    } catch (err) {
      console.error(err)
      res.status(500).json({ status: 'err', msg: "Can't create Product" });
    }
  },
  
  putProduct: async (req, res) => {
    const {id} = req.params   
    const newData = req.body
    console.log(newData)
  
   
   try {
    const updateProduct = await productModel.updateProduct(
      newData,
      id,    
    )


    if(updateProduct === 0){
      return res.status(404).json({
        status:'err',
        msg:'movie not found'
      })
    }
    if(updateProduct === 'ERROR'){
      return res.status(500).json({
        status:'err',
        msg: "DB error"
      })
    }

    res.status(200).json({status:'ok', msg:'Product updated success'})
   } catch (error) {
    console.error(error)
   }
      
  },
  
  deleteProduct: async (req, res) => {
    const {id} = req.params
    try {
      const deleteProduct = await productModel.deleteProduct(
        id,
      )

      if(deleteProduct === 0){
        res.status(404).json({status:'err', msg:'Product cannot be deleted' })
      }

      res.status(200).json({status:'ok', msg:'Product deleted success'})
    } catch (error) {
      console.error(error)
    }
  }
  
  
}
export { productController }



