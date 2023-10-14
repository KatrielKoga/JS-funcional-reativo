// funções que operam em outras funções,
// tornando-as como argumentos ou retornando-as,
// são chamadas de higher order functions

function executar(fn, ...params) {
	return function (textoInicial) {
		return `${textoInicial} ${fn(...params)}`;
	};
}

function somar(a, b, c) {
	return a + b + c;
}
function multiplicar(a, b) {
	return a * b;
}

const r1 = executar(somar, 4, 5, 6)('o resultado da soma é');
const r2 = executar(multiplicar, 4, 5)('o resultado da multiplicação é');

console.log({ r1, r2 });
