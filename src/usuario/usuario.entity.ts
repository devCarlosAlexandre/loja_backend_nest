/* eslint-disable prettier/prettier */
import { CriaUsuarioDTO } from './dto/CriarUsuario.dto';

export class UsuarioEntity {
    id: string;
    nome: string;
    email: string;
    senha: string;

    constructor(usuario: CriaUsuarioDTO, id: string) {
        this.id = id;
        this.nome = usuario.nome;
        this.email = usuario.email;
        this.senha = usuario.senha;
    }
}