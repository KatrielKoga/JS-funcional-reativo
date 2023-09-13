function bomDia() {
	console.log('bom dia');
}

const boaTarde = function () {
	console.log('boa tarde');
};

// passar func como param para outra func
function executarQualquerCoisa(fn) {
	if (typeof fn === 'function') {
		fn();
	}
}

executarQualquerCoisa(3);
executarQualquerCoisa(bomDia);
executarQualquerCoisa(boaTarde);

// retornar uma func a partir de outra func

function potencia(base) {
	return function (exp) {
		return Math.pow(base, exp);
	};
}

const potenciaDe2 = potencia(2);
console.log(potenciaDe2(8));

console.log(potencia(3)(4));
