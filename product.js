const Sequelize = require('sequelize')
const database = require('./db')

const Product = database.define('product', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	price: Sequelize.DECIMAL,
	description: Sequelize.STRING,
})

module.exports = Product
