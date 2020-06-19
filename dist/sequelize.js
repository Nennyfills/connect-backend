"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = exports.url = void 0;

var _dotenv = require("dotenv");

(0, _dotenv.config)();
const env = process.env.NODE_ENV || 'development';
const devMode = env !== 'production';
const databaseUrls = {
  development: process.env.DATABASE_URL,
  staging: process.env.DATABASE_TEST_URL,
  test: process.env.DATABASE_TEST_URL,
  production: process.env.DATABASE_URL
};
const url = databaseUrls[env];
exports.url = url;
const config = {
  Dialect: 'postgres',
  logging: devMode ? log => log : false
};
exports.config = config;