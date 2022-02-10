import {versao, DAO} from './mydecorator'
import max from './decoratos/max.decorator'
import logTime from './decoratos/LogTime.decorator'

let teste = "asd"

@versao("2.0")
@DAO
class Pessoa{
    public Version!: string;
    public Conexao!: any;

    @max(10)
    public Nome! : string; 

    show(){
        return this.Version
    }

    @logTime(teste)
    async InserirPessoa(){
        await new Promise((res) => {
            setTimeout(() => {
                res(true);
            }, 4000);
        })

        this.Conexao.IniciarTransacao();
    }
}


@versao("1.0")
class Carro{
    public Version!: string;

    show(){
        return this.Version
    }
}

const pessoa = new Pessoa();
const carro = new Carro();

console.log(pessoa.show());
console.log(pessoa.InserirPessoa());
console.log(carro.show());

try{
    pessoa.Nome = "Wesdras"
    console.log('Setou Wesdras')
    pessoa.Nome = "Nome Grande 123456"
    console.log('Setou Nome Grande')
}
catch(ex)
{
    console.log(`Deu um erro${ex}`)
}








































// function Tabuada(multiplicador: number){
//     return function (valorMultiplicado: number){
//         return multiplicador * valorMultiplicado;
//     }
// }

// const Tabuada2 = Tabuada(2);
// const Tabuada10 = Tabuada(10);

// for(let i:number = 1; i<=10;i++){
//     console.log(`2 X ${i} = ${Tabuada2(i)}`);
// }


// console.log(Tabuada(2)(2))