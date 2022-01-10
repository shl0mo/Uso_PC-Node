const http = require('http')
const host = 'http://localhost'
const porta = 3001
const dados = require('./usoPC')

http.createServer(function(req, res) {
	let url = req.url
	res.end(JSON.stringify(dados))
}).listen(porta, function () {
	console.log(`Servidor rodando em ${host}:${porta}`)
})
