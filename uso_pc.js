const os = require('os')
const { arch, platform, totalmem, freemem } = os

setInterval(() => {
	const ram_total = parseInt(totalmem()/1024/1024)
	const ram_livre = parseInt(freemem()/1024/1024)
	const ram_usada = ram_total - ram_livre
	const uso = ram_usada/ram_total*100

	const dados = {
		'SO': platform(),
		'Arquitetura': arch(),
		'RAM Total': `${ram_total} MB`,
		'RAM Livre': `${ram_livre} MB`,
		'Uso': `${uso.toFixed(2)} %`
	}

	console.table(dados)
}, 1000)

