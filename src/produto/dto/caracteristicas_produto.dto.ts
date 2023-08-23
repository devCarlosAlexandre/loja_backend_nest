/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from 'class-validator';
export class CaracteristicasProdutoDTO {
    @IsNotEmpty()
    nome: string;
    @IsString()
    descricao: string;
}