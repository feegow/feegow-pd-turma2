class Pessoa{
    #nome = "";
    idade = 0;

    constructor(Nome){
        this.#nome = Nome;
    }

    consultarDados(){
        return [1,2,3,4]
    }

    retornaNome(){
        return this.#nome;
    }
}

module.exports = Pessoa;