/* eslint-disable import/no-extraneous-dependencies */
import faker from 'faker';
import uuid from 'uuid/v4';

export default {
  up: async (queryInterface) => queryInterface.bulkInsert('Users', [{
    id: uuid(),
    fullName: faker.name.firstName(),
    userName: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    isVerified: true
  },
  {
    id: uuid(),
    fullName: 'world',
    userName: 'best',
    email: 'world.best@gmail.com',
    password: '123456',
    isVerified: true
  }], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {})
};
