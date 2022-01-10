const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors({ origin: '*' }))

const host = 'http://localhost'
const porta = 3001
const dados = require('./usoPC')

app.get('/', function(req, res) {
	let url = req.url
	res.end(JSON.stringify(dados))
})

app.listen(porta, function () {
	console.log(`Servidor rodando em ${host}:${porta}`)
})
