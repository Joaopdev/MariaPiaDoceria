import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "../@types/enums/CategoryCandy";

@Entity()

export class Candy {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: string;

    @Column()
    category: Category;

    @Column()
    nome: string;

    @Column()
    price: string;
}