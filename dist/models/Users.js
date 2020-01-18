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
  var hash = "fddd83c800449e6732cbc4ddd18fab3f66002866";
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
          line: 26,
          column: 3
        }
      },
      "1": {
        start: {
          line: 39,
          column: 18
        },
        end: {
          line: 39,
          column: 62
        }
      },
      "2": {
        start: {
          line: 41,
          column: 4
        },
        end: {
          line: 41,
          column: 17
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 38,
            column: 2
          },
          end: {
            line: 38,
            column: 3
          }
        },
        loc: {
          start: {
            line: 38,
            column: 25
          },
          end: {
            line: 42,
            column: 3
          }
        },
        line: 38
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "fddd83c800449e6732cbc4ddd18fab3f66002866"
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
  } //   /**
  //    * Model associations
  //    *
  //    * @static
  //    * @memberof Users
  //    *
  //    * @param {any} models all models
  //    *
  //    * @returns {void} no return
  //    */
  //   static associate(models) {
  //     Users.belongsTo(models.Articles, {
  //       as: 'article',
  //       foreignKey: 'articleId',
  //       onDelete: 'CASCADE'
  //     });
  //     Users.belongsTo(models.Categories, {
  //       as: 'tag',
  //       foreignKey: 'categoryId',
  //       onDelete: 'CASCADE'
  //     });
  //     Users.belongsTo(models.Users, {
  //       foreignKey: 'authorId',
  //       as: 'author',
  //       onDelete: 'CASCADE'
  //     });
  //   }
  //   /**
  //  * destroys all tags for given article
  //  *
  //  * @function
  //  *
  //  * @param {uuid} id - id of the article to which tags belong
  //  *
  //  * @returns {void} - returns nothing
  //  */
  //   static async deleteTags(id) {
  //     await Users.destroy({
  //       returning: true,
  //       where: {
  //         articleId: id
  //       }
  //     });
  //   }
  //   /**
  //  * creates tags for given article
  //  *
  //  * @function
  //  *
  //  * @param {Object} tag - tags to be created
  //  * @param {uuid} id - id of the article to which tags belong
  //  * @param {uuid} authorId - id of the author
  //  *
  //  * @returns {Array} - array
  //  */
  //   static async createTags(tag, id, authorId) {
  //     const tags = tag.map((eachTag) => ({
  //       articleId: id,
  //       categoryId: eachTag,
  //       authorId
  //     }));
  //     const response = await Users.bulkCreate(tags);
  //     const createdTags = response.map((eachTag) => eachTag.dataValues.categoryId);
  //     return createdTags;
  //   }
  //   /**
  //    * Finds all tags belonging to an article
  //    *
  //    * @function
  //    *
  //    * @param {string} articleId - id of the article to which tags belong
  //    *
  //    * @returns {Array} - array
  //    */
  //   static async findTags(articleId) {
  //     const tags = await Users.findAll({
  //       where: { articleId }
  //     });
  //     return tags;
  //   }


}

exports.default = Users;
(0, _defineProperty2.default)(Users, "modelFields", (cov_17shzxsfdj().s[0]++, {
  id: {
    type: _sequelize.Sequelize.UUID,
    primaryKey: true,
    defaultValue: _sequelize.Sequelize.UUIDV4
  },
  fullName: _sequelize.Sequelize.STRING,
  email: _sequelize.Sequelize.STRING,
  userName: _sequelize.Sequelize.STRING,
  password: _sequelize.Sequelize.STRING,
  bio: _sequelize.Sequelize.STRING,
  phoneNumber: _sequelize.Sequelize.STRING,
  avatarURL: _sequelize.Sequelize.STRING,
  signature: _sequelize.Sequelize.STRING
}));
module.exports = exports.default;