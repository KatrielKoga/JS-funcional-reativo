// Closure é quando uma funcao "lembra"
// seu escopo lexico, mesmo quando a funcao
// é executada fora desse escopo lexico

const somarXMais3 = require('./closure_escopo');

const x = 1000;
console.log(somarXMais3());
