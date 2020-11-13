import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { typeOrmConfig } from './config/typeorm.config';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { PlannerModule } from './planner/planner.module';
import { PlannerController } from './planner/planner.controller';
import { ProjectsModule } from './projects/projects.module';
import { ProjectsController } from './projects/projects.controller';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    PlannerModule,
    ProjectsModule
  ],
  controllers: [AppController, UsersController, PlannerController, ProjectsController]
})
export class AppModule {}
