import { pool } from "../database/postgresConnection.mjs";

const profileModel = {

    getAllData: async () => {
        try {
            const allData = await pool.query(`SELECT * FROM product  ORDER BY id ASC `)
            return allData.rows
        } catch (error) {
            console.error(error)
        }
    }



}

export {profileModel}