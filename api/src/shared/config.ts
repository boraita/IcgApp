import { PassportModule } from '@nestjs/passport';
export const registreredPassportModule = PassportModule.register({
	defaultStrategy: 'jwt',
	property: 'user',
	session: false,
});
