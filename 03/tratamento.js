class Exception {
    constructor(mensagem, tipo){
        Object.assign(this,{mensagem, tipo})
    }   
}

class ValidationException extends Exception{

    constructor(mensagem){
        super(mensagem, 'validation');
    }
}

class DataException extends Exception{

    constructor(mensagem){
        super(mensagem, 'data');
    }
}

function GetDados(){
    try{
        throw "";
    }
    catch(ex){
        console.log(ex);
        throw new DataException('Tabela inválida')
    }
    finally{
        //Sempre executado após escopo
    }
}

try{
    let idade = 10;

    GetDados();

    if(idade < 18){
        throw new ValidationException("Usuario não tem acesso por idade")
    }

}catch(ex){
    console.log(ex)
}