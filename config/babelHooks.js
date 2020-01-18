// migrations/config/babelHook.js

// eslint-disable-next-line import/no-extraneous-dependencies
require('@babel/register');

module.exports = require('../src/sequelize');
