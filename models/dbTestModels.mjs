import { pool } from "../database/postgresConnection.mjs";

const DbTestModel = {
  getProduct: async () => {
    try {
      const result = await pool.query("SELECT * FROM product");
   
      return result.rows;
    } catch (error) {
      console.error(error);
    }
  },
};

export { DbTestModel };
