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


const cityDB = sequelize.define("city", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: false,
        allowNull: false,
        unique: true
    },
    city: {
        primaryKey: true,
        type: Sequelize.STRING,
        allowNull: false
    },
    weather: {
        type: Sequelize.STRING,
        allowNull: false
    },
    temperature: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    fill_temperature: {
        type: Sequelize.DOUBLE,
    },
    humidity : {
      type: Sequelize.STRING,
      allowNull: false
    },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false
    }
});

sequelize.sync().then(result => {
    console.log("DB connected successful");
})
    .catch(err => {
        console.log("DB error connection")
        console.log(err);
    });

module.exports = {cityDB};