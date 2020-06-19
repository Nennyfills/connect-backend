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
        googleId: {
          allowNull: true,
          type: Sequelize.STRING
        },
        githubId: {
          allowNull: true,
          type: Sequelize.STRING
        },
        fullName: {
          allowNull: true,
          type: Sequelize.STRING
        },
        userName: {
          allowNull: false,
          type: Sequelize.STRING,
          unique: true
        },
        bio: {
          allowNull: true,
          type: Sequelize.TEXT
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
          allowNull: true,
          type: Sequelize.STRING
        },
        signature: {
          allowNull: true,
          type: Sequelize.STRING
        },
        avatarUrl: {
          allowNull: true,
          type: Sequelize.STRING
        },
        isVerified: {
          allowNull: false,
          type: Sequelize.BOOLEAN
        },
        resetPasswordToken: {
          allowNull: true,
          type: Sequelize.STRING
        },
        verificationToken: {
          allowNull: true,
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
