const exec = (fn, n1, n2) => fn(n1, n2);

const somarNoTerminal = (a, b) => console.log(a + b);
const subtrairNoTerminal = (a, b) => console.log(a - b);
const subtrair = (a, b) => a - b;

exec(somarNoTerminal, 56, 38);
exec(subtrairNoTerminal, 182, 27);

const r = exec(subtrair, 50, 25);
console.log(r);

setInterval(() => console.log('Exec...'), 1000);
