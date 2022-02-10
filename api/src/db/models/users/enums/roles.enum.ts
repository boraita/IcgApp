import { registerEnumType } from '@nestjs/graphql';
export enum Role {
	Admin = 'admin',
	User = 'user',
	Collaborator = 'collaborator',
}

registerEnumType(Role, { name: 'UserRole' });
