"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _fetch = require("./fetch.js");

var _fetch2 = _interopRequireDefault(_fetch);

var _config = require("./config.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var wxSetting, token, wxLogin, code, _ref2, userInfo;

  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _index2.default.getSetting();

        case 2:
          wxSetting = _context.sent;

          if (!wxSetting || !wxSetting.authSetting['scope.userInfo']) {
            _index2.default.navigateTo({ url: '/pages/user/login/index' });
          }

          token = _index2.default.getStorageSync(_config.auth_key);

          if (token) {
            _context.next = 13;
            break;
          }

          _context.next = 8;
          return _index2.default.login();

        case 8:
          wxLogin = _context.sent;
          _context.next = 11;
          return (0, _fetch2.default)("quickLogin", { code: wxLogin.code });

        case 11:
          code = _context.sent;


          _index2.default.setStorageSync(_config.auth_key, code);

        case 13:
          _context.next = 15;
          return _index2.default.getUserInfo();

        case 15:
          _ref2 = _context.sent;
          userInfo = _ref2.userInfo;
          return _context.abrupt("return", (0, _fetch2.default)('/reportUserInfo', userInfo));

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, undefined);
}));