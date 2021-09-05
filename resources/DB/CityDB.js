const {Sequelize} = require("sequelize");
const {sequelize} = require("resources/DB/DB");

const cityDB = sequelize.define("city", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: false,
        allowNull: false,
        unique: true
    },
    name: {
        primaryKey: true,
        type: Sequelize.STRING,
        allowNull: false
    },
    city: {
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

module.exports = {cityDB};