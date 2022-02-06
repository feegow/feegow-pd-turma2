import  PlanoDTO from "../DTO/PlanoDTO";
import DataBase from "./DataBase";

export default class PlanoDAO extends DataBase {
    consultarPlano(numeroPlano: string){
        const sql = `select * from plano where numero = ${numeroPlano}`;
    }

    criar(plano: PlanoDTO){
        this.gravar(new PlanoDTO(), plano);
    }
}