/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsDecimal, Min, ValidateNested, IsArray, IsString, IsUUID } from 'class-validator';
import { CaracteristicasProdutoDTO } from './caracteristicas_produto.dto';
import { ImagemProdutoDTO } from './imagen_produto.dto';
import { Type } from 'class-transformer';

export class CriaProdutoDTO {
    @IsString()
    @IsNotEmpty({ message: "Nome não deve ser vázio" })
    nome: string;

    @IsDecimal({ decimal_digits: '2', locale: 'pt-BR' })
    @Min(0.1)
    valor: number;

    @Min(0)
    quantidade: number;

    @ValidateNested()
    @IsArray()
    @Type(() => CaracteristicasProdutoDTO)
    caracteristicas: CaracteristicasProdutoDTO[];

    @IsUUID(undefined, { message: "ID de usuário inválido" })
    usuarioId: string

    @ValidateNested()
    @IsArray()
    @Type(() => ImagemProdutoDTO)
    imagens: ImagemProdutoDTO[];

    @IsString()
    @IsNotEmpty({ message: 'Categoria do produto não pode ser vazia' })
    categoria: string;
}