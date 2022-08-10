const Product = require('../tables/product')

const express = require('express')
const listProducts = express.Router()

listProducts.post('/listProducts', async (req, res) => {
	const { page, size } = req.body

	const products = await Product.findAll()
	const total_items = await Product.count()
	const number_pages =
		total_items % size === 0
			? total_items / size
			: Math.floor(total_items / size) + 1

	const productsPaginated = products.slice((page - 1) * size, page * size)

	return res.status(200).json({
		total_products: total_items,
		products: productsPaginated,
		page: {
			items_per_page: size,
			current_page: page,
			number_pages: number_pages,
		},
	})
})

module.exports = listProducts
