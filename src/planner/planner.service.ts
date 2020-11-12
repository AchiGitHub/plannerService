import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { PlannerRepository } from './planner.repository';

@Injectable()
export class PlannerService {

    constructor(
        @InjectRepository(PlannerRepository)
        private plannerRepository: PlannerRepository
    ) { }

    register(authCredentialsDto: AuthCredentialsDto): Promise<void> {
        return this.plannerRepository.register(authCredentialsDto);
    }

    async signIn(authCredentialsDto: AuthCredentialsDto){

        const username = await this.plannerRepository.validatePlannerPassword(authCredentialsDto);
        
        if(!username){
            throw new UnauthorizedException('Invalid Credentials');
        }

        console.log(username)
    }
}
