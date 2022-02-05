import { Controller, Get } from '@nestjs/common';
import { AreaService } from './area.service';
import { Area } from '../../shared/models/area';

@Controller()
export class AreaController {
	constructor(private readonly areaService: AreaService) {}

	@Get('v1/areas')
	getAreas(): Area[] {
		return [
			{ id: 0, name: 'Niños' },
			{ id: 1, name: 'Multimedia' },
			{ id: 2, name: 'Jovenes' },
			{ id: 4, name: 'Alabanza' },
		];
	}
}
