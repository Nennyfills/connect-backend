/* eslint-disable no-unused-expressions */
import chai, { should } from 'chai';
import chaiAsPromised from 'chai-as-promised';

import users from '../fixtures/users';
import authorization from '../../src/middlewares/authorization';
import app from '../../src';

chai.use(chaiAsPromised);

const endPointVersion = '/api/v1';
const { payloadAuthorization } = users;
const { authorizationVerify } = authorization;

should();

describe('Authentication Middleware', () => {
  let res;
  const mockedResponse = {};

  before(async () => {
    await chai
      .request(app)
      .post(`${endPointVersion}/auth/login`)
      .send(payloadAuthorization);

    res = {
      status(code) {
        mockedResponse.status = code;
        return this;
      },
      json(body) {
        mockedResponse.body = body;
        return {};
      },
    };
  });
  it('should not authorization if token do not exist in the header', async () => {
    authorizationVerify(
      ({ request: { headers: { authorization: '' } } }),
      res
    ).should.eventually.be.fulfilled;
  });
  it('should not authorization if header is empty', async () => {
    authorizationVerify(
      ({ request: { headers: { authorization: null } } }),
      res
    ).should.eventually.be.fulfilled;
  });
});
