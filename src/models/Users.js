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
    googleId: Sequelize.STRING,
    githubId: Sequelize.STRING,
    fullName: Sequelize.STRING,
    email: Sequelize.STRING,
    userName: Sequelize.STRING,
    password: Sequelize.STRING,
    bio: Sequelize.STRING,
    phoneNumber: Sequelize.STRING,
    avatarUrl: Sequelize.STRING,
    signature: Sequelize.STRING,
    isVerified: Sequelize.BOOLEAN,
    resetPasswordToken: Sequelize.STRING,
    verificationToken: Sequelize.STRING,
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
  static async getExistingUser(queryString, column = 'email') {
    const user = await Users.findOne({
      where: {
        [column]: queryString
      }
    });

    return user;
  }
}
