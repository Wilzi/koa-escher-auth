'use strict';

var Interceptor = require('./request-interceptor');

module.exports = function(escherConfig) {
  return function* (next) {
    var interceptor = new Interceptor(escherConfig, this);

    this.authenticateEscher = interceptor.intercept();

    if (next) {
      yield next;
    }
  };
};
