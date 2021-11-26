class Pessoa{

    #enderecos = [];
    #nome;

    constructor(nome){
        this.#nome = nome;
        // Object.assign(this, {nome})
    }

    addEndereco(endereco){
        this.#enderecos.push(endereco)
    }    

    MostraNome(){
        return this.#nome;
    }

    get enderecos(){
        return this.#enderecos
    }
}

class PF extends Pessoa{
    constructor(nome){
        super(nome)
    }
}

const pessoaFisica = new PF("Wesdras")
pessoaFisica.addEndereco({rua: "XYZ", numero: 20})

console.log (pessoaFisica.enderecos)

const novaPessoa = {...pessoaFisica}

console.log(novaPessoa.enderecos)
console.log(pessoaFisica.enderecos)


