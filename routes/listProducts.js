const Product = require('../tables/product')

const express = require('express')
const listProducts = express.Router()

listProducts.post('/listProducts', async (req, res) => {
	const { offset, page = 1, size } = req.body

	const products = await Product.findAll()
	const total_items = await Product.count()
	const number_pages =
		(total_items - offset) % size === 0
			? (total_items - offset) / size
			: Math.floor((total_items - offset) / size) + 1

	const productsPaginated = products.slice(
		(page - 1) * size + offset - 1,
		page * size + offset - 1
	)

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
