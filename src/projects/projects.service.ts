import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Planner } from 'src/planner/planner.entity';
import { ProjectDto } from './dto/projects.dto';
import { ProjectRepository } from './project.repository';
import { Projects } from './projects.entity';

@Injectable()
export class ProjectsService {

    constructor(
        @InjectRepository(ProjectRepository)
        private projectRepository: ProjectRepository
    ) { }

    createProject(
        projectDto: ProjectDto,
        planner: Planner
    ): Promise<Projects> {
        return this.projectRepository.createProject(projectDto, planner);
    }
}
