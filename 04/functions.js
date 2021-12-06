(() => {
    const valor =1;
    console.log('aaaaaaa')
})();

function Soma(valor1 = 0, valor2 = 0){
    return valor1 + valor2;
}
console.log(Soma(1));


class ErrorNegocio extends Error{

}

class ErrorDados extends Error{
    constructor(message, query){
        super(message)

        this.query = query;
    }
}

class ErrorValidacao extends Error{

}


try{

     throw new ErrorDados("Erro no processamento", "Select * from table")

    //throw new ErrorValidacao("CPF invalido")

}catch(ex)
{
    if(ex instanceof ErrorValidacao)
    {
        console.log(`Ocorreu um erro na validação ${ex.message}`)
    }
    else if(ex instanceof ErrorDados){
        console.log(`Envia email para o DBA ${ex.message} do SQL ${ex.query}`)
    }

    
}

