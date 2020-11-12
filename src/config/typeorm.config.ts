import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'planners-app.ccdnrpt94ojv.us-east-1.rds.amazonaws.com',
    port: 3306,
    username: 'admin',
    password: 'achi2228284',
    database: 'planner_schema',
    entities: [__dirname + '/../**/*.entity.js'],
    synchronize: true
}