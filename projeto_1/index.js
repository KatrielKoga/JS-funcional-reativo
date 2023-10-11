const path = require('path');
const fn = require('./funcoes');

const caminho = path.join(__dirname, '..', 'dados', 'legendas');

const simbolos = [
	'♪',
	'.',
	',',
	'?',
	'-',
	'"',
	'_',
	'<i>',
	'<i/>',
	'\r',
	'[',
	']',
	'{',
	'}',
	'(',
	')',
];

function agruparPalavras(palavras) {
	return Object.values(
		palavras.reduce((acc, palavra) => {
			const p = palavra.toLowerCase();
			const qtde = acc[p] ? acc[p].qtde + 1 : 1;
			acc[p] = { elemento: p, qtde };
			return acc;
		}, {})
	);
}

function ordenarPorAtribNumerico(attr, ordem = 'asc') {
	return function (array) {
		const desc = (o1, o2) => o2[attr] - o1[attr];
		const asc = (o1, o2) => o1[attr] - o2[attr];
		return array.sort(ordem === 'asc' ? asc : desc);
	};
}

fn.lerDiretorio(caminho)
	.then(fn.elementosTerminadosCom('.srt'))
	.then(fn.lerArquivos)
	.then(fn.mesclarConteudos)
	.then(fn.separarTextoPor('\n'))
	.then(fn.removerSeVazio)
	.then(fn.removerSeIncluir('-->'))
	.then(fn.removerSeApenasNumero)
	.then(fn.removerSimbolos(simbolos))
	.then(fn.mesclarConteudos)
	.then(fn.separarTextoPor(' '))
	.then(fn.removerSeVazio)
	.then(fn.removerSeApenasNumero)
	.then(agruparPalavras)
	.then(ordenarPorAtribNumerico('qtde', 'desc'))
	.then(console.log);
