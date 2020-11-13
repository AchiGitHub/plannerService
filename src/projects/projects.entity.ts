import { Planner } from "src/planner/planner.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Projects extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    location: string;

    @Column()
    zip_code: string;

    @Column()
    description: string;

    @Column()
    project_year: number;

    @ManyToOne(type => Planner, planner => planner.projects, { eager: false })
    planner: Planner;
}