interface IVeiculo{
    cor?: string;
    mover() : void;
}

class Veiculo{
    protected cor= null;
    protected motor = null;
}

class Carro 
    extends Veiculo 
    implements IVeiculo
    {
        cor : string;
    mover():void{
        console.log("Mova-se com 4 rodas")
    }
}

class Onibus implements IVeiculo{
    mover():void{
    
    }
}


class Moto 
    extends Veiculo 
    implements IVeiculo{
        cor : string;

    mover():void{
        console.log("Mova-se com 2 rodas")
    }
}


function MoverVeiculo(veiculo: IVeiculo){
    veiculo.mover();
    veiculo.cor;
}


MoverVeiculo(new Carro());
MoverVeiculo(new Moto());