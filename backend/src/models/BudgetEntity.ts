import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()

export class Budget {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: Date;

    @Column()
    idClient: number;
    
    @Column()
    idUsuario: number;

    @Column()
    doces: string;

    @Column()
    valor: string;
}