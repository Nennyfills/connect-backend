"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _models = _interopRequireDefault(require("../models"));

var _errors = require("../helper/errors");

var _auth = require("../helper/auth");

var _auth2 = require("../service/auth");

var _email = _interopRequireDefault(require("../service/email"));

function cov_1t0o04rxui() {
  var path = "C:\\Users\\chinenye.dike\\Documents\\workspace\\connect-backend\\src\\controller\\auth.js";
  var hash = "67d32f20a1fefd5701fa6830ba41dbc60bd59784";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\chinenye.dike\\Documents\\workspace\\connect-backend\\src\\controller\\auth.js",
    statementMap: {
      "0": {
        start: {
          line: 13,
          column: 18
        },
        end: {
          line: 13,
          column: 26
        }
      },
      "1": {
        start: {
          line: 15,
          column: 13
        },
        end: {
          line: 265,
          column: 1
        }
      },
      "2": {
        start: {
          line: 17,
          column: 25
        },
        end: {
          line: 17,
          column: 33
        }
      },
      "3": {
        start: {
          line: 18,
          column: 20
        },
        end: {
          line: 18,
          column: 28
        }
      },
      "4": {
        start: {
          line: 19,
          column: 33
        },
        end: {
          line: 21,
          column: 8
        }
      },
      "5": {
        start: {
          line: 20,
          column: 16
        },
        end: {
          line: 20,
          column: 55
        }
      },
      "6": {
        start: {
          line: 22,
          column: 35
        },
        end: {
          line: 22,
          column: 64
        }
      },
      "7": {
        start: {
          line: 22,
          column: 59
        },
        end: {
          line: 22,
          column: 63
        }
      },
      "8": {
        start: {
          line: 23,
          column: 23
        },
        end: {
          line: 25,
          column: 19
        }
      },
      "9": {
        start: {
          line: 26,
          column: 17
        },
        end: {
          line: 26,
          column: 78
        }
      },
      "10": {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 28,
          column: 69
        }
      },
      "11": {
        start: {
          line: 28,
          column: 15
        },
        end: {
          line: 28,
          column: 69
        }
      },
      "12": {
        start: {
          line: 29,
          column: 27
        },
        end: {
          line: 29,
          column: 77
        }
      },
      "13": {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 30,
          column: 90
        }
      },
      "14": {
        start: {
          line: 30,
          column: 25
        },
        end: {
          line: 30,
          column: 90
        }
      },
      "15": {
        start: {
          line: 38,
          column: 4
        },
        end: {
          line: 38,
          column: 38
        }
      },
      "16": {
        start: {
          line: 39,
          column: 4
        },
        end: {
          line: 39,
          column: 48
        }
      },
      "17": {
        start: {
          line: 40,
          column: 4
        },
        end: {
          line: 40,
          column: 47
        }
      },
      "18": {
        start: {
          line: 42,
          column: 18
        },
        end: {
          line: 42,
          column: 61
        }
      },
      "19": {
        start: {
          line: 44,
          column: 4
        },
        end: {
          line: 48,
          column: 7
        }
      },
      "20": {
        start: {
          line: 52,
          column: 42
        },
        end: {
          line: 52,
          column: 50
        }
      },
      "21": {
        start: {
          line: 53,
          column: 26
        },
        end: {
          line: 53,
          column: 67
        }
      },
      "22": {
        start: {
          line: 54,
          column: 29
        },
        end: {
          line: 54,
          column: 73
        }
      },
      "23": {
        start: {
          line: 56,
          column: 4
        },
        end: {
          line: 56,
          column: 85
        }
      },
      "24": {
        start: {
          line: 56,
          column: 23
        },
        end: {
          line: 56,
          column: 85
        }
      },
      "25": {
        start: {
          line: 57,
          column: 4
        },
        end: {
          line: 57,
          column: 84
        }
      },
      "26": {
        start: {
          line: 57,
          column: 26
        },
        end: {
          line: 57,
          column: 84
        }
      },
      "27": {
        start: {
          line: 59,
          column: 27
        },
        end: {
          line: 59,
          column: 55
        }
      },
      "28": {
        start: {
          line: 61,
          column: 20
        },
        end: {
          line: 61,
          column: 28
        }
      },
      "29": {
        start: {
          line: 62,
          column: 4
        },
        end: {
          line: 62,
          column: 38
        }
      },
      "30": {
        start: {
          line: 63,
          column: 4
        },
        end: {
          line: 63,
          column: 31
        }
      },
      "31": {
        start: {
          line: 64,
          column: 17
        },
        end: {
          line: 64,
          column: 44
        }
      },
      "32": {
        start: {
          line: 72,
          column: 18
        },
        end: {
          line: 72,
          column: 61
        }
      },
      "33": {
        start: {
          line: 74,
          column: 4
        },
        end: {
          line: 74,
          column: 38
        }
      },
      "34": {
        start: {
          line: 75,
          column: 4
        },
        end: {
          line: 75,
          column: 48
        }
      },
      "35": {
        start: {
          line: 76,
          column: 4
        },
        end: {
          line: 76,
          column: 47
        }
      },
      "36": {
        start: {
          line: 78,
          column: 4
        },
        end: {
          line: 82,
          column: 7
        }
      },
      "37": {
        start: {
          line: 96,
          column: 29
        },
        end: {
          line: 96,
          column: 65
        }
      },
      "38": {
        start: {
          line: 98,
          column: 4
        },
        end: {
          line: 98,
          column: 69
        }
      },
      "39": {
        start: {
          line: 112,
          column: 22
        },
        end: {
          line: 112,
          column: 34
        }
      },
      "40": {
        start: {
          line: 113,
          column: 23
        },
        end: {
          line: 113,
          column: 57
        }
      },
      "41": {
        start: {
          line: 114,
          column: 4
        },
        end: {
          line: 114,
          column: 82
        }
      },
      "42": {
        start: {
          line: 114,
          column: 21
        },
        end: {
          line: 114,
          column: 82
        }
      },
      "43": {
        start: {
          line: 115,
          column: 18
        },
        end: {
          line: 115,
          column: 66
        }
      },
      "44": {
        start: {
          line: 116,
          column: 27
        },
        end: {
          line: 121,
          column: 5
        }
      },
      "45": {
        start: {
          line: 122,
          column: 16
        },
        end: {
          line: 122,
          column: 116
        }
      },
      "46": {
        start: {
          line: 123,
          column: 32
        },
        end: {
          line: 123,
          column: 80
        }
      },
      "47": {
        start: {
          line: 124,
          column: 4
        },
        end: {
          line: 127,
          column: 7
        }
      },
      "48": {
        start: {
          line: 141,
          column: 25
        },
        end: {
          line: 141,
          column: 37
        }
      },
      "49": {
        start: {
          line: 142,
          column: 22
        },
        end: {
          line: 142,
          column: 36
        }
      },
      "50": {
        start: {
          line: 143,
          column: 23
        },
        end: {
          line: 143,
          column: 79
        }
      },
      "51": {
        start: {
          line: 144,
          column: 4
        },
        end: {
          line: 144,
          column: 78
        }
      },
      "52": {
        start: {
          line: 144,
          column: 21
        },
        end: {
          line: 144,
          column: 78
        }
      },
      "53": {
        start: {
          line: 145,
          column: 20
        },
        end: {
          line: 145,
          column: 45
        }
      },
      "54": {
        start: {
          line: 146,
          column: 4
        },
        end: {
          line: 148,
          column: 5
        }
      },
      "55": {
        start: {
          line: 147,
          column: 6
        },
        end: {
          line: 147,
          column: 94
        }
      },
      "56": {
        start: {
          line: 149,
          column: 27
        },
        end: {
          line: 149,
          column: 55
        }
      },
      "57": {
        start: {
          line: 150,
          column: 27
        },
        end: {
          line: 153,
          column: 5
        }
      },
      "58": {
        start: {
          line: 154,
          column: 17
        },
        end: {
          line: 154,
          column: 30
        }
      },
      "59": {
        start: {
          line: 156,
          column: 4
        },
        end: {
          line: 156,
          column: 38
        }
      },
      "60": {
        start: {
          line: 157,
          column: 4
        },
        end: {
          line: 157,
          column: 48
        }
      },
      "61": {
        start: {
          line: 159,
          column: 4
        },
        end: {
          line: 163,
          column: 7
        }
      },
      "62": {
        start: {
          line: 177,
          column: 53
        },
        end: {
          line: 177,
          column: 65
        }
      },
      "63": {
        start: {
          line: 178,
          column: 24
        },
        end: {
          line: 178,
          column: 47
        }
      },
      "64": {
        start: {
          line: 180,
          column: 4
        },
        end: {
          line: 185,
          column: 5
        }
      },
      "65": {
        start: {
          line: 181,
          column: 6
        },
        end: {
          line: 184,
          column: 8
        }
      },
      "66": {
        start: {
          line: 187,
          column: 4
        },
        end: {
          line: 192,
          column: 5
        }
      },
      "67": {
        start: {
          line: 188,
          column: 6
        },
        end: {
          line: 191,
          column: 8
        }
      },
      "68": {
        start: {
          line: 194,
          column: 27
        },
        end: {
          line: 197,
          column: 5
        }
      },
      "69": {
        start: {
          line: 199,
          column: 4
        },
        end: {
          line: 199,
          column: 82
        }
      },
      "70": {
        start: {
          line: 199,
          column: 25
        },
        end: {
          line: 199,
          column: 82
        }
      },
      "71": {
        start: {
          line: 201,
          column: 27
        },
        end: {
          line: 201,
          column: 55
        }
      },
      "72": {
        start: {
          line: 203,
          column: 27
        },
        end: {
          line: 206,
          column: 5
        }
      },
      "73": {
        start: {
          line: 207,
          column: 17
        },
        end: {
          line: 207,
          column: 30
        }
      },
      "74": {
        start: {
          line: 208,
          column: 4
        },
        end: {
          line: 208,
          column: 38
        }
      },
      "75": {
        start: {
          line: 209,
          column: 4
        },
        end: {
          line: 209,
          column: 47
        }
      },
      "76": {
        start: {
          line: 210,
          column: 4
        },
        end: {
          line: 210,
          column: 47
        }
      },
      "77": {
        start: {
          line: 211,
          column: 4
        },
        end: {
          line: 215,
          column: 7
        }
      },
      "78": {
        start: {
          line: 229,
          column: 22
        },
        end: {
          line: 229,
          column: 36
        }
      },
      "79": {
        start: {
          line: 230,
          column: 23
        },
        end: {
          line: 230,
          column: 78
        }
      },
      "80": {
        start: {
          line: 231,
          column: 4
        },
        end: {
          line: 231,
          column: 82
        }
      },
      "81": {
        start: {
          line: 231,
          column: 21
        },
        end: {
          line: 231,
          column: 82
        }
      },
      "82": {
        start: {
          line: 232,
          column: 24
        },
        end: {
          line: 232,
          column: 49
        }
      },
      "83": {
        start: {
          line: 233,
          column: 4
        },
        end: {
          line: 235,
          column: 5
        }
      },
      "84": {
        start: {
          line: 234,
          column: 6
        },
        end: {
          line: 234,
          column: 98
        }
      },
      "85": {
        start: {
          line: 236,
          column: 4
        },
        end: {
          line: 239,
          column: 6
        }
      },
      "86": {
        start: {
          line: 240,
          column: 4
        },
        end: {
          line: 243,
          column: 7
        }
      },
      "87": {
        start: {
          line: 246,
          column: 22
        },
        end: {
          line: 246,
          column: 34
        }
      },
      "88": {
        start: {
          line: 247,
          column: 23
        },
        end: {
          line: 247,
          column: 57
        }
      },
      "89": {
        start: {
          line: 249,
          column: 4
        },
        end: {
          line: 249,
          column: 82
        }
      },
      "90": {
        start: {
          line: 249,
          column: 21
        },
        end: {
          line: 249,
          column: 82
        }
      },
      "91": {
        start: {
          line: 250,
          column: 18
        },
        end: {
          line: 250,
          column: 66
        }
      },
      "92": {
        start: {
          line: 251,
          column: 27
        },
        end: {
          line: 256,
          column: 5
        }
      },
      "93": {
        start: {
          line: 257,
          column: 16
        },
        end: {
          line: 257,
          column: 108
        }
      },
      "94": {
        start: {
          line: 258,
          column: 32
        },
        end: {
          line: 258,
          column: 78
        }
      },
      "95": {
        start: {
          line: 259,
          column: 4
        },
        end: {
          line: 262,
          column: 7
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 16,
            column: 9
          },
          end: {
            line: 16,
            column: 10
          }
        },
        loc: {
          start: {
            line: 16,
            column: 29
          },
          end: {
            line: 49,
            column: 3
          }
        },
        line: 16
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 20,
            column: 6
          },
          end: {
            line: 20,
            column: 7
          }
        },
        loc: {
          start: {
            line: 20,
            column: 16
          },
          end: {
            line: 20,
            column: 55
          }
        },
        line: 20
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 22,
            column: 49
          },
          end: {
            line: 22,
            column: 50
          }
        },
        loc: {
          start: {
            line: 22,
            column: 59
          },
          end: {
            line: 22,
            column: 63
          }
        },
        line: 22
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 51,
            column: 10
          },
          end: {
            line: 51,
            column: 11
          }
        },
        loc: {
          start: {
            line: 51,
            column: 30
          },
          end: {
            line: 83,
            column: 3
          }
        },
        line: 51
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 95,
            column: 15
          },
          end: {
            line: 95,
            column: 16
          }
        },
        loc: {
          start: {
            line: 95,
            column: 44
          },
          end: {
            line: 99,
            column: 3
          }
        },
        line: 95
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 111,
            column: 25
          },
          end: {
            line: 111,
            column: 26
          }
        },
        loc: {
          start: {
            line: 111,
            column: 54
          },
          end: {
            line: 128,
            column: 3
          }
        },
        line: 111
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 140,
            column: 25
          },
          end: {
            line: 140,
            column: 26
          }
        },
        loc: {
          start: {
            line: 140,
            column: 54
          },
          end: {
            line: 164,
            column: 3
          }
        },
        line: 140
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 176,
            column: 17
          },
          end: {
            line: 176,
            column: 18
          }
        },
        loc: {
          start: {
            line: 176,
            column: 46
          },
          end: {
            line: 216,
            column: 3
          }
        },
        line: 176
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 228,
            column: 20
          },
          end: {
            line: 228,
            column: 21
          }
        },
        loc: {
          start: {
            line: 228,
            column: 49
          },
          end: {
            line: 244,
            column: 3
          }
        },
        line: 228
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 245,
            column: 24
          },
          end: {
            line: 245,
            column: 25
          }
        },
        loc: {
          start: {
            line: 245,
            column: 53
          },
          end: {
            line: 263,
            column: 3
          }
        },
        line: 245
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 20,
            column: 16
          },
          end: {
            line: 20,
            column: 55
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 20,
            column: 16
          },
          end: {
            line: 20,
            column: 32
          }
        }, {
          start: {
            line: 20,
            column: 36
          },
          end: {
            line: 20,
            column: 55
          }
        }],
        line: 20
      },
      "1": {
        loc: {
          start: {
            line: 28,
            column: 4
          },
          end: {
            line: 28,
            column: 69
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 28,
            column: 4
          },
          end: {
            line: 28,
            column: 69
          }
        }, {
          start: {
            line: 28,
            column: 4
          },
          end: {
            line: 28,
            column: 69
          }
        }],
        line: 28
      },
      "2": {
        loc: {
          start: {
            line: 30,
            column: 4
          },
          end: {
            line: 30,
            column: 90
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 30,
            column: 4
          },
          end: {
            line: 30,
            column: 90
          }
        }, {
          start: {
            line: 30,
            column: 4
          },
          end: {
            line: 30,
            column: 90
          }
        }],
        line: 30
      },
      "3": {
        loc: {
          start: {
            line: 56,
            column: 4
          },
          end: {
            line: 56,
            column: 85
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 56,
            column: 4
          },
          end: {
            line: 56,
            column: 85
          }
        }, {
          start: {
            line: 56,
            column: 4
          },
          end: {
            line: 56,
            column: 85
          }
        }],
        line: 56
      },
      "4": {
        loc: {
          start: {
            line: 57,
            column: 4
          },
          end: {
            line: 57,
            column: 84
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 57,
            column: 4
          },
          end: {
            line: 57,
            column: 84
          }
        }, {
          start: {
            line: 57,
            column: 4
          },
          end: {
            line: 57,
            column: 84
          }
        }],
        line: 57
      },
      "5": {
        loc: {
          start: {
            line: 114,
            column: 4
          },
          end: {
            line: 114,
            column: 82
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 114,
            column: 4
          },
          end: {
            line: 114,
            column: 82
          }
        }, {
          start: {
            line: 114,
            column: 4
          },
          end: {
            line: 114,
            column: 82
          }
        }],
        line: 114
      },
      "6": {
        loc: {
          start: {
            line: 144,
            column: 4
          },
          end: {
            line: 144,
            column: 78
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 144,
            column: 4
          },
          end: {
            line: 144,
            column: 78
          }
        }, {
          start: {
            line: 144,
            column: 4
          },
          end: {
            line: 144,
            column: 78
          }
        }],
        line: 144
      },
      "7": {
        loc: {
          start: {
            line: 146,
            column: 4
          },
          end: {
            line: 148,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 146,
            column: 4
          },
          end: {
            line: 148,
            column: 5
          }
        }, {
          start: {
            line: 146,
            column: 4
          },
          end: {
            line: 148,
            column: 5
          }
        }],
        line: 146
      },
      "8": {
        loc: {
          start: {
            line: 180,
            column: 4
          },
          end: {
            line: 185,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 180,
            column: 4
          },
          end: {
            line: 185,
            column: 5
          }
        }, {
          start: {
            line: 180,
            column: 4
          },
          end: {
            line: 185,
            column: 5
          }
        }],
        line: 180
      },
      "9": {
        loc: {
          start: {
            line: 187,
            column: 4
          },
          end: {
            line: 192,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 187,
            column: 4
          },
          end: {
            line: 192,
            column: 5
          }
        }, {
          start: {
            line: 187,
            column: 4
          },
          end: {
            line: 192,
            column: 5
          }
        }],
        line: 187
      },
      "10": {
        loc: {
          start: {
            line: 187,
            column: 8
          },
          end: {
            line: 187,
            column: 52
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 187,
            column: 8
          },
          end: {
            line: 187,
            column: 28
          }
        }, {
          start: {
            line: 187,
            column: 32
          },
          end: {
            line: 187,
            column: 52
          }
        }],
        line: 187
      },
      "11": {
        loc: {
          start: {
            line: 199,
            column: 4
          },
          end: {
            line: 199,
            column: 82
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 199,
            column: 4
          },
          end: {
            line: 199,
            column: 82
          }
        }, {
          start: {
            line: 199,
            column: 4
          },
          end: {
            line: 199,
            column: 82
          }
        }],
        line: 199
      },
      "12": {
        loc: {
          start: {
            line: 231,
            column: 4
          },
          end: {
            line: 231,
            column: 82
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 231,
            column: 4
          },
          end: {
            line: 231,
            column: 82
          }
        }, {
          start: {
            line: 231,
            column: 4
          },
          end: {
            line: 231,
            column: 82
          }
        }],
        line: 231
      },
      "13": {
        loc: {
          start: {
            line: 233,
            column: 4
          },
          end: {
            line: 235,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 233,
            column: 4
          },
          end: {
            line: 235,
            column: 5
          }
        }, {
          start: {
            line: 233,
            column: 4
          },
          end: {
            line: 235,
            column: 5
          }
        }],
        line: 233
      },
      "14": {
        loc: {
          start: {
            line: 249,
            column: 4
          },
          end: {
            line: 249,
            column: 82
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 249,
            column: 4
          },
          end: {
            line: 249,
            column: 82
          }
        }, {
          start: {
            line: 249,
            column: 4
          },
          end: {
            line: 249,
            column: 82
          }
        }],
        line: 249
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
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0,
      "37": 0,
      "38": 0,
      "39": 0,
      "40": 0,
      "41": 0,
      "42": 0,
      "43": 0,
      "44": 0,
      "45": 0,
      "46": 0,
      "47": 0,
      "48": 0,
      "49": 0,
      "50": 0,
      "51": 0,
      "52": 0,
      "53": 0,
      "54": 0,
      "55": 0,
      "56": 0,
      "57": 0,
      "58": 0,
      "59": 0,
      "60": 0,
      "61": 0,
      "62": 0,
      "63": 0,
      "64": 0,
      "65": 0,
      "66": 0,
      "67": 0,
      "68": 0,
      "69": 0,
      "70": 0,
      "71": 0,
      "72": 0,
      "73": 0,
      "74": 0,
      "75": 0,
      "76": 0,
      "77": 0,
      "78": 0,
      "79": 0,
      "80": 0,
      "81": 0,
      "82": 0,
      "83": 0,
      "84": 0,
      "85": 0,
      "86": 0,
      "87": 0,
      "88": 0,
      "89": 0,
      "90": 0,
      "91": 0,
      "92": 0,
      "93": 0,
      "94": 0,
      "95": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0, 0],
      "11": [0, 0],
      "12": [0, 0],
      "13": [0, 0],
      "14": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "67d32f20a1fefd5701fa6830ba41dbc60bd59784"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_1t0o04rxui = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_1t0o04rxui();
const {
  Users
} = (cov_1t0o04rxui().s[0]++, _models.default);
const auth = (cov_1t0o04rxui().s[1]++, {
  login: async (req, res) => {
    var _user$dataValues, _user$dataValues2, _user$dataValues3;

    cov_1t0o04rxui().f[0]++;
    const {
      password
    } = (cov_1t0o04rxui().s[2]++, req.body);
    const payload = (cov_1t0o04rxui().s[3]++, req.body);
    const isEmailOrUserNameKey = (cov_1t0o04rxui().s[4]++, Object.keys(req.body).filter(data => {
      cov_1t0o04rxui().f[1]++;
      cov_1t0o04rxui().s[5]++;
      return (cov_1t0o04rxui().b[0][0]++, data === 'email') || (cov_1t0o04rxui().b[0][1]++, data === 'userName');
    })[0]);
    const isEmailOrUserNameValue = (cov_1t0o04rxui().s[6]++, [payload].map(data => {
      cov_1t0o04rxui().f[2]++;
      cov_1t0o04rxui().s[7]++;
      return data;
    }));
    const userDetail = (cov_1t0o04rxui().s[8]++, isEmailOrUserNameValue[0][isEmailOrUserNameKey].toLowerCase());
    const user = (cov_1t0o04rxui().s[9]++, await Users.getExistingUser(userDetail, isEmailOrUserNameKey));
    cov_1t0o04rxui().s[10]++;

    if (!user) {
      cov_1t0o04rxui().b[1][0]++;
      cov_1t0o04rxui().s[11]++;
      throw new _errors.NotFoundError('You are not yet registered');
    } else {
      cov_1t0o04rxui().b[1][1]++;
    }

    const isRealPassword = (cov_1t0o04rxui().s[12]++, await (0, _auth.compareHashPassword)(password, user.password));
    cov_1t0o04rxui().s[13]++;

    if (!isRealPassword) {
      cov_1t0o04rxui().b[2][0]++;
      cov_1t0o04rxui().s[14]++;
      throw new _errors.ApplicationError(400, 'Invalid user name or password');
    } else {
      cov_1t0o04rxui().b[2][1]++;
    } // if (!user.isVerified) {
    //   throw new ApplicationError(
    //     401,
    //     'Your account is not verify your account'
    //   );
    // }


    cov_1t0o04rxui().s[15]++;
    user === null || user === void 0 ? true : (_user$dataValues = user.dataValues) === null || _user$dataValues === void 0 ? true : delete _user$dataValues.password;
    cov_1t0o04rxui().s[16]++;
    user === null || user === void 0 ? true : (_user$dataValues2 = user.dataValues) === null || _user$dataValues2 === void 0 ? true : delete _user$dataValues2.resetPasswordToken;
    cov_1t0o04rxui().s[17]++;
    user === null || user === void 0 ? true : (_user$dataValues3 = user.dataValues) === null || _user$dataValues3 === void 0 ? true : delete _user$dataValues3.verificationToken;
    const token = (cov_1t0o04rxui().s[18]++, await (0, _auth.generateToken)({
      id: user.id
    }, '12h'));
    cov_1t0o04rxui().s[19]++;
    return res.status(200).json({
      status: 'success',
      data: {
        user,
        token
      },
      message: 'User signed in successfully'
    });
  },
  signup: async (req, res) => {
    var _user$dataValues4, _user$dataValues5, _user$dataValues6;

    cov_1t0o04rxui().f[3]++;
    const {
      email,
      userName,
      password
    } = (cov_1t0o04rxui().s[20]++, req.body);
    const existingEmail = (cov_1t0o04rxui().s[21]++, await Users.findOne({
      where: {
        email
      }
    }));
    const existingUserName = (cov_1t0o04rxui().s[22]++, await Users.findOne({
      where: {
        userName
      }
    }));
    cov_1t0o04rxui().s[23]++;

    if (existingEmail) {
      cov_1t0o04rxui().b[3][0]++;
      cov_1t0o04rxui().s[24]++;
      throw new _errors.ApplicationError(409, 'You are already registered');
    } else {
      cov_1t0o04rxui().b[3][1]++;
    }

    cov_1t0o04rxui().s[25]++;

    if (existingUserName) {
      cov_1t0o04rxui().b[4][0]++;
      cov_1t0o04rxui().s[26]++;
      throw new _errors.ApplicationError(409, 'UserName already taken');
    } else {
      cov_1t0o04rxui().b[4][1]++;
    }

    const hashedPassword = (cov_1t0o04rxui().s[27]++, await (0, _auth.hashPassword)(password));
    const payload = (cov_1t0o04rxui().s[28]++, req.body);
    cov_1t0o04rxui().s[29]++;
    payload.password = hashedPassword;
    cov_1t0o04rxui().s[30]++;
    payload.isVerified = false;
    const user = (cov_1t0o04rxui().s[31]++, await Users.create(payload)); // if (!user.isVerified) {
    //   throw new ApplicationError(
    //     401,
    //     'Your account is not verify your account'
    //   );
    // }

    const token = (cov_1t0o04rxui().s[32]++, await (0, _auth.generateToken)({
      id: user.id
    }, '12h'));
    cov_1t0o04rxui().s[33]++;
    user === null || user === void 0 ? true : (_user$dataValues4 = user.dataValues) === null || _user$dataValues4 === void 0 ? true : delete _user$dataValues4.password;
    cov_1t0o04rxui().s[34]++;
    user === null || user === void 0 ? true : (_user$dataValues5 = user.dataValues) === null || _user$dataValues5 === void 0 ? true : delete _user$dataValues5.resetPasswordToken;
    cov_1t0o04rxui().s[35]++;
    user === null || user === void 0 ? true : (_user$dataValues6 = user.dataValues) === null || _user$dataValues6 === void 0 ? true : delete _user$dataValues6.verificationToken;
    cov_1t0o04rxui().s[36]++;
    return res.status(200).json({
      status: 'success',
      data: {
        user,
        token
      },
      message: 'User signed in successfully'
    });
  },

  /**
   * Handles user sign in using their social credentials
   *
   * @function
   *
   * @param {Object} request object
   * @param {Object} response - express response object
   *
   * @returns {Object} response object
   */
  socialLogin: async (request, response) => {
    cov_1t0o04rxui().f[4]++;
    const {
      status,
      data
    } = (cov_1t0o04rxui().s[37]++, await (0, _auth2.createOrFindUser)(request.user));
    cov_1t0o04rxui().s[38]++;
    return response.status(status).json({
      status: 'success',
      data
    });
  },

  /**
   * Handles reset password using link
   *
   * @function
   *
   * @param {Object} request object
   * @param {Object} response - express response object
   *
   * @returns {Object} response object
   */
  sendPasswordResetLink: async (request, response) => {
    cov_1t0o04rxui().f[5]++;
    const {
      email
    } = (cov_1t0o04rxui().s[39]++, request.body);
    const dataValues = (cov_1t0o04rxui().s[40]++, await Users.getExistingUser(email));
    cov_1t0o04rxui().s[41]++;

    if (!dataValues) {
      cov_1t0o04rxui().b[5][0]++;
      cov_1t0o04rxui().s[42]++;
      throw new _errors.ApplicationError(404, 'This email dose not exist');
    } else {
      cov_1t0o04rxui().b[5][1]++;
    }

    const token = (cov_1t0o04rxui().s[43]++, await (0, _auth.generateToken)({
      id: dataValues.id
    }, '1h'));
    const [, rowsUpdate] = (cov_1t0o04rxui().s[44]++, await Users.update({
      resetPasswordToken: token
    }, {
      where: {
        email
      },
      returning: true
    }));
    const url = (cov_1t0o04rxui().s[45]++, `http://${request.headers.host}/api/v1/auth/reset/password/link/${rowsUpdate[0].resetPasswordToken}`);
    const {
      status,
      message
    } = (cov_1t0o04rxui().s[46]++, await (0, _email.default)(dataValues, 'resetPassword', url));
    cov_1t0o04rxui().s[47]++;
    return response.status(200).json({
      status,
      message
    });
  },

  /**
   * Handles reset password using link
   *
   * @function
   *
   * @param {Object} request object
   * @param {Object} response - express response object
   *
   * @returns {Object} response object
   */
  resetPasswordWithLink: async (request, response) => {
    var _user$dataValues7, _user$dataValues8;

    cov_1t0o04rxui().f[6]++;
    const {
      password
    } = (cov_1t0o04rxui().s[48]++, request.body);
    const {
      token
    } = (cov_1t0o04rxui().s[49]++, request.params);
    const dataValues = (cov_1t0o04rxui().s[50]++, await Users.getExistingUser(token, 'resetPasswordToken'));
    cov_1t0o04rxui().s[51]++;

    if (!dataValues) {
      cov_1t0o04rxui().b[6][0]++;
      cov_1t0o04rxui().s[52]++;
      throw new _errors.ApplicationError(400, 'Invalid password link');
    } else {
      cov_1t0o04rxui().b[6][1]++;
    }

    const {
      exp
    } = (cov_1t0o04rxui().s[53]++, await (0, _auth.getJWTpaylod)(token));
    cov_1t0o04rxui().s[54]++;

    if (Date.now() >= exp * 1000) {
      cov_1t0o04rxui().b[7][0]++;
      cov_1t0o04rxui().s[55]++;
      throw new _errors.ApplicationError(498, 'Password Link Expired, please request for a new link');
    } else {
      cov_1t0o04rxui().b[7][1]++;
    }

    const hashedPassword = (cov_1t0o04rxui().s[56]++, await (0, _auth.hashPassword)(password));
    const [, rowsUpdate] = (cov_1t0o04rxui().s[57]++, await Users.update({
      password: hashedPassword
    }, {
      where: {
        id: dataValues.id
      },
      returning: true
    }));
    const user = (cov_1t0o04rxui().s[58]++, rowsUpdate[0]);
    cov_1t0o04rxui().s[59]++;
    user === null || user === void 0 ? true : (_user$dataValues7 = user.dataValues) === null || _user$dataValues7 === void 0 ? true : delete _user$dataValues7.password;
    cov_1t0o04rxui().s[60]++;
    user === null || user === void 0 ? true : (_user$dataValues8 = user.dataValues) === null || _user$dataValues8 === void 0 ? true : delete _user$dataValues8.resetPasswordToken;
    cov_1t0o04rxui().s[61]++;
    return response.status(200).json({
      status: 'success',
      data: user,
      message: 'Password changed successfully'
    });
  },

  /**
   * Handles reset password
   *
   * @function
   *
   * @param {Object} request object
   * @param {Object} response - express response object
   *
   * @returns {Object} response object
   */
  resetPassword: async (request, response) => {
    var _user$dataValues9, _user$dataValues10, _user$dataValues11;

    cov_1t0o04rxui().f[7]++;
    const {
      userName,
      password,
      existingPassword
    } = (cov_1t0o04rxui().s[62]++, request.body);
    const currentUser = (cov_1t0o04rxui().s[63]++, request.user.dataValues);
    cov_1t0o04rxui().s[64]++;

    if (currentUser.userName !== userName) {
      cov_1t0o04rxui().b[8][0]++;
      cov_1t0o04rxui().s[65]++;
      throw new _errors.ApplicationError(401, 'You are not authorized to make any changes');
    } else {
      cov_1t0o04rxui().b[8][1]++;
    }

    cov_1t0o04rxui().s[66]++;

    if ((cov_1t0o04rxui().b[10][0]++, currentUser.googleId) || (cov_1t0o04rxui().b[10][1]++, currentUser.githubId)) {
      cov_1t0o04rxui().b[9][0]++;
      cov_1t0o04rxui().s[67]++;
      throw new _errors.ApplicationError(400, 'Please login with your google or github account');
    } else {
      cov_1t0o04rxui().b[9][1]++;
    }

    const isRealPassword = (cov_1t0o04rxui().s[68]++, await (0, _auth.compareHashPassword)(existingPassword, currentUser.password));
    cov_1t0o04rxui().s[69]++;

    if (!isRealPassword) {
      cov_1t0o04rxui().b[11][0]++;
      cov_1t0o04rxui().s[70]++;
      throw new _errors.ApplicationError(400, 'Password is incorrect');
    } else {
      cov_1t0o04rxui().b[11][1]++;
    }

    const hashedPassword = (cov_1t0o04rxui().s[71]++, await (0, _auth.hashPassword)(password));
    const [, rowsUpdate] = (cov_1t0o04rxui().s[72]++, await Users.update({
      password: hashedPassword
    }, {
      where: {
        id: currentUser.id
      },
      returning: true
    }));
    const user = (cov_1t0o04rxui().s[73]++, rowsUpdate[0]);
    cov_1t0o04rxui().s[74]++;
    user === null || user === void 0 ? true : (_user$dataValues9 = user.dataValues) === null || _user$dataValues9 === void 0 ? true : delete _user$dataValues9.password;
    cov_1t0o04rxui().s[75]++;
    user === null || user === void 0 ? true : (_user$dataValues10 = user.dataValues) === null || _user$dataValues10 === void 0 ? true : delete _user$dataValues10.verificationToken;
    cov_1t0o04rxui().s[76]++;
    user === null || user === void 0 ? true : (_user$dataValues11 = user.dataValues) === null || _user$dataValues11 === void 0 ? true : delete _user$dataValues11.verificationToken;
    cov_1t0o04rxui().s[77]++;
    return response.status(200).json({
      status: 'success',
      data: user,
      message: 'Password changed successfully'
    });
  },

  /**
   * Handles reset password using link
   *
   * @function
   *
   * @param {Object} request object
   * @param {Object} response - express response object
   *
   * @returns {Object} response object
   */
  verificationLink: async (request, response) => {
    cov_1t0o04rxui().f[8]++;
    const {
      token
    } = (cov_1t0o04rxui().s[78]++, request.params);
    const dataValues = (cov_1t0o04rxui().s[79]++, await Users.getExistingUser(token, 'verificationToken'));
    cov_1t0o04rxui().s[80]++;

    if (!dataValues) {
      cov_1t0o04rxui().b[12][0]++;
      cov_1t0o04rxui().s[81]++;
      throw new _errors.ApplicationError(400, 'Invalid verification link');
    } else {
      cov_1t0o04rxui().b[12][1]++;
    }

    const {
      exp,
      id
    } = (cov_1t0o04rxui().s[82]++, await (0, _auth.getJWTpaylod)(token));
    cov_1t0o04rxui().s[83]++;

    if (Date.now() >= exp * 1000) {
      cov_1t0o04rxui().b[13][0]++;
      cov_1t0o04rxui().s[84]++;
      throw new _errors.ApplicationError(498, 'Verification Link Expired, please request for a new link');
    } else {
      cov_1t0o04rxui().b[13][1]++;
    }

    cov_1t0o04rxui().s[85]++;
    await Users.update({
      isVerified: true
    }, {
      where: {
        id
      },
      returning: true
    });
    cov_1t0o04rxui().s[86]++;
    return response.status(200).json({
      status: 'success',
      message: 'Email verified successfully'
    });
  },
  sendVerificationLink: async (request, response) => {
    cov_1t0o04rxui().f[9]++;
    const {
      email
    } = (cov_1t0o04rxui().s[87]++, request.body);
    const dataValues = (cov_1t0o04rxui().s[88]++, await Users.getExistingUser(email));
    cov_1t0o04rxui().s[89]++;

    if (!dataValues) {
      cov_1t0o04rxui().b[14][0]++;
      cov_1t0o04rxui().s[90]++;
      throw new _errors.ApplicationError(404, 'This email dose not exist');
    } else {
      cov_1t0o04rxui().b[14][1]++;
    }

    const token = (cov_1t0o04rxui().s[91]++, await (0, _auth.generateToken)({
      id: dataValues.id
    }, '1h'));
    const [, rowsUpdate] = (cov_1t0o04rxui().s[92]++, await Users.update({
      verificationToken: token
    }, {
      where: {
        email
      },
      returning: true
    }));
    const url = (cov_1t0o04rxui().s[93]++, `http://${request.headers.host}/api/v1/auth/verify/email/${rowsUpdate[0].verificationToken}`);
    const {
      status,
      message
    } = (cov_1t0o04rxui().s[94]++, await (0, _email.default)(dataValues, 'verifyEmail', url));
    cov_1t0o04rxui().s[95]++;
    return response.status(200).json({
      status,
      message
    });
  }
});
var _default = auth;
exports.default = _default;
module.exports = exports.default;