
export default abstract class DataBase {
    private static conexao: any = null;

    private static conectar(){
        if(DataBase.conexao == null){
            DataBase.conexao = {};
        }

        return DataBase.conexao;
    }

    protected consultarDados(sql: string) : []{
        DataBase.conectar();

        return [];
    }

    protected gravar(objetoModelo: any, objeto: any ) : boolean{
        DataBase.conectar();

        console.log(
            Object.keys(objetoModelo).map((key) => {
                return `CAMPO ${key} VALOR ${Reflect.get(objeto,key)}`;
            })
        );

        return true;
    }

}