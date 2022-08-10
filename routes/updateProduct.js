const Product = require('../tables/product')

const express = require('express')
const updateProduct = express.Router()

updateProduct.put('/updateProduct', async (req, res) => {
	const { id, name, price, description } = req.body

	const product = await Product.findByPk(id)
	product.name = name
	product.price = price
	product.description = description

	await product.save()

	return res.status(200).json({
		message: 'Produto atualizado com sucesso!',
	})
})

module.exports = updateProduct
