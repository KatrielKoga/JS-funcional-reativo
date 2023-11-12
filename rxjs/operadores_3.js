const { Observable } = require('rxjs');

function ofWithDelay(tempo, ...elementos) {
	return new Observable(subscriber => {
		(elementos || []).forEach((el, i) => {
			setTimeout(() => {
				subscriber.next(el);
				if (elementos.length === i + 1) {
					subscriber.complete();
				}
			}, tempo * (i + 1));
		});
	});
}

ofWithDelay(1000, 1, 2, 3, 4, 5, 6).subscribe(console.log);
