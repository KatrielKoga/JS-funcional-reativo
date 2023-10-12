let qtdeExecucoes = 0;

// função inpura!
function somar(a, b) {
	qtdeExecucoes++; // efeito colateral observavel
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
