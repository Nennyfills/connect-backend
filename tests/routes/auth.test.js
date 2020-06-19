/* eslint-disable no-unused-expressions */
import chai, { should } from 'chai';
import chaiAsPromised from 'chai-as-promised';

import app from '../../src';
import userData from '../fixtures/users';
import database from '../../src/models';
import auth from '../../src/controller/auth';
import { generateToken } from '../../src/helper/auth';

const { Users } = database;

const {
  loginWithEmail,
  loginWithUserName,
  signUpPayload,
  payloadFakeEmail,
  payloadFakeFullName,
  payloadFakePassword,
  payloadFakeUserName,
  expiredToken,
  signUpPayloadExistingUserName
} = userData;

chai.use(chaiAsPromised);
should();

const endPointVersion = '/api/v1';

describe('Auth test', async () => {
  let userTokenMAin;

  describe('signup test', async () => {
    const payload = signUpPayload;
    it('should signup use with valid parameters', async () => {
      const response = await chai
        .request(app)
        .post(`${endPointVersion}/auth/signup`)
        .send(payload);
      const {
        body: { data },
      } = response;

      data.user.email.should.eql(payload.email);
      data.user.userName.should.eql(payload.userName.toLowerCase());
      data.user.fullName.should.eql(payload.fullName);
      data.token.should.be.a('string');
      data.should.have.property('token');
    });
    it('should not signup with existing userName', async () => {
      const response = await chai
        .request(app)
        .post(`${endPointVersion}/auth/signup`)
        .send(signUpPayloadExistingUserName);

      response.body.status.should.eql('error');
      response.body.error.message.should.eql('UserName already taken');
    });
    it('should  not signup with invalid email', async () => {
      const response = await chai
        .request(app)
        .post(`${endPointVersion}/auth/signup`)
        .send(payloadFakeEmail);

      response.body.status.should.eql('error');
      response.body.error.message.should.eql('Email must be a valid email');
    });
    it('should not signup with invalid fullName', async () => {
      const response = await chai
        .request(app)
        .post(`${endPointVersion}/auth/signup`)
        .send(payloadFakeFullName);

      response.body.status.should.eql('error');
      response.body.error.message.should.eql(
        'FullName should have a minimum length of 6 characters'
      );
    });
    it('should not signup with invalid password', async () => {
      const response = await chai
        .request(app)
        .post(`${endPointVersion}/auth/signup`)
        .send(payloadFakePassword);

      response.body.status.should.eql('error');
      response.body.error.message.should.eql(
        'Password must have at least 1 uppercase character, 1 special character, 1 lowercase character and 1 number'
      );
    });
    it('should not signup with invalid userName', async () => {
      const response = await chai
        .request(app)
        .post(`${endPointVersion}/auth/signup`)
        .send(payloadFakeUserName);

      response.body.status.should.eql('error');
      response.body.error.message.should.eql('UserName cannot be an empty');
    });
  });
  describe('Login test', async () => {
    it('should login use with valid parameters using email', async () => {
      const payload = loginWithEmail;
      const response = await chai
        .request(app)
        .post(`${endPointVersion}/auth/login`)
        .send(payload);
      const {
        body: { data },
      } = response;
      userTokenMAin = data.token;
      data.user.email.should.eql(payload.email);
      data.token.should.be.a('string');
      data.should.have.property('token');
    });
    it('should login use with valid parameters using userName', async () => {
      const response = await chai
        .request(app)
        .post(`${endPointVersion}/auth/login`)
        .send(loginWithUserName);
      const {
        body: { data },
      } = response;

      data.user.userName.should.eql(loginWithUserName.userName.toLowerCase());
      data.token.should.be.a('string');
      data.should.have.property('token');
    });
    it('should not login with invalid email', async () => {
      const response = await chai
        .request(app)
        .post(`${endPointVersion}/auth/login`)
        .send({ userName: '' });

      response.body.status.should.eql('error');
      response.body.error.message.should.eql('UserName cannot be an empty');
    });
    it('should not login with invalid fullName', async () => {
      const response = await chai
        .request(app)
        .post(`${endPointVersion}/auth/login`)
        .send({ email: 'nennyfillsgmail.com' });

      response.body.status.should.eql('error');
      response.body.error.message.should.eql(
        'Email must be a valid email address'
      );
    });
    it('should not login if password is wrong', async () => {
      const response = await chai
        .request(app)
        .post(`${endPointVersion}/auth/login`)
        .send({ userName: 'kl.com', password: '@Cdrrrrrgf2!' });

      response.body.status.should.eql('error');
      response.body.error.message.should.eql('You are not yet registered');
    });
    it('should not login if user detail does not exist', async () => {
      const response = await chai
        .request(app)
        .post(`${endPointVersion}/auth/login`)
        .send({ email: loginWithEmail.email, password: '@Conment2!' });

      response.body.status.should.eql('error');
      response.body.error.message.should.eql('Invalid user name or password');
    });
  });
  describe('Password reset', async () => {
    let req;
    let reqResetPasswordLink;
    let res;
    let testToken;
    let id;
    const mockedResponse = {};
    beforeEach(async () => {
      const userDetail = await Users.getExistingUser('username', 'userName');
      const userDetailSecond = await Users.getExistingUser(
        'nennyfills',
        'userName'
      );
      id = { id: userDetailSecond.dataValues.id };
      testToken = await generateToken(id, '1h');
      await Users.update({ resetPasswordToken: testToken }, { where: id });
      req = {
        body: {
          password: '@Conncet1@',
          userName: 'username',
          existingPassword: '@Conncet1!',
        },
        user: { dataValues: userDetail.dataValues },
      };
      reqResetPasswordLink = {
        body: {
          password: '@Conncet1@',
        },
        params: {
          token: testToken,
        },
      };
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
    it('should reset password if current user', async () => {
      const response = await chai
        .request(app)
        .put(`${endPointVersion}/auth/reset/password`)
        .set('Authorization', `Bearer ${userTokenMAin}`)
        .send({
          password: '@Conncet1@',
          userName: 'nennyfills',
          existingPassword: '@Conncet1!',
        });

      response.body.status.should.eql('success');
      response.body.data.should.be.a('object');
    });
    it('should not reset password if not current user', async () => {
      const response = await chai
        .request(app)
        .put(`${endPointVersion}/auth/reset/password`)
        .set('Authorization', `Bearer ${userTokenMAin}`)
        .send({
          password: '@Conncet1@',
          userName: 'nenlFills',
          existingPassword: '@Conncet1!',
        });

      response.body.status.should.eql('error');
      response.body.error.message.should.eql(
        'You are not authorized to make any changes'
      );
    });
    it('should not reset password if existing password is wrong', async () => {
      const response = await chai
        .request(app)
        .put(`${endPointVersion}/auth/reset/password`)
        .set('Authorization', `Bearer ${userTokenMAin}`)
        .send({
          password: '@Conncet1@',
          userName: 'nennyfills',
          existingPassword: '@Con0ncet1!',
        });

      response.body.status.should.eql('error');
      response.body.error.message.should.eql('Password is incorrect');
    });
    it('should not reset password if user logged in with a social account', async () => {
      auth.resetPassword(req, res).should.eventually.be.fulfilled;
    });
    it('should not reset password if existing password is wrong', async () => {
      const response = await chai
        .request(app)
        .put(`${endPointVersion}/auth/reset/password`)
        .set('Authorization', `Bearer ${userTokenMAin}`)
        .send({
          password: '@Conncet1@',
          userName: 'nennyfills',
          existingPassword: '@Con0ncet1!',
        });

      response.body.status.should.eql('error');
      response.body.error.message.should.eql('Password is incorrect');
    });
    it('should not reset password if user logged in with a social account', async () => {
      auth.resetPassword(req, res).should.eventually.be.fulfilled;
    });
    it('should reset password if all values are correct', async () => {
      await auth.resetPasswordWithLink(reqResetPasswordLink, res);
      mockedResponse.status.should.eql(200);
      mockedResponse.body.status.should.eql('success');
      mockedResponse.body.message.should.eql('Password changed successfully');
    });
    it('should not reset password if user does not exist', async () => {
      auth.resetPasswordWithLink(
        (req = {
          body: { password: '@gokrjjf23F' },
          params: { token: 'fjhfjbjhfbjhbf' },
        }),
        res
      ).should.eventually.be.fulfilled;
    });
    it('should not reset password if token has expired', async () => {
      await Users.update(
        { resetPasswordToken: expiredToken.token },
        { where: id }
      );
      auth.resetPasswordWithLink(
        (req = {
          body: { password: '@gokrjjf23F' },
          params: { token: expiredToken.token },
        }),
        res
      ).should.eventually.be.fulfilled;
    });
  });
  describe('Verification Token ', async () => {
    let req;
    let res;
    let testToken;
    let id;
    const mockedResponse = {};
    beforeEach(async () => {
      const userDetailSecond = await Users.getExistingUser(
        'nennyfills',
        'userName'
      );
      id = { id: userDetailSecond.dataValues.id };
      testToken = await generateToken(id, '1h');
      await Users.update({ verificationToken: testToken }, { where: id });
      req = {
        params: {
          token: testToken,
        },
      };
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
    it('should verification email if token is valid', async () => {
      await auth.verificationLink(req, res);
      mockedResponse.status.should.eql(200);
      mockedResponse.body.status.should.eql('success');
      mockedResponse.body.message.should.eql('Email verified successfully');
    });
    it('should not reset password if user does not exist', async () => {
      auth.verificationLink(
        (req = {
          params: { token: 'fjhfjbjhfbjhbf' },
        }),
        res
      ).should.eventually.be.fulfilled;
    });
    it('should not verified email if token has expired', async () => {
      await Users.update(
        { verificationToken: expiredToken.token },
        { where: id }
      );
      const response = await chai
        .request(app)
        .put(`${endPointVersion}/auth/verify/email/${expiredToken.token}`);
      response.status.should.eql(498);
      response.body.status.should.eql('error');
      response.body.error.message.should.eql(
        'Verification Link Expired, please request for a new link'
      );
      auth.verificationLink(
        (req = {
          params: { token: expiredToken.token },
        }),
        res
      ).should.eventually.be.fulfilled;
    });
  });
});
