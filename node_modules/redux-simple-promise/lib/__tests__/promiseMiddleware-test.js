'use strict';

var _this = this;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _ = require('../');

var _2 = _interopRequireDefault(_);

var _sinon = require('sinon');

function noop() {}
var GIVE_ME_META = 'GIVE_ME_META';
function metaMiddleware() {
  return function (next) {
    return function (action) {
      return action.type === GIVE_ME_META ? next(_extends({}, action, { meta: 'here you go' })) : next(action);
    };
  };
}

describe('before promiseMiddleware is called', function () {
  it('returns the reject and resolve strings with default values', function () {
    expect(_.resolve('MY_ACTION')).to.equal('MY_ACTION_RESOLVED');
    expect(_.reject('MY_ACTION')).to.equal('MY_ACTION_REJECTED');
  });
});

describe('promiseMiddleware', function () {
  var baseDispatch = undefined;
  var dispatch = undefined;
  var foobar = undefined;
  var err = undefined;

  beforeEach(function () {
    baseDispatch = _sinon.spy();
    dispatch = function d(action) {
      var methods = { dispatch: d, getState: noop };
      return metaMiddleware()(_2['default']()(methods)(baseDispatch))(action);
    };
    foobar = { foo: 'bar' };
    err = new Error();
  });
  it('dispatches first action before promise without arguments', function () {
    dispatch({
      type: 'ACTION_TYPE',
      payload: {
        promise: new Promise(function () {})
      }
    });

    expect(baseDispatch.calledOnce).to.be['true'];

    expect(baseDispatch.firstCall.args[0]).to.deep.equal({
      type: 'ACTION_TYPE'
    });
  });

  it('dispatches first action before promise with arguments', function () {
    dispatch({
      type: 'ACTION_TYPE',
      payload: {
        promise: new Promise(function () {}),
        foo: 'bar'
      }
    });

    expect(baseDispatch.calledOnce).to.be['true'];

    expect(baseDispatch.firstCall.args[0]).to.deep.equal({
      type: 'ACTION_TYPE',
      payload: {
        foo: 'bar'
      }
    });
  });

  it('dispatches resolve action with arguments', function callee$1$0() {
    return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return regeneratorRuntime.awrap(dispatch({
            type: 'ACTION_TYPE_RESOLVE',
            payload: {
              promise: Promise.resolve(foobar),
              foo2: 'bar2'
            }
          }));

        case 2:

          expect(baseDispatch.calledTwice).to.be['true'];

          expect(baseDispatch.secondCall.args[0]).to.deep.equal({
            type: _.resolve('ACTION_TYPE_RESOLVE'),
            payload: foobar,
            meta: {
              foo2: 'bar2'
            }
          });

        case 4:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });

  it('dispatches reject action with arguments', function callee$1$0() {
    return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return regeneratorRuntime.awrap(dispatch({
            type: 'ACTION_TYPE_REJECT',
            payload: {
              promise: Promise.reject(err),
              foo3: 'bar3',
              foo4: 'bar4'
            }
          }));

        case 2:

          expect(baseDispatch.calledTwice).to.be['true'];

          expect(baseDispatch.secondCall.args[0]).to.deep.equal({
            type: _.reject('ACTION_TYPE_REJECT'),
            payload: err,
            meta: {
              foo3: 'bar3',
              foo4: 'bar4'
            }
          });

        case 4:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });

  it('returns the original promise from dispatch', function () {
    var promiseDispatched = new Promise(function () {});

    var dispatchedResult = dispatch({
      type: 'ACTION_TYPE_RESOLVE',
      payload: {
        promise: promiseDispatched,
        foo2: 'bar2'
      }
    });
    // Unable to compare promise directly for some reason, so comparing functions
    expect(dispatchedResult.then).to.be.equal(promiseDispatched.then);
  });

  it('resolves the original promise results from dispatch', function () {
    var promiseDispatched = Promise.resolve(foobar);

    var dispatchedResult = dispatch({
      type: 'ACTION_TYPE_RESOLVE',
      payload: {
        promise: promiseDispatched,
        foo2: 'bar2'
      }
    });
    expect(dispatchedResult).to.eventually.equal(foobar);
  });

  it('reject the original promise from dispatch', function () {
    var promiseDispatched = Promise.reject(err);

    var dispatchedResult = dispatch({
      type: 'ACTION_TYPE_REJECT',
      payload: {
        promise: promiseDispatched,
        foo2: 'bar2'
      }
    });
    expect(dispatchedResult).to.eventually.be.rejectedWith(err);
  });

  it('returns the reject and resolve strings with default values', function () {
    expect(_.resolve('MY_ACTION')).to.equal('MY_ACTION_RESOLVED');
    expect(_.reject('MY_ACTION')).to.equal('MY_ACTION_REJECTED');
  });

  it('ignores non-promises', function callee$1$0() {
    return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          dispatch(foobar);
          expect(baseDispatch.calledOnce).to.be['true'];
          expect(baseDispatch.firstCall.args[0]).to.equal(foobar);

          dispatch({ type: 'ACTION_TYPE', payload: foobar });
          expect(baseDispatch.calledTwice).to.be['true'];
          expect(baseDispatch.secondCall.args[0]).to.deep.equal({
            type: 'ACTION_TYPE',
            payload: foobar
          });

        case 6:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });

  it('starts async dispatches from beginning of middleware chain', function callee$1$0() {
    return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          dispatch({ type: GIVE_ME_META });
          dispatch({ type: GIVE_ME_META });
          expect(baseDispatch.args.map(function (args) {
            return args[0].meta;
          })).to.eql(['here you go', 'here you go']);

        case 3:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
});