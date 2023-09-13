// arrow function
const felizNatal = () => console.log('Feliz natal.');
felizNatal();

const sudacao = nome => `Fala ${nome}!!`;

console.log(sudacao('Maria'));

const somar = (...numeros) => {
	let total = 0;
	for (let n of numeros) {
		total += n;
	}
	return total;
};

console.log(somar(1, 2, 3, 4, 5));

const potencia = base => exp => Math.pow(base, exp);

console.log(potencia(2)(3));
