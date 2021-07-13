const Pool = require('pg').Pool
require('dotenv').config();

const user = process.env.DBUSERNAME
const password = process.env.DBPASSWORD
const host = process.env.DBHOST
const port = process.env.DBPORT
const database = process.env.DB

const pool = new Pool({
	user: user,
	password: password,
	host: host,
	port: port,
	database: database
});


module.exports = pool;