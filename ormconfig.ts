// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const { DB_SERVER, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

console.log(process.env)

const config = {
  type: "sqlite",
  database: "nestapp.db",
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: false,
  migrationsTableName: 'migration',
  migrations: ['migrations/*.ts'],
  keepConnectionAlive: false,
  cli: {
    entitiesDir: [__dirname + '/../**/*.entity{.ts,.js}'],
    migrationsDir: 'migrations',
  },
};

export = config;
