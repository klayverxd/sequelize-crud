const Product = require('../tables/product')

const express = require('express')
const updateProduct = express.Router()

updateProduct.put('/updateProduct/:product_id', async (req, res) => {
	const { product_id } = req.params
	const { name, price, description } = req.body

	const product = await Product.findByPk(product_id)
	product.name = name
	product.price = price
	product.description = description

	await product.save()

	return res.status(200).json({
		message: 'Produto atualizado com sucesso!',
	})
})

module.exports = updateProduct
