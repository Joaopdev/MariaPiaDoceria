import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()

export class Client {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    telephone: string;

    @Column( {unique: true, nullable: false})
    email: string;

    @Column()
    dateOfInclusion: Date;
}