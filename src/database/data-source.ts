import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { configs } from '../core/app.config';

config();

export const getDataSourceConfigs = (
  configService: ConfigService,
): PostgresConnectionOptions & { seeds: string[]; factories: string[] } => {
  const sslEnabled = configService.get('DB_SSL') === 'true';
  const isTestEnv = configService.get('NODE_ENV') === 'test';

  return {
    type: 'postgres',
    host: configService.get('DB_HOST'),
    port: Number(configService.get('DB_PORT')),
    username: configService.get('DB_USER'),
    password: configService.get('DB_PASSWORD'),
    database: configService.get('DB_NAME'),
    logging: configService.get('DB_LOGGING') === 'true',
    migrationsRun: false,
    entities: isTestEnv ? ['src/**/*.entity.ts'] : ['dist/**/*.entity.js'],
    migrations: ['dist/database/migrations/*.js'],
    seeds: ['dist/database/seeds/**/*js'],
    factories: ['dist/database/factories/**/*js'],
    ...(sslEnabled && {
      ssl: {
        rejectUnauthorized: false,
      },
    }),
  };
};

const configService = new ConfigService(configs);
export default new DataSource(getDataSourceConfigs(configService));
