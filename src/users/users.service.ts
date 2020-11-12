import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User } from './interfaces/user.interface';
import { UserRepository } from './users.repository';


@Injectable()
export class UsersService {
    private readonly users: User[];

    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
    ) {}

    signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
        return this.userRepository.signUp(authCredentialsDto);
    }

    async signIn(authCredentialsDto: AuthCredentialsDto) {
        const result = await this.userRepository.validateUserPassword(authCredentialsDto);
        console.log(result);
    }

}
