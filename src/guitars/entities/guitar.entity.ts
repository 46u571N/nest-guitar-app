import { Brand } from "src/brands/entities/brand.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Guitar {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @Column()
    idmarca: number;

    @ManyToOne(() => Brand, brand => brand.guitars)
    brand: Brand[];

}

