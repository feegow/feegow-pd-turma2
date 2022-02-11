import { Paciente } from './paciente.entity';
import {Column, Entity, OneToOne, PrimaryGeneratedColumn} from 'typeorm';

@Entity('usuarios')
export class Usuario{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: "nome", type: 'varchar', length: 255})
    nome: string;

    @Column({name: 'cpf', type: 'varchar', length: 11})
    cpf: string;

    @Column({name: 'email', type: 'varchar', length: 255, nullable: true})
    email?: string;

    @OneToOne(()=> Paciente, paciente => paciente.usuario)
    paciente: Paciente;
}