let qtdeExecucoes = 0;

// função pura!
function somar(a, b) {
	qtdeExecucoes++;
	return a + b;
}

console.log(qtdeExecucoes);
console.log(somar(31, 68));
console.log(somar(31, 68));
console.log(somar(31, 68));
console.log(somar(31, 68));
console.log(somar(31, 68));
console.log(somar(31, 68));
console.log(qtdeExecucoes);
