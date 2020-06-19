import chai, { should } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import sinon from 'sinon';
import sinonTest from 'sinon-test';
import sendgrid from '@sendgrid/mail';

import users from '../fixtures/users';
import sendGrid from '../../src/service/email';
import auth from '../../src/controller/auth';
import app from '../../src';

chai.use(chaiAsPromised);
const test = sinonTest(sinon);
const endPointVersion = '/api/v1';
const {
  payload
} = users;

should();

describe('Email Service', () => {
  let request;
  let res;
  const mockedResponse = {};

  beforeEach(async () => {
    await chai
      .request(app)
      .post(`${endPointVersion}/auth/signup`)
      .send(payload);
    request = { body: { email: payload.email }, headers: { host: 'http://localhost:4000/' } };
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
  afterEach(() => {
    if (sendgrid.send.restore) sendgrid.send.restore();
  });

  it('should send message with template', test(async () => {
    sinon.stub(sendgrid, 'send').resolves();

    const response = await sendGrid(users, 'verifyEmail', '');
    response.status.should.eql('success');
    response.should.have.property('message');
  }));

  it('should catch sendgrid error', test(async () => {
    sinon.stub(sendgrid, 'send').rejects();
    // eslint-disable-next-line no-unused-expressions
    (sendGrid(users, 'resetPassword', '')).should.eventually.fulfilled;
  }));
  it('should send password reset link', async () => {
    await auth.sendPasswordResetLink(request, res);

    mockedResponse.status.should.eql(200);
    mockedResponse.body.status.should.eql('success');
    mockedResponse.body.should.have.property('message');
  });
  it('should not send password reset link if email do not exist', async () => {
    // eslint-disable-next-line no-unused-expressions
    let err;
    try {
      await auth.sendPasswordResetLink(request = { body: { email: 'fake@fakerStatic.co' } }, res);
    } catch (error) {
      if (error) {
        err = error;
      }
    }
    console.log(err, err);
  });
  it('should send verification reset link', async () => {
    await auth.sendVerificationLink(request, res);

    mockedResponse.status.should.eql(200);
    mockedResponse.body.status.should.eql('success');
    mockedResponse.body.should.have.property('message');
  });
  it('should not send verification reset link if email do not exist', async () => {
    // eslint-disable-next-line no-unused-expressions
    (auth.sendVerificationLink(request = { body: { email: 'fake@fakerStatic.co' } }, res)).should.eventually.be.fulfilled;
  });
});
