const primeiroEelemento = arrayOuString => arrayOuString[0];
const letraMinuscula = letra => letra.toLowerCase();

new Promise(function (resolve) {
	resolve(['Ana', 'Bia', 'Carlos', 'Daniel']);
})
	.then(primeiroEelemento)
	.then(primeiroEelemento)
	.then(letraMinuscula)
	// .then(v => console.log(v))
	.then(console.log);
