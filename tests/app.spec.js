import chai, { should } from 'chai';
import chaiHttp from 'chai-http';

import app from '../src';

chai.use(chaiHttp);
should();

describe('App test', async () => {
  it('Should pass on GET', async () => {
    const response = await chai.request(app).get('/');

    response.should.have.status(200);
    response.body.status.should.eql('success');
    response.body.message.should.eql('Welcome to connect');
  });
  it('should display 404 error on invalid route', async () => {
    const response = await chai.request(app).get('/invalid/here/i/come');

    response.should.have.status(404);
    response.body.status.should.eql('error');
    response.body.error.should.eql('Not Found');
  });
});
