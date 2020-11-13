import { IsNumber, IsString } from "class-validator";
import { PrimaryGeneratedColumn } from "typeorm";

export class ProjectDto {

    @IsString()
    name: string;

    @IsString()
    location: string;

    @IsString()
    zip_code: string;

    @IsString()
    description: string;

    @IsNumber()
    project_year: number;
}