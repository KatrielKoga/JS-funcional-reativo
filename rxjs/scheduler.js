const { from, asyncScheduler } = require('rxjs');
const { observeOn } = require('rxjs/operators');

console.log('antes...');

// por padrão é sincrono
from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
	.pipe(observeOn(asyncScheduler)) // essa linha torna a execução asyncrona
	.subscribe(console.log);

console.log('depois...');
