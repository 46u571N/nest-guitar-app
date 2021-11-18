import { Brand } from "src/brands/entities/brand.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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
    image: string;

    @Column()
    clearance: boolean;

    @ManyToOne(() => Brand, brand => brand.guitars)
    @JoinColumn({ name: 'brandId' })
    brand: Brand;


}

