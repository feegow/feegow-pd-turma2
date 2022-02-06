const Pessoa = require('./Pessoa')

const pessoa = new Pessoa("Wesdras");

console.log(pessoa.nome)
console.log(pessoa.consultarDados())
console.log(pessoa.retornaNome())
