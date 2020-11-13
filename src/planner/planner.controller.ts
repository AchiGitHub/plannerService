import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { PlannerService } from './planner.service';

@Controller('planner')
export class PlannerController {
    constructor(private readonly plannerService: PlannerService) { }


    @Post('register')
    async register(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto): Promise<void> {
        return this.plannerService.register(authCredentialsDto);
    }

    @Post('/signin')
    async signIn(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto): Promise<{accessToken: string}> {
        return this.plannerService.signIn(authCredentialsDto);
    }
}
