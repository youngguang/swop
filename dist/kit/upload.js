"use strict";

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _config = require("./config.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var uploadRequest = function uploadRequest(filePath) {
  return new Promise(function (resolve, rejects) {
    _index2.default.uploadFile({
      url: _config.host + "/upload/image",
      filePath: filePath,
      name: 'file',
      header: {
        'content-type': 'multipart/form-data',
        'Authorization': _index2.default.getStorageSync(_config.auth_key)
      }
    }).then(function (res) {
      resolve(res.data);
    });
  });
};

exports.multiUpload = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(filePaths) {
    var actFilePaths, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, filePath, actFilePath;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            actFilePaths = [];

            console.log(filePaths);
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 5;
            _iterator = filePaths[Symbol.iterator]();

          case 7:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context.next = 17;
              break;
            }

            filePath = _step.value;

            console.log(filePath);
            _context.next = 12;
            return uploadRequest(filePath);

          case 12:
            actFilePath = _context.sent;

            actFilePaths = actFilePaths.concat(actFilePath);

          case 14:
            _iteratorNormalCompletion = true;
            _context.next = 7;
            break;

          case 17:
            _context.next = 23;
            break;

          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](5);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 23:
            _context.prev = 23;
            _context.prev = 24;

            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }

          case 26:
            _context.prev = 26;

            if (!_didIteratorError) {
              _context.next = 29;
              break;
            }

            throw _iteratorError;

          case 29:
            return _context.finish(26);

          case 30:
            return _context.finish(23);

          case 31:
            return _context.abrupt("return", actFilePaths);

          case 32:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined, [[5, 19, 23, 31], [24,, 26, 30]]);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.upload = function (filePath) {
  return uploadRequest(filePath);
};