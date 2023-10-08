function esperarPor(tempo = 2000) {
	return new Promise(function (resolve) {
		setTimeout(() => resolve(), tempo);
	});
}

// esperarPor(2000)
// 	.then(() => console.log('executando promise 1'))
// 	.then(esperarPor)
// 	.then(() => console.log('executando promise 2'))
// 	.then(esperarPor)
// 	.then(() => console.log('executando promise 3'));

function retornarValor() {
	return new Promise(resolve => {
		setTimeout(() => resolve(10), 5000);
	});
}

async function executar() {
	let valor = await retornarValor();

	await esperarPor(1500);
	console.log(`async/await ${valor + 1}`);
	await esperarPor(1500);
	console.log(`async/await ${valor + 2}`);
	await esperarPor(1500);
	console.log(`async/await ${valor + 3}`);

	return valor + 4;
}

executar().then(console.log);
