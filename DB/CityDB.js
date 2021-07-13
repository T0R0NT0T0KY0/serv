const Sequelize = require("sequelize");

const  dialect = process.env.DIALECT;
const  host = process.env.DBHOST;
const port = process.env.PORT;

const sequelize = new Sequelize("weather_info", "postgres", "3242091046", {
	dialect: dialect,
	host: host,
	port: port
});


const cityDB = sequelize.define("city", {
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
		type: Sequelize.NUMBER,
		allowNull: false
	},
	fill_temperature: {
		type: Sequelize.NUMBER,
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

sequelize.sync().then(result=>{
	console.log(result);
})
	.catch(err=> console.log(err));

module.exports = {cityDB};