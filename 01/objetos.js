class Pessoa{
    Andar(){
        console.log("Anda")
    }
}

Pessoa.prototype.Correr = () => console.log("Correr")

const pessoa = new Pessoa();
pessoa.Andar()
pessoa.Correr()