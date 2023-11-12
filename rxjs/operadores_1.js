// os dois tipos
// 1. operadored de criação
const { of } = require('rxjs');
// 2. operadores encadeáveis (pipeable op.)
const { last, map } = require('rxjs/operators');

of(1, 2, 'ana', false, 'fim')
	.pipe(
		last(),
		map(v => v[0])
	)
	.subscribe(valor => {
		console.log(`o valor gerado foi: ${valor}`);
	});
