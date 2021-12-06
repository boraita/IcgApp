import { UsersDbModule } from '@db/models/users/users.module';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { registreredPassportModule } from '@shared/config';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwtstrategy.service';

@Module({
	controllers: [AuthController],
	imports: [
		UsersDbModule,
		registreredPassportModule,
		JwtModule.register({
			secret: '' + process.env.JWT_SECRET,
			signOptions: { expiresIn: '30d' },
		}),
	],
	providers: [AuthService, JwtStrategy],
	exports: [registreredPassportModule, JwtModule],
})
export class AuthModule {}
