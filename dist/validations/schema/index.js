// import
"use strict";

function cov_j8am28us3() {
  var path = "C:\\Users\\chinenye.dike\\Documents\\workspace\\connect-backend\\src\\validations\\schema\\index.js";
  var hash = "ac14e47a3bbfc983737eb061e4a0298a9fdd2c14";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\chinenye.dike\\Documents\\workspace\\connect-backend\\src\\validations\\schema\\index.js",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "ac14e47a3bbfc983737eb061e4a0298a9fdd2c14"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_j8am28us3 = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_j8am28us3();