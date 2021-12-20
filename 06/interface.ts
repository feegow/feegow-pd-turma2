interface Carro {
    marca: string ;
    modelo?: string;
}


const ford = {} as Carro;


class LavaJato{
    Lavar(carro : Carro){
        console.log(`Lavando o carro ${carro.marca}`)
    }

    TrocarMarca(carro: Carro){
        carro.marca = ""
    }

}

const lavaJato = new LavaJato();

lavaJato.Lavar({ marca: 'ford'})
lavaJato.Lavar(ford)