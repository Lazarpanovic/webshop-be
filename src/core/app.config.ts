import { ConfigModuleOptions } from '@nestjs/config';
import * as Joi from 'joi';

const configsValidationSchema = Joi.object({
  // env
  NODE_ENV: Joi.string()
    .valid('development')
    .default('development'),

  // db
  PORT: Joi.string().default('4000'),
  DATABASE_HOST: Joi.string(),
  DATABASE_PORT: Joi.string(),
  DATABASE_USER: Joi.string(),
  DATABASE_PASSWORD: Joi.string(),
  DATABASE_NAME: Joi.string(),
  DATABASE_LOGGING: Joi.string(),
  DATABASE_SSL: Joi.string(),
});

export const configs: ConfigModuleOptions = {
  validationSchema: configsValidationSchema,
  isGlobal: true,
};
