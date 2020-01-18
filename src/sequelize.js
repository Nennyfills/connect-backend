// require('dotenv').config();

// module.exports = {
//   development: {
//     url: process.env.DATABASE_URL,
//     dialect: 'postgres',
//   },
//   test: {
//     url: process.env.DATABASE_TEST_URL,
//     dialect: 'postgres',
//   },
//   production: {
//     url: process.env.DATABASE_URL,
//     dialect: 'postgres',
//   },
// };
import { config as getEnv } from 'dotenv';

getEnv();

const env = process.env.NODE_ENV || 'development';
const devMode = (env !== 'production');
const databaseUrls = {
  development: process.env.DATABASE_URL,
  staging: process.env.DATABASE_URL,
  test: process.env.DATABASE_TEST_URL,
  production: process.env.DATABASE_URL
};

export default {
  [env]: {
    url: databaseUrls[env],
    dialect: 'postgres',
    logging: devMode ? (log) => log : false,
  }
};
