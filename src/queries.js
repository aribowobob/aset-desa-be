const dotenv = require('dotenv');

dotenv.config();

const Pool = require('pg').Pool;
const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

const getInventaris = (request,response) => {
  pool.query('SELECT id, nama FROM inventaris',(error,results) =>{
    if (error){
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {
  getInventaris
}
