import { pool } from "../database/postgresConnection.mjs"

const loginModel = {
    
    checkLoginValues: async (email, password) => {
      
        try {
            const checkLoginValues = await pool.query(`
                SELECT users.email, users.username, users_secrets.password, users_roles.role_name 
                FROM users
                JOIN users_secrets ON users.id = users_secrets.userid
                JOIN users_roles ON users_secrets.roleid = users_roles.id
                WHERE email = $1 and password = $2`,
               [ email, password]
            )
                 
           return checkLoginValues.rows
            
            
        } catch (error) {
            console.error(error)
        }

    }
}

export { loginModel}