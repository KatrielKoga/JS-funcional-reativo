function funcionarOuNao(valor, chanceErro) {
	return new Promise((resolve, reject) => {
		try {
			// console.lg('test');
			if (Math.random() < chanceErro) {
				reject('Ocorreu um erro');
			} else {
				resolve(valor);
			}
		} catch (error) {
			reject(error);
		}
	});
}

funcionarOuNao('testando...', 0.5)
	.then(v => `Valor: ${v}`)
	.then(
		v => console.lg(v),
		err => console.log(`Erro esp.: ${err}`) // catch especifico para esse then
	)
	.catch(err => console.log(`Erro: ${err}`));
