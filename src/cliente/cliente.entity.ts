import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Cliente {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    nome: string;

    @Column()
    telefone: string;

    @Column()
    email: string;
}