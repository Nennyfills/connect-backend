"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireWildcard(require("express"));

var _http = _interopRequireDefault(require("http"));

var _dotenv = require("dotenv");

var _cors = _interopRequireDefault(require("cors"));

var _debug = _interopRequireDefault(require("debug"));

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _routes = _interopRequireDefault(require("./routes"));

var _swagger = _interopRequireDefault(require("../docs/swagger.json"));

function cov_226l1t3lox() {
  var path = "C:\\Users\\chinenye.dike\\Documents\\workspace\\connect-backend\\src\\index.js";
  var hash = "ad0c687aeeef218646458eb47241aa0fc802db31";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\chinenye.dike\\Documents\\workspace\\connect-backend\\src\\index.js",
    statementMap: {
      "0": {
        start: {
          line: 17,
          column: 0
        },
        end: {
          line: 17,
          column: 9
        }
      },
      "1": {
        start: {
          line: 18,
          column: 14
        },
        end: {
          line: 18,
          column: 26
        }
      },
      "2": {
        start: {
          line: 19,
          column: 17
        },
        end: {
          line: 19,
          column: 28
        }
      },
      "3": {
        start: {
          line: 20,
          column: 12
        },
        end: {
          line: 20,
          column: 21
        }
      },
      "4": {
        start: {
          line: 22,
          column: 0
        },
        end: {
          line: 22,
          column: 16
        }
      },
      "5": {
        start: {
          line: 23,
          column: 0
        },
        end: {
          line: 23,
          column: 41
        }
      },
      "6": {
        start: {
          line: 24,
          column: 0
        },
        end: {
          line: 24,
          column: 16
        }
      },
      "7": {
        start: {
          line: 25,
          column: 0
        },
        end: {
          line: 25,
          column: 23
        }
      },
      "8": {
        start: {
          line: 35,
          column: 0
        },
        end: {
          line: 35,
          column: 27
        }
      },
      "9": {
        start: {
          line: 36,
          column: 0
        },
        end: {
          line: 36,
          column: 70
        }
      },
      "10": {
        start: {
          line: 38,
          column: 0
        },
        end: {
          line: 43,
          column: 3
        }
      },
      "11": {
        start: {
          line: 39,
          column: 2
        },
        end: {
          line: 42,
          column: 5
        }
      },
      "12": {
        start: {
          line: 45,
          column: 0
        },
        end: {
          line: 50,
          column: 3
        }
      },
      "13": {
        start: {
          line: 46,
          column: 2
        },
        end: {
          line: 49,
          column: 5
        }
      },
      "14": {
        start: {
          line: 54,
          column: 15
        },
        end: {
          line: 54,
          column: 37
        }
      },
      "15": {
        start: {
          line: 58,
          column: 0
        },
        end: {
          line: 58,
          column: 67
        }
      },
      "16": {
        start: {
          line: 58,
          column: 26
        },
        end: {
          line: 58,
          column: 65
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 38,
            column: 13
          },
          end: {
            line: 38,
            column: 14
          }
        },
        loc: {
          start: {
            line: 38,
            column: 36
          },
          end: {
            line: 43,
            column: 1
          }
        },
        line: 38
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 45,
            column: 13
          },
          end: {
            line: 45,
            column: 14
          }
        },
        loc: {
          start: {
            line: 45,
            column: 36
          },
          end: {
            line: 50,
            column: 1
          }
        },
        line: 45
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 58,
            column: 20
          },
          end: {
            line: 58,
            column: 21
          }
        },
        loc: {
          start: {
            line: 58,
            column: 26
          },
          end: {
            line: 58,
            column: 65
          }
        },
        line: 58
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "ad0c687aeeef218646458eb47241aa0fc802db31"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_226l1t3lox = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_226l1t3lox().s[0]++;
// import errorHandler from './middlewares/errorHandler';
// import socketIO from './socket';
// import './services/cron';
(0, _dotenv.config)();
const debug = (cov_226l1t3lox().s[1]++, (0, _debug.default)('dev'));
const {
  PORT
} = (cov_226l1t3lox().s[2]++, process.env);
const app = (cov_226l1t3lox().s[3]++, (0, _express.default)());
cov_226l1t3lox().s[4]++;
app.use((0, _express.json)());
cov_226l1t3lox().s[5]++;
app.use((0, _express.urlencoded)({
  extended: false
}));
cov_226l1t3lox().s[6]++;
app.use((0, _cors.default)());
cov_226l1t3lox().s[7]++;
app.use((0, _morgan.default)('dev')); // app.use(passport.initialize());
// app.use(
//   session({
//     secret: process.env.SESSION_SECRET,
//     resave: true,
//     saveUninitialized: true,
//   }),
// );

cov_226l1t3lox().s[8]++;
app.use('/api/v1', _routes.default);
cov_226l1t3lox().s[9]++;
app.use('/api/v1/docs', _swaggerUiExpress.default.serve, _swaggerUiExpress.default.setup(_swagger.default));
cov_226l1t3lox().s[10]++;
app.get('/', (request, response) => {
  cov_226l1t3lox().f[0]++;
  cov_226l1t3lox().s[11]++;
  response.status(200).json({
    status: 'success',
    message: 'Welcome to connect'
  });
});
cov_226l1t3lox().s[12]++;
app.all('*', (request, response) => {
  cov_226l1t3lox().f[1]++;
  cov_226l1t3lox().s[13]++;
  response.status(404).json({
    status: 'error',
    error: 'Not Found'
  });
}); // app.use(errorHandler);

const server = (cov_226l1t3lox().s[14]++, _http.default.createServer(app)); // socketIO(server);

cov_226l1t3lox().s[15]++;
server.listen(PORT, () => {
  cov_226l1t3lox().f[2]++;
  cov_226l1t3lox().s[16]++;
  return debug(`Server started on port ${PORT}`);
});
var _default = server;
exports.default = _default;
module.exports = exports.default;