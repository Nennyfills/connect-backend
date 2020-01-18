import chai, { should } from 'chai';
import chaiHttp from 'chai-http';

import app from '../../src';

chai.use(chaiHttp);
should();
const endPointVersion = '/api/v1';

describe('Login test', async () => {
  it('should login use with valid parameters', async () => {
    const response = await chai.request(app).get(`${endPointVersion}/auth/login`);

    response.body.should.eql('Hello Auth');
  });
});
