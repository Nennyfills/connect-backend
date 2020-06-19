"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotenv = require("dotenv");

var _mail = _interopRequireDefault(require("@sendgrid/mail"));

function cov_1fqrzs35f2() {
  var path = "C:\\Users\\chinenye.dike\\Documents\\workspace\\connect-backend\\src\\service\\email.js";
  var hash = "d251afb790d85a63bc307a7d75b08f822385aea6";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\chinenye.dike\\Documents\\workspace\\connect-backend\\src\\service\\email.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 0
        },
        end: {
          line: 4,
          column: 9
        }
      },
      "1": {
        start: {
          line: 6,
          column: 0
        },
        end: {
          line: 6,
          column: 47
        }
      },
      "2": {
        start: {
          line: 7,
          column: 18
        },
        end: {
          line: 10,
          column: 1
        }
      },
      "3": {
        start: {
          line: 12,
          column: 17
        },
        end: {
          line: 27,
          column: 1
        }
      },
      "4": {
        start: {
          line: 13,
          column: 26
        },
        end: {
          line: 21,
          column: 3
        }
      },
      "5": {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 22,
          column: 31
        }
      },
      "6": {
        start: {
          line: 23,
          column: 2
        },
        end: {
          line: 26,
          column: 4
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 12,
            column: 17
          },
          end: {
            line: 12,
            column: 18
          }
        },
        loc: {
          start: {
            line: 12,
            column: 48
          },
          end: {
            line: 27,
            column: 1
          }
        },
        line: 12
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
      "6": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "d251afb790d85a63bc307a7d75b08f822385aea6"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_1fqrzs35f2 = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_1fqrzs35f2();
cov_1fqrzs35f2().s[0]++;
(0, _dotenv.config)();
cov_1fqrzs35f2().s[1]++;

_mail.default.setApiKey(process.env.SENDGRID_API_KEY);

const templates = (cov_1fqrzs35f2().s[2]++, {
  resetPassword: process.env.PASSWORD_RESET_TEMPLATE,
  verifyEmail: process.env.EMAIL_VERIFY_TEMPLATE
});
cov_1fqrzs35f2().s[3]++;

const sendGrid = async (user, template, url) => {
  cov_1fqrzs35f2().f[0]++;
  const sendGridMessage = (cov_1fqrzs35f2().s[4]++, {
    to: user.email,
    from: 'inenyedike@gmail.com',
    templateId: templates[template],
    dynamic_template_data: {
      userName: user.userName,
      url
    }
  });
  cov_1fqrzs35f2().s[5]++;

  _mail.default.send(sendGridMessage);

  cov_1fqrzs35f2().s[6]++;
  return {
    status: 'success',
    message: `An email has been sent to ${user.email} with further information`
  };
};

var _default = sendGrid;
exports.default = _default;
module.exports = exports.default;