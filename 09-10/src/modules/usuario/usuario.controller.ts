import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Usuario } from 'src/entities/usuario.entity';
import { UsuarioDTO } from './dtos/usuario.dto';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  async create(@Body() createUserData: UsuarioDTO) {
    const usuario: Usuario = createUserData as Usuario;

    return await this.usuarioService.create(usuario);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuarioService.getById(+id);
  }

}
