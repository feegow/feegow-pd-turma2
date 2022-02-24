import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { Usuario } from "./usuario.entity";

@Entity("profissionais")
export class Profissional{

    @Column({name: 'id', type: 'integer', primary: true})
    id: number;

    @Column({name: 'numeroConselho', type: 'varchar', length: 255})
    numeroConselho: string;

    @Column({name: 'conselho', type: 'varchar', length: 8})
    conselho: string;

    @OneToOne(() => Usuario, usuario => usuario.profissional )
    @JoinColumn([{name: 'id', referencedColumnName: 'id'}])
    usuario: Usuario;
}
