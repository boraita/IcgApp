import { ConnectionOptions } from 'typeorm';

const ormConfig: ConnectionOptions = {
	type: 'postgres',
	host: process.env.DATABASE_HOST,
	port: +process.env.DATABASE_PORT,
	username: process.env.DATABASE_USER,
	password: process.env.DATABASE_PASSWORD,
	database: process.env.DATABASE_NAME,
	synchronize: false,
	migrationsRun: true,
	logging: true,
	migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
	cli: {
		migrationsDir: './migrations',
	},
};

export = ormConfig;
