import { Guitar } from "src/guitars/entities/guitar.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Brand {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    marca: string;

    @OneToMany(() => Guitar, guitar => guitar.brand)
    guitars: Guitar[];
}

