import { Controller, Get } from '@nestjs/common';
import { UsersArgs } from '../../db/models/users/user-args';
import { UsersResolver } from '../../db/models/users/users.resolver';

@Controller()
export class UsersController {
	constructor(private readonly service: UsersResolver) {}

	@Get('v1/users')
	getUsers() {
		return this.service.users({ offset: 0, limit: 25 } as UsersArgs);
	}
}
