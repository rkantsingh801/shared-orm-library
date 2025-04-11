import { Module, Global, DynamicModule } from '@nestjs/common';
import { createConnection } from 'typeorm';
import { DataSource } from 'typeorm';
import { databaseProviders } from './database.providers';

@Global()
@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {
  static forRoot(): DynamicModule {
    return {
      module: DatabaseModule,
      providers: [
        {
          provide: 'DATABASE_CONNECTION',
          useFactory: async () =>
            await createConnection({
              type: 'postgres',
              host: 'localhost', // Replace with your host
              port: 5432, // Replace with your port
              username: 'postgres', // Replace
              password: 'root', // Replace
              database: 'my_account',
              entities: [__dirname + '/../entities/*.entity{.ts,.js}'],
              synchronize: false,
              migrations: [__dirname + '/../migrations/*{.ts,.js}'],
              migrationsRun: true,
            }),
        },
        ...databaseProviders,
      ],
      exports: ['DATABASE_CONNECTION', ...databaseProviders],
    };
  }
}