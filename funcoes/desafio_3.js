const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname, 'dados.txt');

function dadosDe(path) {
	return new Promise(resolve => {
		// resolve(fs.readFileSync(path));
		fs.readFile(path, (_, conteudo) => {
			resolve(conteudo.toString());
		});
	});
}

dadosDe(caminho)
	.then(data => data.split('\n'))
	.then(linhas => linhas.join(','))
	.then(conteudo => `O valor final é: ${conteudo}`)
	.then(console.log);
