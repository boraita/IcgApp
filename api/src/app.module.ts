import { DbModule } from '@db/db.module';
import { UsersDbModule } from '@db/models/users/users.module';
import { AuthController } from '@modules/auth/auth.controller';
import { AuthService } from '@modules/auth/auth.service';
import { JwtStrategy } from '@modules/auth/jwtstrategy.service';
import { MainModulesModule } from '@modules/mainmodules.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { registreredPassportModule } from '@shared/config';

@Module({
	controllers: [AuthController],
	imports: [
		MainModulesModule,
		ConfigModule.forRoot(),
		DbModule,
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
export class AppModule {}
