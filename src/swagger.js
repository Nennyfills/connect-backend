import path from 'path';

const routesPath = path.resolve(process.cwd(), __dirname, 'routes/*.js');


const config = {
  info: {
    title: 'connect',
    version: '1.0.0', // Version (required)
    description: 'Connect is an application that aids two or more individual share information among themselves.',
    termsOfService: '',
    contact: {
      email: '',
    },
    license: {
      name: 'Apache 2.0',
      url: 'http://www.apache.org/licenses/LICENSE-2.0.html',
    },
  },
  basePath: '/api/v1',
  apis: [routesPath],
};

module.exports = config;
