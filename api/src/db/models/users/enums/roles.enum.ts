import { registerEnumType } from '@nestjs/graphql';
export enum Role {
	Admin = 'admin',
	User = 'user',
	Colaborator = 'colaborator',
}

registerEnumType(Role, { name: 'UserRole' });
