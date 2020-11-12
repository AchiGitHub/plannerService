import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { typeOrmConfig } from './config/typeorm.config';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { PlannerModule } from './planner/planner.module';
import { PlannerController } from './planner/planner.controller';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    PlannerModule
  ],
  controllers: [AppController, UsersController, PlannerController]
})
export class AppModule {}
