import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";
import * as bcrypt from 'bcrypt';

@Entity()
@Unique(['username'])
export class Clients extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    register_date: string;

    @Column()
    location: string;

    @Column()
    password: string;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    zip_code: string;

    @Column()
    age: number;

    @Column()
    gender: string;

    @Column()
    salt: string;

    async validatePassword(password: string): Promise<boolean> {
        const hash = await bcrypt.hash(password, this.salt);

        return hash === this.password;
    }
}