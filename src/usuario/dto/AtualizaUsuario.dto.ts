/* eslint-disable prettier/prettier */
import { IsString, IsEmail, MinLength, IsNotEmpty, IsOptional } from 'class-validator';
import { EmailEUnico } from '../validator/email_unico.validator';

export class AtualizaUsuarioDTO {
    @IsString()
    @IsNotEmpty({ message: "nome não pode ser vázio" })
    @IsOptional()
    nome: string;

    @IsEmail(undefined, { message: "formato de email inválido" })
    @EmailEUnico({ message: "Já existe um usuário com este e- mail" })
    @IsOptional()
    email: string;

    @MinLength(6, { message: "senha precisa ter pelo menos 6 caracteress" })
    @IsOptional()
    senha: string;
}
