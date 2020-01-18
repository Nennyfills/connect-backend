// import socketIo from 'socket.io';
// import { onConnection } from './helpers/socket';
// export default (app) => {
//   const io = socketIo(app);
//   const connectionHandler = onConnection(io);
//   io.on('connection', connectionHandler);
//   return io;
// };
"use strict";

function cov_rvgcqymj8() {
  var path = "C:\\Users\\chinenye.dike\\Documents\\workspace\\connect-backend\\src\\socket.js";
  var hash = "54cae22debb4c1ee367a04889c144c6421b5f069";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\chinenye.dike\\Documents\\workspace\\connect-backend\\src\\socket.js",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "54cae22debb4c1ee367a04889c144c6421b5f069"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_rvgcqymj8 = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_rvgcqymj8();