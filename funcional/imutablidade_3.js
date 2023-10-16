const pessoa = {
	nome: 'Maria',
	altura: 1.76,
	cidade: 'São Paulo',
	end: {
		rua: 'feliz',
	},
};

// Atribuição por referencia
// const novaPessoa = pessoa;

// passagem por referencia
function alterarPessoa(pessoa) {
	const novaPessoa = { ...pessoa };
	novaPessoa.nome = 'João';
	novaPessoa.cidade = 'Fortaleza';
	novaPessoa.end.rua = 'ABC'; // Esse altera nos dois obj. end é uma referencia, utiliza mesmo espaco memoria
	return novaPessoa;
}

console.log(alterarPessoa(pessoa));

console.log(pessoa);

let a = 3;
let b = a; // atribuicao por valor (cópia)

a++;
b--;

console.log({ a, b });
