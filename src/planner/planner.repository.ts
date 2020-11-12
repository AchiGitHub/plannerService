import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { AuthCredentialsDto } from "./dto/auth-credentials.dto";
import { Planner } from "./planner.entity";
import * as bcrypt from 'bcrypt';

@EntityRepository(Planner)
export class PlannerRepository extends Repository<Planner> {

    async register(authCredentialsDto: AuthCredentialsDto): Promise<void> {

        const { username, password, first_name, age, gender, last_name, register_date, zip_code, location, about, telephone_number, website } = authCredentialsDto;

        const planner = new Planner();

        planner.username = username;
        planner.first_name = first_name;
        planner.last_name = last_name;
        planner.gender = gender;
        planner.location = location;
        planner.salt = await bcrypt.genSalt();
        planner.password = await this.hasPassword(password, planner.salt);
        planner.register_date = register_date;
        planner.zip_code = zip_code;
        planner.about = about;
        planner.website = website;
        planner.age = age;
        planner.telephone_number = telephone_number;

        try {
            await planner.save();
        } catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                throw new ConflictException('Username already exists');
            } else {
                throw new InternalServerErrorException();
            }
        }
    }

    async validatePlannerPassword(authCredentialsDto: AuthCredentialsDto): Promise<string> {
        const { username, password } = authCredentialsDto;
        const user = await this.findOne({ username });

        if (user && user.validatePassword(password)) {
            return user.username;
        } else {
            return null;
        }
    }

    private async hasPassword(password: string, salt: string) {
        return bcrypt.hash(password, salt);
    }

}