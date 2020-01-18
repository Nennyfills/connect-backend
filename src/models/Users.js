import { Sequelize, Model } from 'sequelize';

/**
 * Model class for Users
 *
 * @class
 *
 * @extends Model
 * @exports Users
 */
export default class Users extends Model {
  static modelFields = {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
    },
    fullName: Sequelize.STRING,
    email: Sequelize.STRING,
    userName: Sequelize.STRING,
    password: Sequelize.STRING,
    bio: Sequelize.STRING,
    phoneNumber: Sequelize.STRING,
    avatarURL: Sequelize.STRING,
    signature: Sequelize.STRING,
  }

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
    const model = super.init(Users.modelFields, { sequelize });

    return model;
  }

  //   /**
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
