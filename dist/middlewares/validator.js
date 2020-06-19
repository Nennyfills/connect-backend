"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _errors = require("../helper/errors");

function cov_21wpkfbd1g() {
  var path = "C:\\Users\\chinenye.dike\\Documents\\workspace\\connect-backend\\src\\middlewares\\validator.js";
  var hash = "6ceb49df0de339e956c8415d4cc4deaa28d089e8";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\chinenye.dike\\Documents\\workspace\\connect-backend\\src\\middlewares\\validator.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 18
        },
        end: {
          line: 15,
          column: 1
        }
      },
      "1": {
        start: {
          line: 4,
          column: 30
        },
        end: {
          line: 15,
          column: 1
        }
      },
      "2": {
        start: {
          line: 5,
          column: 26
        },
        end: {
          line: 5,
          column: 51
        }
      },
      "3": {
        start: {
          line: 6,
          column: 27
        },
        end: {
          line: 6,
          column: 42
        }
      },
      "4": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 8,
          column: 19
        }
      },
      "5": {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 12,
          column: 3
        }
      },
      "6": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 11,
          column: 51
        }
      },
      "7": {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 14,
          column: 9
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 4,
            column: 18
          },
          end: {
            line: 4,
            column: 19
          }
        },
        loc: {
          start: {
            line: 4,
            column: 30
          },
          end: {
            line: 15,
            column: 1
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 4,
            column: 30
          },
          end: {
            line: 4,
            column: 31
          }
        },
        loc: {
          start: {
            line: 4,
            column: 50
          },
          end: {
            line: 15,
            column: 1
          }
        },
        line: 4
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 12,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 12,
            column: 3
          }
        }, {
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 12,
            column: 3
          }
        }],
        line: 10
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "6ceb49df0de339e956c8415d4cc4deaa28d089e8"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_21wpkfbd1g = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_21wpkfbd1g();
cov_21wpkfbd1g().s[0]++;

const validator = schema => {
  cov_21wpkfbd1g().f[0]++;
  cov_21wpkfbd1g().s[1]++;
  return (req, res, next) => {
    cov_21wpkfbd1g().f[1]++;
    const validatorSchema = (cov_21wpkfbd1g().s[2]++, schema.validate(req.body));
    const {
      value,
      error
    } = (cov_21wpkfbd1g().s[3]++, validatorSchema);
    cov_21wpkfbd1g().s[4]++;
    req.body = value;
    cov_21wpkfbd1g().s[5]++;

    if (error) {
      cov_21wpkfbd1g().b[0][0]++;
      cov_21wpkfbd1g().s[6]++;
      throw new _errors.ApplicationError(400, error.message);
    } else {
      cov_21wpkfbd1g().b[0][1]++;
    }

    cov_21wpkfbd1g().s[7]++;
    next();
  };
};

var _default = validator;
exports.default = _default;
module.exports = exports.default;