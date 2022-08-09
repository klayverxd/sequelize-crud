;(async () => {
	const database = require('./db')
	const Product = require('./product')
	await database.sync()

	// cria produto
	const newProduct = await Product.create({
		name: 'Produto 1',
		price: 10.0,
		description: 'Descrição do produto 1',
	})

	const newProduct2 = await Product.create({
		name: 'Produto 2',
		price: 15.0,
		description: 'Descrição do produto 2',
	})

	// lista produtos
	const products = await Product.findAll({
		where: {
			price: 10,
		},
	})

	// atualiza produto
	const product = await Product.findByPk(1)
	console.log(product)

	product.description = 'Descrição atualizada'
	await product.save()

	// deleta produto
	const product_delete = await Product.findByPk(2)
	await product_delete.destroy()
})()
