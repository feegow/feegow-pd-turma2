let numero : number= 10;
let nome : string = "Wesdras";
let eProgramador : boolean = true;

console.log(numero)


let qualquercoisa: any;

qualquercoisa = 2;
qualquercoisa = "asdasds"

enum TPessoa{
    PessoaFisica = 1,
    PessoaJuridica = 2
}

let tipoPessoa : TPessoa;

tipoPessoa = (() => 1)();

const wesdras = { tipoPessoa: 2}

if(tipoPessoa == TPessoa.PessoaJuridica){
    console.log('É pessoa juridica')
}else{
    console.log('É pessoa fisica')
}

if(wesdras.tipoPessoa == TPessoa.PessoaFisica)
{

}

class Pessoa{

}

let listaPessoas : Array<Pessoa> = [];
listaPessoas.push(new Pessoa())

let listaPessoas2 : number[] = [];

let listaPessoas3 : Pessoa[] = [];
