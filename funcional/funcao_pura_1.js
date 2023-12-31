// Uma função pura é uma função em que o valor de retorno
// é determinado APENAS por seus valores de entrada, sem efeitos
// colaterais observáveis

const PI = 3.14;

//  impura - pq PI é um valor externo!
function areaCirc(raio) {
	// mesmo usando Math.PI é impura pq depende do valor externo de pi
	// return raio * raio * Math.PI;
	return raio * raio * PI;
}

console.log(areaCirc(10));

//  pura
function areaCircPura(raio, pi) {
	return raio * raio * pi;
}

console.log(areaCircPura(10, 3.14));
console.log(areaCircPura(10, 3.14592));
console.log(areaCircPura(10, Math.PI));
