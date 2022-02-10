//Beneficiario
//Plano
import BeneficiarioDAO from './DAO/BeneficiarioDAO'
import BeneficiarioDTO from './DTO/BeneficiarioDTO'
import PlanoDAO from './DAO/PlanoDAO'
import PlanoDTO from './DTO/PlanoDTO'


const beneficiarioDAO = new BeneficiarioDAO();
const planoDAO = new PlanoDAO();
const beneficiario = new BeneficiarioDTO();

beneficiario.nome = "Wesdras";
beneficiario.endereco = "Rua Teste"
beneficiario.estado = "Est"
beneficiario.cidade = "Cid"

const jsonData : any = {nome: "Wesdras", endereco: "teste", matricula: ""} ;
const jsonData2: any = {NumeroPlano: "123456", Dados:"123"}

const newBen = jsonData as BeneficiarioDTO;

beneficiarioDAO.criar(newBen)
planoDAO.criar(jsonData2 as PlanoDTO);




