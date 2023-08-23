/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { UsuarioEntity } from "./usuario.entity";

@Injectable()
export class UsuarioRepository {


    private usuarios: UsuarioEntity[] = [];

    listaUsuarios() {
        return this.usuarios;
    }

    async salvar(usuario: UsuarioEntity) {
        this.usuarios.push(usuario);
    }

    async existeComEmail(email: string) {
        const possivelUsuario = this.usuarios.find(
            usuario => usuario.email === email
        );
        return possivelUsuario !== undefined;
    }

    async userIdExists(id: string) {
        const userExists = await this.usuarios.find(user => user.id === id);
        return userExists !== undefined;
    }

    atualizar(id: string, dadosParaAtualizar: Partial<UsuarioEntity>) {
        const usuario = this.buscaUserId(id);

        Object.entries(dadosParaAtualizar).forEach(([chave, valor]) => {
            if (chave === 'id') {
                return
            }

            usuario[chave] = valor;
        });

        return usuario;
    }

    async remove(id: string) {
        const usuario = this.buscaUserId(id)
        this.usuarios = this.usuarios.filter(
            usuarioSalvo => usuarioSalvo.id !== usuario.id
        );
    }

    private buscaUserId(id: string) {
        const possivelUsuario = this.usuarios.find(usuario => usuario.id === id);
        if (!possivelUsuario) {
            throw new Error('usuário não existe');
        };
        return possivelUsuario;
    }

}