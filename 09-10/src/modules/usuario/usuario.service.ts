import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from 'src/entities/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {

    constructor(
        @InjectRepository(Usuario)
        private usuarioRepository: Repository<Usuario>
    ){

    }

  async create(usuario: Usuario) : Promise<Usuario> {
    return this.usuarioRepository.save(usuario);
  }


  async getById(id : number){
      return this.usuarioRepository.findOne(id);
  }
  
}
