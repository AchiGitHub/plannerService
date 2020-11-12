import { IsString, Matches, MaxLength, MinLength } from "class-validator";

export class AuthCredentialsDto {
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    username: string;

    @IsString()
    @MinLength(4)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*/, 
    { message: 'Password is too weak'})
    password: string;

    register_date: string;
    location: string;
    first_name: string;
    last_name: string;
    zip_code: string;
    age: number;
    gender: string;
}