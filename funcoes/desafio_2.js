const carrinho = [
	{ nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true },
	{ nome: 'Impressora', qtde: 1, preco: 649.5, fragil: true },
	{ nome: 'Caderno', qtde: 4, preco: 27.1, fragil: false },
	{ nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false },
	{ nome: 'Tesoura', qtde: 1, preco: 19.2, fragil: true },
];

// 1. fragil: true
// 2. pegar qtde e preco
// 3. media totais

const isFragil = item => item.fragil;
const total = item => item.qtde * item.preco;
const media = (acc, item) => {
	const novaQtd = acc.qtde + 1;
	const novoTotal = acc.total + item;
	return {
		qtde: novaQtd,
		total: novoTotal,
		media: novoTotal / novaQtd,
	};
};

const result = carrinho
	.filter(isFragil)
	.map(total)
	.reduce(media, { qtde: 0, total: 0, media: 0 }).media;
console.log(`A média é ${result}`);
