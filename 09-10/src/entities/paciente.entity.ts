import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { Usuario } from "./usuario.entity";

@Entity("pacientes")
export class Paciente{

    @Column({name: 'id', type: 'integer', primary: true})
    id: number;

    @OneToOne(() => Usuario, usuario => usuario.paciente )
    @JoinColumn([{name: 'id', referencedColumnName: 'id'}])
    usuario: Usuario;
}
