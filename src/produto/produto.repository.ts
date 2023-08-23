/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";

@Injectable()
export class ProdutoRepository {
    private produtos = [];

    async getProdutos() {
        return this.produtos;
    }

    async saveProduto(produto) {
        this.produtos.push(produto);
    }
}