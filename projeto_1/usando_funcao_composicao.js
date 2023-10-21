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

const processamento = fn.composicao(
	fn.lerDiretorio,
	fn.elementosTerminadosCom('.srt'),
	fn.lerArquivos,
	fn.mesclarConteudos,
	fn.separarTextoPor('\n'),
	fn.removerSeVazio,
	fn.removerSeIncluir('-->'),
	fn.removerSeApenasNumero,
	fn.removerSimbolos(simbolos),
	fn.mesclarConteudos,
	fn.separarTextoPor(' '),
	fn.removerSeVazio,
	fn.removerSeApenasNumero,
	agruparPalavras,
	ordenarPorAtribNumerico('qtde', 'desc')
);

processamento(caminho).then(console.log);
