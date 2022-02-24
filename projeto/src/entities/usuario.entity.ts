import {Column, Entity, OneToOne, PrimaryGeneratedColumn} from 'typeorm';
import { Paciente } from './paciente.entity';
import { Profissional } from './profissional.entity';

@Entity('usuarios')
export class Usuario{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: "nome", type: 'varchar', length: 255})
    nome: string;

    @Column({ name: "sobreNome", type: 'varchar', length: 255})
    sobreNome: string;

    @Column({name: 'cpf', type: 'varchar', length: 11})
    cpf: string;

    @Column({name: 'email', type: 'varchar', length: 255})
    email: string;

    @Column({name: 'senha', type: 'varchar', length: 100})
    senha: string;

    @Column({name: 'endereco', type: 'varchar', length: 255, nullable: true})
    endereco?: string;

    @Column({name: 'cep', type: 'varchar', length: 8, nullable: true})
    cep?: string;

    @Column({name: 'cidade', type: 'varchar', length: 255, nullable: true})
    cidade?: string;

    @Column({name: 'uf', type: 'varchar', length: 2, nullable: true})
    uf?: string;
    
    @Column({ name: "dataNascimento", type:  "date", nullable: true })
    dataNascimento?: string;

    @OneToOne(()=> Paciente, paciente => paciente.usuario)
    paciente: Paciente;

    @OneToOne(()=> Profissional, profissional => profissional.usuario)
    profissional: Profissional;
}