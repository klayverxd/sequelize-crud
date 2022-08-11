const Product = require('../tables/product')

const express = require('express')
const deleteProduct = express.Router()

deleteProduct.delete('/deleteProduct/:product_id', async (req, res) => {
	const { product_id } = req.params

	product_id
		? await Product.destroy({ where: { id: product_id } })
		: await Product.truncate()

	return res.status(200).json({
		message: 'Produto deletado com sucesso!',
	})
})

module.exports = deleteProduct
