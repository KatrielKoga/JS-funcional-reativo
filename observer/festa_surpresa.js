const readline = require('readline');

function obterResposta(pergunta) {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	return new Promise(resolve => {
		rl.question(pergunta, resp => {
			resolve(resp);
			rl.close();
		});
	});
}

// observer
function namorada() {
	console.log('N: Apagar as luzes');
	console.log('N: pedir silencio');
	console.log('N: surpresa!');
}

// observer
function sindico() {
	console.log('S: Monitorando o barulho');
}

// subject
async function porteiro(interessados) {
	while (true) {
		const resp = await obterResposta('O namorado chegou? (s/N/q) ');
		if (resp.toLowerCase() === 's') {
			// observadores sao notificados
			(interessados || []).forEach(obs => obs());
		} else if (resp.toLowerCase() === 'q') {
			break;
		}
	}
}

/**
 * chamada da função -> registra os dois observadores
 * os observadores sao: namorada e sindico
 * o subject é o porteiro
 */

porteiro([namorada, sindico]);
