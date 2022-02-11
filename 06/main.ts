class Endereco{
    public rua: string = "";
}


class Pessoa{
    public readonly nome: string
    public readonly sobrenome: string
    private readonly emails:string[]

    public readonly Endereco: Readonly<Endereco> = new Endereco();


    constructor(nome: string, sobrenome: string, emails: string[], endereco: Endereco ){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.emails = emails;
        this.Endereco = endereco;
    }

    addEmail(email: string) : void{
        //log("USUARIO X ADICIONOU EMAIL")
        this.emails.push(email);
    }

    get Emails() : string[]{
        return [...this.emails]
    }
    
    get NomeCompleto() : string{
        return `${this.nome} ${this.sobrenome}`;
    }
}

const endereco = new Endereco();
endereco.rua = "Nova RUA"

const  wesdras = new Pessoa("Wesdras", "Alves", ["wesdras@wesdras.com.br","wesdras@wesdras.net"],endereco );

const Dados : Readonly<string> = "";


// const marcos = new Pessoa("Marcos", "Lopes");

const cast = Pessoa;

let novaPessoa : Pessoa = Object.setPrototypeOf({ nome: "Wesdras", sobrenome: 'Alves 222', teste: 'TESTE'} , Pessoa.prototype);


// novaPessoa.sobrenome = "Alves 2"
console.log(Object.keys(Pessoa))
console.log(Object.keys(novaPessoa))

 console.log(novaPessoa.NomeCompleto)


// enum PlanosAmil{
//     P32,
//     P52
// }

// const planoAmil32 = new Plano(PlanosAmil.P32)

// planoAmil32.codiplano = PlanosAmil.P52
