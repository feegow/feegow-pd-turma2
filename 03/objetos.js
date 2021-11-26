class Pessoa{
    #nome;
    #maiorIdade;
    idade;

    constructor({nome}){
        this.#nome = nome;
    }

    set idade(value){
        this.#maiorIdade = value >=18;
        this.idade = value
    }

    get MaiorIdade(){
        return this.#maiorIdade;
    }

    NomeIdade(){
        return `O nome é ${this.#nome} e a idade é ${this.idade}`
    }    
}

Pessoa.prototype.SomaIdade = function(valor){
    return this.idade + valor
}

const json = { nome: 'Wesdras API', idade: 33}

let wesdras = new Pessoa(json)
let marcus = new Pessoa({nome : 'Marcus'})


wesdras.SubtrairIdade = function(valor){
    return this.idade -valor;
}

wesdras.idade = 33
marcus.idade = 22

console.log(wesdras.MaiorIdade)
console.log(wesdras.NomeIdade())
console.log(wesdras.SomaIdade(5))
console.log(wesdras.SubtrairIdade(5))
// console.log(marcus.SubtrairIdade(5))