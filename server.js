require('dotenv').config()
const createProduct = require('./routes/createProduct')
const listProducts = require('./routes/listProducts')
const deleteProduct = require('./routes/deleteProduct')
const updateProduct = require('./routes/updateProduct')

const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors({ origin: '*' }))
app.use(express.json())

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.use(createProduct)
app.use(listProducts)
app.use(deleteProduct)
app.use(updateProduct)

app.listen(3000, () => {
	console.log('Server started on port 3000')
})
