import { Controller, Get } from '@nestjs/common';
import { AreaService } from './area.service';
import { Area } from '../../models/area';

@Controller()
export class AreaController {
	constructor(private readonly areaService: AreaService) {}

	@Get('v1/areas')
	getAreas(): Area[] {
		return [
			{ value: 0, text: 'Niños' },
			{ value: 1, text: 'Multimedia' },
			{ value: 2, text: 'Jovenes' },
			{ value: 4, text: 'Alabanza' },
		];
	}
}
