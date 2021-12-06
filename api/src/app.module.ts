import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from './db/db.module';
import { AuthModule } from './modules/auth/auth.module';
import { MainModulesModule } from './modules/mainmodules.module';

@Module({
	imports: [AuthModule, MainModulesModule, ConfigModule.forRoot(), DbModule],
	exports: [AuthModule],
})
export class AppModule {}
