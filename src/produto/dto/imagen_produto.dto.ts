/* eslint-disable prettier/prettier */
import { IsString } from "class-validator";

export class ImagemProdutoDTO {
    @IsString()
    url: string;

    @IsString()
    descricao: string;
}
