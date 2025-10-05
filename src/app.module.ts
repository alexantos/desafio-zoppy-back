import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'postgres',
			host: 'localhost',
			port: 5432,
			username: 'postgres',
			password: '123456',
			database: 'desafio_zoppy_back',
			entities: [

			], //__dirname + '/**/*.entity{.ts,.js}'
			synchronize: true,
		}),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { }
