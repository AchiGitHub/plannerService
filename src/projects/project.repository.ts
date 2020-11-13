import { InternalServerErrorException } from "@nestjs/common";
import { Planner } from "src/planner/planner.entity";
import { EntityRepository, Repository } from "typeorm";
import { ProjectDto } from "./dto/projects.dto";
import { Projects } from "./projects.entity";

@EntityRepository(Projects)
export class ProjectRepository extends Repository<Projects> {

    async createProject(projectDto: ProjectDto, planner: Planner): Promise<Projects> {

        const { name, location, zip_code, description, project_year } = projectDto;

        const project = new Projects();

        project.name = name;
        project.location = location;
        project.zip_code = zip_code;
        project.description = description;
        project.project_year = project_year;
        project.planner = planner;

        await project.save();
        
        delete project.planner;

        return project;
    }
}