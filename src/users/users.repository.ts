import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { AuthCredentialsDto } from "./dto/auth-credentials.dto";
import { Clients } from "./users.entity";
import * as bcrypt from 'bcrypt';

@EntityRepository(Clients)
export class UserRepository extends Repository<Clients> {

    async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {

        const { username, password, first_name, age, gender, last_name, register_date, zip_code, location } = authCredentialsDto;

        const salt = await bcrypt.genSalt();

        const user = new Clients();

        user.username = username;
        user.salt = await bcrypt.genSalt();
        user.password = await this.hasPassword(password, user.salt);
        user.gender = gender;
        user.age = age;
        user.first_name = first_name;
        user.last_name = last_name;
        user.register_date = register_date;
        user.location = location;
        user.zip_code = zip_code;

        try {
            await user.save();
        } catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                throw new ConflictException('Username already exists');
            } else {
                throw new InternalServerErrorException();
            }
        }
    }

    async validateUserPassword(authCredentialsDto: AuthCredentialsDto): Promise<string> {
        const { username, password } = authCredentialsDto;
        const user = await this.findOne({ username });

        if (user && await user.validatePassword(password)) {
            return user.username;
        } else {
            return null;
        }
    }

    private async hasPassword(password: string, salt: string) {
        return bcrypt.hash(password, salt);
    }

}