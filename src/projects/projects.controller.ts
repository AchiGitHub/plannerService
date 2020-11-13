import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetPlanner } from 'src/planner/get-planner.decorator';
import { Planner } from 'src/planner/planner.entity';
import { ProjectDto } from './dto/projects.dto';
import { Projects } from './projects.entity';
import { ProjectsService } from './projects.service';

@Controller('projects')
@UseGuards(AuthGuard())
export class ProjectsController {
    constructor(
        private readonly projectService: ProjectsService
    ) { }

    @Post('create')
    async createProject(
        @Body() projectDto: ProjectDto,
        @GetPlanner() planner: Planner
    ): Promise<Projects> {
        return this.projectService.createProject(projectDto, planner);
    }
}
