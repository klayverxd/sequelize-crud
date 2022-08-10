const Product = require('../tables/product')

const express = require('express')
const deleteProduct = express.Router()

deleteProduct.delete('/deleteProduct', async (req, res) => {
	const { id } = req.body

	id ? await Product.destroy({ where: { id: id } }) : await Product.truncate()

	return res.status(200).json({
		message: 'Produto deletado com sucesso!',
	})
})

module.exports = deleteProduct
