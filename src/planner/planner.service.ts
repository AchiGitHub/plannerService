import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { PlannerRepository } from './planner.repository';

@Injectable()
export class PlannerService {

    constructor(
        @InjectRepository(PlannerRepository)
        private plannerRepository: PlannerRepository,
        private jwtService: JwtService
    ) { }

    register(authCredentialsDto: AuthCredentialsDto): Promise<void> {
        return this.plannerRepository.register(authCredentialsDto);
    }

    async signIn(authCredentialsDto: AuthCredentialsDto): Promise<{ accessToken: string }> {

        const username = await this.plannerRepository.validatePlannerPassword(authCredentialsDto);

        if (!username) {
            throw new UnauthorizedException('Invalid Credentials');
        }

        const payload: JwtPayload = { username, role: "planner" };
        const accessToken = await this.jwtService.sign(payload);

        return { accessToken };
    }
}
