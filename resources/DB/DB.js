const Sequelize = require("sequelize");
require('dotenv').config();

const dialect = process.env.DIALECT;
const host = process.env.DBHOST;
const password = process.env.DBPASSWORD;
const user = process.env.DBUSERNAME;
const db = process.env.DB;
const port = process.env.DBPORT;

const sequelize = new Sequelize(db, user, password, {
    dialect: dialect,
    host: host,
    port: port,
});



sequelize.sync().then(() => {
    console.log("DB connected successful");
})
    .catch(err => {
        console.log("DB error connection")
        console.log(err);
    });



module.exports = {sequelize};
