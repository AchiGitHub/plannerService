import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import * as bcrypt from 'bcrypt';
import { Projects } from "src/projects/projects.entity";

@Entity()
@Unique(['username'])
export class Planner extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    password: string;

    @Column()
    gender: string;

    @Column()
    location: string;

    @Column()
    zip_code: string;

    @Column()
    about: string;

    @Column()
    website: string;

    @Column()
    register_date: string;

    @Column()
    age: number

    @Column()
    telephone_number: string;

    @Column()
    salt: string;

    @OneToMany(type => Projects, project => project.planner, { eager: true })
    projects: Projects[];

    async validatePassword(password: string): Promise<boolean> {
        const hash = await bcrypt.hash(password, this.salt);

        return hash === this.password;
    }

}