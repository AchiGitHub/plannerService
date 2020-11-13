import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectRepository } from './project.repository';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';

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
    TypeOrmModule.forFeature([ProjectRepository])
  ],
  controllers: [ProjectsController],
  exports: [ProjectsService],
  providers: [ProjectsService]
})
export class ProjectsModule {}
