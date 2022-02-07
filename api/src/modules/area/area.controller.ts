import { Area } from '@db/models/users/enums/areas.enum';
import { Controller, Get } from '@nestjs/common';

@Controller()
export class AreaController {
	constructor() {}

	@Get('v1/areas')
	getAreas(): Area[] {
		return Object.values(Area);
	}
}
