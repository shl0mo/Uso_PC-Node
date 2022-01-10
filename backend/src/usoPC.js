const os = require('os')
const { arch, platform, totalmem, freemem } = os

setInterval(() => {
	const ram_total = parseInt(totalmem()/1024/1024)
	const ram_livre = parseInt(freemem()/1024/1024)
	const ram_usada = ram_total - ram_livre
	const uso = ram_usada/ram_total*100

	const dados = {
		'SO': platform(),
		'arquitetura': arch(),
		'ram_total': `${ram_total} MB`,
		'ram_livre': `${ram_livre} MB`,
		'uso': `${uso.toFixed(2)} %`
	}
	exports.dados = dados
}, 500)

