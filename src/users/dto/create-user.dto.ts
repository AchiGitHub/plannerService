export class CreateUserDto {
    readonly id: number;
    readonly registrationDate: string;
    readonly location: string;
    readonly username: string;
    readonly password: string;
    readonly email: string;
    readonly first_name: string;
    readonly last_name: string;
    readonly age: number;
}