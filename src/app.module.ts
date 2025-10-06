import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteModule } from './cliente/cliente.module';
import { Cliente } from './cliente/cliente.entity';


@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'postgres',
			host: 'localhost',
			port: 5432,
			username: 'usuario',
			password: 'usuario',
			database: 'desafio_zoppy_back',
			entities: [
				Cliente
			], //__dirname + '/**/*.entity{.ts,.js}'
			synchronize: true,
		}),
		ClienteModule
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { }
