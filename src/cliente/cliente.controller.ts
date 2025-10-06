import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { Cliente } from './cliente.entity';
import { ClienteService } from './cliente.service';

@Controller('cliente')
export class ClienteController {

    constructor(private readonly clienteService: ClienteService) { }

    @Post()
    criar(@Body() cliente: Partial<Cliente>): Promise<Cliente> {
        return this.clienteService.criar(cliente)
    }

    @Get()
    listar(@Query('nome') nome: string): Promise<Cliente[]> {
        return this.clienteService.listar(nome);
    }

    @Get(':id')
    recuperar(@Param('id') id: string): Promise<Cliente> {
        return this.clienteService.recuperar(id);
    }

    @Patch(':id')
    atualizar(@Param('id') id: string, @Body() cliente: Partial<Cliente>): Promise<Cliente> {
        return this.clienteService.atualizar(id, cliente);
    }

    @Delete(':id')
    remover(@Param('id') id: string): Promise<void> {
        return this.clienteService.remover(id);
    }
}