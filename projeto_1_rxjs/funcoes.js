const fs = require('fs');
const path = require('path');
const { Observable } = require('rxjs');

function createPipeableOperator(operatorFn) {
	return function (source) {
		return new Observable(subscriber => {
			const sub = operatorFn(subscriber);
			source.subscribe({
				next: sub.next,
				error: sub.error || (e => subscriber.error(e)),
				complete: sub.complete || (() => subscriber.error()),
			});
		});
	};
}

function lerDiretorio(caminho) {
	return new Observable(subscriber => {
		try {
			fs.readdirSync(caminho).forEach(arquivo =>
				subscriber.next(path.join(caminho, arquivo))
			);
		} catch (error) {
			subscriber.error(error);
		}
	});
}

function elementosTerminadosCom(padrao) {
	return createPipeableOperator(subscriber => ({
		next(texto) {
			if (texto.endsWith(padrao)) {
				subscriber.next(texto);
			}
		},
	}));
}

function lerArquivo(caminho) {
	return createPipeableOperator(subscriber => ({
		next(caminho) {
			try {
				const conteudo = fs.readFileSync(caminho, { encoding: 'utf-8' });
				subscriber.next(conteudo);
			} catch (error) {
				subscriber.error();
			}
		},
	}));
}

function removerSeVazio() {
	return createPipeableOperator(subscriber => ({
		next(texto) {
			if (texto.trim()) {
				subscriber.next(texto);
			}
		},
	}));
}

function removerSeIncluir(padrao) {
	return function (array) {
		return array.filter(el => !el.includes(padrao));
	};
}

function removerSePrimerioElementoNumero() {
	return createPipeableOperator(subscriber => ({
		next(texto) {
			const num = parseInt(texto.trim());
			if (num !== num) {
				subscriber.next(texto);
			}
		},
	}));
}

function removerSimbolos(simbolos) {
	return createPipeableOperator(subscriber => ({
		next(texto) {
			const textoSemSimbolos = simbolos.reduce((acc, simbolo) => {
				return acc.split(simbolo).join('');
			}, texto);
			subscriber.next(textoSemSimbolos);
		},
	}));
}

function separarTextoPor(simbolo) {
	return createPipeableOperator(subscriber => ({
		next(texto) {
			texto.split(simbolo).forEach(parte => {
				subscriber.next(parte);
			});
		},
	}));
}

function agruparPalavras() {
	return createPipeableOperator(subscriber => ({
		next(palavras) {
			console.log(palavras);
			const agrupado = Object.values(
				palavras.reduce((acc, palavra) => {
					const p = palavra.toLowerCase();
					const qtde = acc[p] ? acc[p].qtde + 1 : 1;
					acc[p] = { elemento: p, qtde };
					return acc;
				}, {})
			);
			subscriber.next(agrupado);
		},
	}));
}

module.exports = {
	lerDiretorio,
	elementosTerminadosCom,
	lerArquivo,
	removerSeVazio,
	removerSeIncluir,
	removerSePrimerioElementoNumero,
	removerSimbolos,
	separarTextoPor,
	agruparPalavras,
};
