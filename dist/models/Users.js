"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _sequelize = require("sequelize");

function cov_17shzxsfdj() {
  var path = "C:\\Users\\chinenye.dike\\Documents\\workspace\\connect-backend\\src\\models\\Users.js";
  var hash = "8b6d146a094e24ecf449a1f3d1a48a2c0620b859";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\chinenye.dike\\Documents\\workspace\\connect-backend\\src\\models\\Users.js",
    statementMap: {
      "0": {
        start: {
          line: 12,
          column: 23
        },
        end: {
          line: 31,
          column: 3
        }
      },
      "1": {
        start: {
          line: 44,
          column: 18
        },
        end: {
          line: 44,
          column: 62
        }
      },
      "2": {
        start: {
          line: 46,
          column: 4
        },
        end: {
          line: 46,
          column: 17
        }
      },
      "3": {
        start: {
          line: 61,
          column: 17
        },
        end: {
          line: 65,
          column: 6
        }
      },
      "4": {
        start: {
          line: 67,
          column: 4
        },
        end: {
          line: 67,
          column: 16
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 43,
            column: 2
          },
          end: {
            line: 43,
            column: 3
          }
        },
        loc: {
          start: {
            line: 43,
            column: 25
          },
          end: {
            line: 47,
            column: 3
          }
        },
        line: 43
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 60,
            column: 2
          },
          end: {
            line: 60,
            column: 3
          }
        },
        loc: {
          start: {
            line: 60,
            column: 62
          },
          end: {
            line: 68,
            column: 3
          }
        },
        line: 60
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 60,
            column: 44
          },
          end: {
            line: 60,
            column: 60
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 60,
            column: 53
          },
          end: {
            line: 60,
            column: 60
          }
        }],
        line: 60
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "8b6d146a094e24ecf449a1f3d1a48a2c0620b859"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_17shzxsfdj = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_17shzxsfdj();

/**
 * Model class for Users
 *
 * @class
 *
 * @extends Model
 * @exports Users
 */
class Users extends _sequelize.Model {
  /**
   * Initializes the Users model
   *
   * @static
   * @memberof Users
   *
   * @param {any} sequelize the sequelize object
   *
   * @returns {Object} the Users model
   */
  static init(sequelize) {
    cov_17shzxsfdj().f[0]++;
    const model = (cov_17shzxsfdj().s[1]++, super.init(Users.modelFields, {
      sequelize
    }));
    cov_17shzxsfdj().s[2]++;
    return model;
  }
  /**
   * Get existing user
   *
   * @static
   * @memberof Users
   *
   * @param {string} queryString - string to sort in the database
   * @param {string} column - column to search
   *
   * @returns {Object | void} - details of existing user
   */


  static async getExistingUser(queryString, column = (cov_17shzxsfdj().b[0][0]++, 'email')) {
    cov_17shzxsfdj().f[1]++;
    const user = (cov_17shzxsfdj().s[3]++, await Users.findOne({
      where: {
        [column]: queryString
      }
    }));
    cov_17shzxsfdj().s[4]++;
    return user;
  }

}

exports.default = Users;
(0, _defineProperty2.default)(Users, "modelFields", (cov_17shzxsfdj().s[0]++, {
  id: {
    type: _sequelize.Sequelize.UUID,
    primaryKey: true,
    defaultValue: _sequelize.Sequelize.UUIDV4
  },
  googleId: _sequelize.Sequelize.STRING,
  githubId: _sequelize.Sequelize.STRING,
  fullName: _sequelize.Sequelize.STRING,
  email: _sequelize.Sequelize.STRING,
  userName: _sequelize.Sequelize.STRING,
  password: _sequelize.Sequelize.STRING,
  bio: _sequelize.Sequelize.STRING,
  phoneNumber: _sequelize.Sequelize.STRING,
  avatarUrl: _sequelize.Sequelize.STRING,
  signature: _sequelize.Sequelize.STRING,
  isVerified: _sequelize.Sequelize.BOOLEAN,
  resetPasswordToken: _sequelize.Sequelize.STRING,
  verificationToken: _sequelize.Sequelize.STRING
}));
module.exports = exports.default;