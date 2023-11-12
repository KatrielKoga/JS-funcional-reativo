const { of, Observable } = require('rxjs');

function terminadoCom(parteFinal) {
	return function (source) {
		return new Observable(subscriber => {
			source.subscribe({
				next(v) {
					if (Array.isArray(v)) {
						subscriber.next(
							v.filter(e => e.toUpperCase().endsWith(parteFinal.toUpperCase()))
						);
					} else if (v.toUpperCase().endsWith(parteFinal.toUpperCase()))
						subscriber.next(v);
				},
				error(e) {
					subscriber.error(e);
				},
				complete() {
					subscriber.complete();
				},
			});
		});
	};
}

of(['Ana Silva', 'Maria silva', 'Pedro Rocha'])
	.pipe(terminadoCom('Silva'))
	.subscribe(console.log);
