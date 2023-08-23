/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';
import { CriaUsuarioDTO } from './dto/CriarUsuario.dto';
import { UsuarioEntity } from './usuario.entity';
import { v4 as uuid } from 'uuid'
import { ListaUsuarioDTO } from './dto/ListaUsuario.dto';
import { AtualizaUsuarioDTO } from './dto/AtualizaUsuario.DTO';

@Controller('/usuarios')
export class UsuarioController {

  constructor(private usuarioRepository: UsuarioRepository) { }

  @Post()
  async criaUsuario(@Body() dadosDoUsuario: CriaUsuarioDTO) {
    const id = uuid();

    const usuarioEntity = new UsuarioEntity(dadosDoUsuario, id);
    this.usuarioRepository.salvar(usuarioEntity);

    return { id: usuarioEntity.id, nome: usuarioEntity.nome };
  }

  @Get()
  async listaUsuarios() {
    const usuariosSalvos = await this.usuarioRepository.listaUsuarios();

    const usuariosLista = usuariosSalvos.map(
      usuario => new ListaUsuarioDTO(
        usuario.id,
        usuario.nome
      ));

    return usuariosLista;
  }

  @Patch("/:id")
  async atualizaUsuario(@Param('id') id: string, @Body() dadosParaAtualizar: AtualizaUsuarioDTO) {
    const usuarioAtualizado = await this.usuarioRepository.atualizar(id, dadosParaAtualizar);

    return {
      usuario: usuarioAtualizado,
      mensagem: "usuario atualizado com sucesso",
    }

  }

  @Delete('/:id')
  async removeUsuario(@Param('id') id: string) {
    await this.usuarioRepository.remove(id);
    return {
      mensagem: "usuario removido com sucesso"
    }
  }

}
