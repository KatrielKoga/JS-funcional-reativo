// somar(3)(4)(5)

const somar = num => {
	return function (num2) {
		return function (num3) {
			return num + num2 + num3;
		};
	};
};

const resultSomar = somar(3)(4)(5);
console.log(resultSomar);

// calcular(3)(7)(fn)

const calcular = num => {
	return num2 => {
		return fn => {
			return fn(num, num2);
		};
	};
};

const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => a / b;

console.log(
	calcular(3)(7)(sum),
	calcular(3)(7)(sub),
	calcular(3)(7)(mult),
	calcular(3)(7)(div)
);
