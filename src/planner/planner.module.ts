import { Module } from '@nestjs/common';
import { PlannerService } from './planner.service';
import { PlannerController } from './planner.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlannerRepository } from './planner.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([PlannerRepository])
  ],
  providers:[
    PlannerService
  ],
  exports: [
    PlannerService
  ],
  controllers: [PlannerController],
})
export class PlannerModule {}
