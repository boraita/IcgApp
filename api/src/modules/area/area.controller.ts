import { Controller, Get } from '@nestjs/common';
import { Area } from '@shared/enums/area';

@Controller()
export class AreaController {
	constructor() {}

	@Get('v1/areas')
	getAreas(): Area[] {
		return Object.values(Area);
	}
}
