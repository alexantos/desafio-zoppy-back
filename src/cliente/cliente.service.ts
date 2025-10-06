import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './cliente.entity';


@Injectable()
export class ClienteService {
    constructor(
        @InjectRepository(Cliente)
        private clienteRepository: Repository<Cliente>,
    ) { }

    async criar(cliente: Partial<Cliente>): Promise<Cliente> {
        return this.clienteRepository.save(cliente);
    }

    async listar(nome: string = ''): Promise<Cliente[]> {
        const queryBuilder = this.clienteRepository.createQueryBuilder('cliente');
        if (nome) {
            queryBuilder.andWhere('cliente.nome LIKE :nome', { nome: `%${nome}%` });
        }
        return queryBuilder.getMany();
    }

    async recuperar(id: string): Promise<Cliente> {
        return this.clienteRepository.findOneBy({ id: id as any });
    }

    async atualizar(id: string, cliente: Partial<Cliente>): Promise<Cliente> {
        await this.clienteRepository.update(id, cliente);
        return this.clienteRepository.findOne({ where: { id: id as any } });
    }

    async remover(id: string): Promise<void> {
        await this.clienteRepository.delete(id);
    }

}
