import { registerEnumType } from '@nestjs/graphql';
export enum Area {
	Kids = 'Ninos',
	Multimedia = 'Multimedia',
	Youngs = 'Jovenes',
	Prise = 'Alabanza',
}

registerEnumType(Area, { name: 'UserArea' });
