import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const { DB_SERVER, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

export class DbProvider {
  public databaseConfig = (): TypeOrmModuleOptions => {
    return {
      type: "sqlite",
      database: "nestapp.db",
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: false,
      migrationsTableName: 'migration',
      migrations: [__dirname + 'migrations/*.ts'],
      logging: ['error'],
      logger: 'file',
    };
  };
}
