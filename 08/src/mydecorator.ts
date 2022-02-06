export function versao(versao: string){
    return function (target: any){
        target.prototype.Version = versao
    }
}


export function DAO(target: any){
    target.prototype.Conexao = { NomeBanco: 'teste', 
                                IniciarTransacao : () => {
                                    console.log("Iniciando Transacao")
                                }};
}


