abstract class List<T>{
    protected itens : Array<T> = [];
    
    public Add(item : T){
        this.itens.push(item)
    }

    Remove() : T {
        return;
    }

    BuscarPorIndex(){

    }
}

export class ListNumerica extends List<number>{

    SomarItens() : number{
        return this.itens.reduce((a,b) => a + b,0)
    }
}