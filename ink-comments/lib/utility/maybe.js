const { curry } = require('ramda');

function maybe(truthFx, returnFalse, ifTrueCallBack) {
  return function maybefiedFunc(args) {
    if (truthFx(args)) {
      return ifTrueCallBack(args);
    }
    return returnFalse;
  };
}

module.exports = curry(maybe);
