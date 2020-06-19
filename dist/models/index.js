"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _sequelize2 = require("../sequelize");

/* eslint-disable import/no-dynamic-require */
const basename = _path.default.basename(__filename);

const sequelize = new _sequelize.default(_sequelize2.url, _sequelize2.config);
const database = {};

_fs.default.readdirSync(__dirname).filter(file => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js').forEach(file => {
  // eslint-disable-next-line global-require
  const model = require(_path.default.join(__dirname, file)).init(sequelize);

  database[model.name] = model;
});

Object.keys(database).forEach(model => {
  if (database[model].associate) {
    database[model].models = database;
    database[model].associate(database);
  }
});
database.sequelize = sequelize;
database.Sequelize = _sequelize.default;
var _default = database;
exports.default = _default;
module.exports = exports.default;