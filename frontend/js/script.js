(function () {
	const host = 'http://localhost'
	const porta = 3001
	
	let intervalo = setInterval(function() { 
		let xhttp = new XMLHttpRequest()
		xhttp.open('GET', host + ':' + porta, true)
		xhttp.send()
		xhttp.onload = function () {
			let resposta = JSON.parse(xhttp.response)
			let SO = resposta.dados.SO
			let ram_total = resposta.dados.ram_total
			let ram_livre = resposta.dados.ram_livre
			let uso = resposta.dados.uso
			document.getElementById('SO').innerText = SO
			document.getElementById('ram-total').innerText = ram_total			
			document.getElementById('ram-livre').innerText = ram_livre
			document.getElementById('uso-ram').innerText = uso
			}
	}, 500)

		intervalo
})();
