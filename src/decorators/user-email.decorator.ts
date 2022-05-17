import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const UserEmail = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const requset = ctx.switchToHttp().getRequest();
    return requset.user;
  },
);
