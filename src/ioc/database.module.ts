import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BaseModelSubscriber } from './base-model.subscriber';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule, BaseModelSubscriber],
      useFactory: (configService: ConfigService) => {
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
      },
      inject: [ConfigService],
    }),
  ],
  providers: [BaseModelSubscriber],
  exports: [BaseModelSubscriber],
})
export class DatabaseModule {}
