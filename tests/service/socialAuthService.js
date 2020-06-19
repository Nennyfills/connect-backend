import chai, { should } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import sinon from 'sinon';
import sinonTest from 'sinon-test';

import auth from '../../src/controller/auth';
import { createOrFindUser, performGoogleCallback, performGithubCallback } from '../../src/service/auth';
import service from '../fixtures/users';

const {
  socialSignup, extractedUserDetails, googleSuccessResponse, githubSuccessResponse
} = service;

chai.use(chaiAsPromised);
should();
const test = sinonTest(sinon);
describe('Social Service', () => {
  let request;
  let res;
  const done = (error, user) => ((error, user));
  const mockedResponse = {};
  beforeEach(async () => {
    request = { user: extractedUserDetails };
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
  it(
    'should create new user',
    test(async () => {
      const response = await createOrFindUser(socialSignup);
      response.status.should.eql(201);
      response.data.should.have.property('users');
    })
  );

  it(
    'should get users that are already created',
    test(async () => {
      const response = await createOrFindUser(socialSignup);

      response.status.should.eql(200);
      response.data.should.have.property('users');
    })
  );
  it('should signup successfully with social signup', async () => {
    await auth.socialLogin(request, res);

    mockedResponse.status.should.eql(201);
    mockedResponse.body.data.users.should.be.a('object');
  });

  it('should login successfully with social login', async () => {
    await auth.socialLogin(request, res);

    mockedResponse.status.should.eql(200);
    mockedResponse.body.data.users.should.be.a('object');
  });

  it('should return error', async () => {
    let next = 0;
    try {
      await createOrFindUser({});
    } catch (error) {
      if (error) {
        next += 1;
      }
    }

    next.should.eql(1);
  });
  it('should get google auth profile', test(async () => {
    const response = await performGoogleCallback('', '', googleSuccessResponse, done);

    response.should.be.a('object');
  }));
  it('should get github auth profile', test(async () => {
    const response = await performGithubCallback('', '', githubSuccessResponse, done);

    response.should.be.a('object');
  }));
});
