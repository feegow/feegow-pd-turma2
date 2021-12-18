class Pessoa{
    protected nome : string = "";
    protected sobrenome : string = "";
    public cpf : string = "";

    constructor(nome: string, sobrenome: string){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get NomeCompleto() : string{
        return `${this.nome} ${this.sobrenome}`;
    }

    get Nome() : string{
        return this.nome
    }

    set Nome(value: string){
        if(value.length >3){
            throw new Error("Tamanho invalido")
        }
        this.nome = this.CaixaAlta(value);
    }

    private CaixaAlta(value: string) :string{
        return value.toUpperCase();
    }

    public NomeCaixaAlta() : string{
        return this.CaixaAlta(this.nome);
    }
}

class PessoaFisica extends Pessoa{

    public NomePF(): string{
        return this.nome;
    }
}



const wesdras = new Pessoa("Wesdras", "Alves");
// wesdras.Nome = "T";
// console.log(wesdras.Nome);
// wesdras.Nome = "Teste";

//wesdras.NomeCompleto = "Alves Wesdras "; //READONLY

console.log(wesdras.NomeCompleto);
console.log(wesdras.cpf);