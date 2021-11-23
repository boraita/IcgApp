import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from './db/db.module';
import { MainModulesModule } from './modules/mainmodules.module';

@Module({
	imports: [MainModulesModule, ConfigModule.forRoot(), DbModule],
})
export class AppModule {}
