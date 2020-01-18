import Debug from 'debug';

const debug = Debug('dev');

export default {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.createTable('Users', {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4
        },
        fullName: {
          allowNull: false,
          type: Sequelize.STRING
        },
        userName: {
          allowNull: true,
          type: Sequelize.STRING,
          unique: true
        },
        bio: {
          allowNull: true,
          type: Sequelize.TEXT,
        },
        email: {
          allowNull: false,
          type: Sequelize.STRING,
          unique: true
        },
        password: {
          allowNull: false,
          type: Sequelize.STRING
        },
        phoneNumber: {
          allowNull: false,
          type: Sequelize.STRING
        },
        signature: {
          allowNull: false,
          type: Sequelize.STRING
        },

        avatarUrl: {
          type: Sequelize.STRING
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn('now')
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn('now')
        }
      });
    } catch (error) {
      debug(error);
    }
  },
  down: async (queryInterface) => {
    try {
      await queryInterface.dropTable('Users');
    } catch (error) {
      debug(error);
    }
  }
};
