import { UsersDbModule } from '@db/models/users/users.module';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwtstrategy.service';

@Module({
	controllers: [AuthController],
	imports: [
		UsersDbModule,
		JwtModule.register({
			secret: process.env.JWT_SECRET,
			signOptions: { expiresIn: '60s' },
		}),
	],
	providers: [AuthService, JwtStrategy],
	exports: [JwtStrategy],
})
export class AuthModule {}
