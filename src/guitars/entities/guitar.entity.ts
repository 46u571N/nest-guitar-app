import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Guitar {
    @PrimaryGeneratedColumn()
    private id: number;

    @Column()
    private name: string;

    @Column()
    private desciption: string;

    @Column()
    private price: number;

    @Column()
    private idmarca: number;
}

