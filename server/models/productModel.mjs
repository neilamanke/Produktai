import { pool } from "../database/postgresConnection.mjs";

const productModel = {
  getProduct: async () => {
    try {
      const result = await pool.query(`
SELECT   
product.id, 
product.title, 
product.description,
product.img_url,  
category.category_type,
product.price
FROM product
INNER JOIN category
ON product.categoryid = category.id
ORDER BY id ASC `);
      return result.rows;
    } catch (error) {
      console.error(error);
    }
  },

  getProductById: async (id) => {
    try {
      const result = await pool.query(
        `product.id, 
product.title, 
product.description,
product.img_url,  
category.category_type,
product.price
FROM product
INNER JOIN category
ON product.categoryid = category.id
        WHERE product.id = $1`,
        [id]
      );
      return result.rows;
    } catch (error) {
      console.error(error);
    }
  },

  categoryidProduct: async (categoryid) => {
    try {
      const categorySize = await pool.query(
        `SELECT * FROM category WHERE id = $1;`,
        [categoryid]
      );
      return categorySize.rowCount;
    } catch (error) {
      console.error(error);
    }
  },

  searchProduct: async (data) => {
    try {
      const searchProduct = await pool.query(
        `SELECT * FROM product WHERE LOWER (title) LIKE LOWER ($1) ;`,
        ["%" + data + "%"]
      );

      return searchProduct.rows;
    } catch (error) {
      console.error(error);
    }
  },

  createProduct: async (jonas) => {
    const {
      title,
      description,
      img_url,
      categoryid,
      price,
    } = jonas;
    const categoryidInt = parseInt(categoryid);
    const priceInt = parseInt(price);
    try {
      const insertMovie = await pool.query(
        `
        INSERT INTO product (title, description, img_url,  categoryid, price )
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING title, description, img_url, categoryid, price`,
        [
          title,
          description,
          img_url,
          categoryidInt,
          priceInt,
        ]
      );

      return insertMovie.rows[0];
    } catch (error) {
      console.error(error);
    }
  },

  updateProduct: async (newData, id) => {
    try {
      const updateProduct = await pool.query(
        `UPDATE product 
      SET title = $1, 
      description = $2, 
      img_url = $3, 
      categoryid  = $4,
      price = $5
      WHERE id = $6;`,
        [
          newData.title,
          newData.description,
          newData.img_url,
          newData.categoryid,
          newData.price,
          id,
        ]
      );

      return updateProduct.rowCount;
    } catch (error) {
      console.error(error);
      return error.severity;
    }
  },

  deleteProduct: async (id) => {
    const deleteProduct = await pool.query(
      `
        DELETE FROM Product
        WHERE id = $1;`,
      [id]
    );
    return deleteProduct.rowCount;
  },
};
export { productModel };
