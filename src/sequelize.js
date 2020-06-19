import { config as getEnv } from 'dotenv';

getEnv();

const env = process.env.NODE_ENV || 'development';
const devMode = (env !== 'production');
const databaseUrls = {
  development: process.env.DATABASE_URL,
  staging: process.env.DATABASE_TEST_URL,
  test: process.env.DATABASE_TEST_URL,
  production: process.env.DATABASE_URL
};

export const url = databaseUrls[env];

export const config = {
  Dialect: 'postgres',
  logging: devMode ? (log) => log : false,
};
