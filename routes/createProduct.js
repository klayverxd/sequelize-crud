const Product = require('../tables/product')

const express = require('express')
const createProduct = express.Router()

createProduct.post('/createProduct', async (req, res) => {
	const { name, price, description } = req.body

	await Product.create({
		name,
		price,
		description,
	})

	return res.status(200).json({
		message: 'Produto criado com sucesso!',
	})
})

module.exports = createProduct
