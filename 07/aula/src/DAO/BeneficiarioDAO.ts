import BeneficiarioDTO from "../DTO/BeneficiarioDTO";
import DataBase from "./DataBase";

export default class BeneficiarioDAO extends DataBase{
    consultarBeneficiario(cpf: string){
        const sql = `selec .... ${cpf}`;
        return this.consultarDados(sql);
    }

    criar(beneficiario:  BeneficiarioDTO){
        const benModelo = new BeneficiarioDTO();
        this.gravar(benModelo, beneficiario)
    }
}

