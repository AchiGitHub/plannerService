import { Module } from '@nestjs/common';
import { PlannerService } from './planner.service';
import { PlannerController } from './planner.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlannerRepository } from './planner.repository';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule.register({
    defaultStrategy: 'jwt'
  }),
  JwtModule.register({
    secret: 'topSecret1',
    signOptions: {
      expiresIn: 3600
    }
  }),
  TypeOrmModule.forFeature([PlannerRepository])
  ],
  providers: [
    PlannerService,
    JwtStrategy
  ],
  exports: [
    PlannerService,
    JwtStrategy,
    PassportModule
  ],
  controllers: [PlannerController],
})
export class PlannerModule { }
