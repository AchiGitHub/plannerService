import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { Clients } from "./users.entity";

export const GetUser = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);