/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body } from "@nestjs/common";
import { ProdutoRepository } from "./produto.repository";

@Controller("/produtos")
export class ProdutoController {

    constructor(private produtoRepository: ProdutoRepository) { }

    @Get()
    async getProdutos() {
        return this.produtoRepository.getProdutos();
    }

    @Post()
    async criaProduto(@Body() dtoCreateProduto) {
        this.criaProduto(dtoCreateProduto);
        return dtoCreateProduto;
    }
}