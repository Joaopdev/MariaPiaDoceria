import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Adress {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cep: string;

    @Column()
    logradouro: string;

    @Column()
    complemento: string;

    @Column()
    numero: string;

    @Column()
    bairro: string;

    @Column()
    estado: string;
}