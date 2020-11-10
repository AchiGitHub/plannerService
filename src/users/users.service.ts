import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';


@Injectable()
export class UsersService {
    private readonly users: User[];

    constructor() {
        this.users = [
            {
                id: 1,
                registrationDate: "",
                location: "kandy",
                username: "Tom",
                password: "pwd",
                email: "asdas",
                first_name: "Tom",
                last_name: "Innit",
                age: 23
            },
            {
                id: 2,
                registrationDate: "",
                location: "Col",
                username: "Tob",
                password: "pwd",
                email: "asdas",
                first_name: "Tob",
                last_name: "NCS",
                age: 22
            },
            {
                id: 3,
                registrationDate: "",
                location: "Anu",
                username: "Poki",
                password: "pwd",
                email: "asdas",
                first_name: "Maine",
                last_name: "Smith",
                age: 12
            },
        ];
    }

    createUser(user: User) {
        this.users.push(user)
    }

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username)
    }

}
