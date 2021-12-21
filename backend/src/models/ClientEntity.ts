import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()

export class Client {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    telephone: string;

    @Column( {nullable: false} )
    email: string;

    @Column()
    dateOfInclusion: Date;
}