"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require("./config.js");

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (url, data) {
  var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'post';
  return new Promise(function (resolve, reject) {
    return wx.request({
      url: _config.host + "/" + url,
      data: data,
      method: method,
      header: {
        'content-type': 'application/json',
        'Authorization': _index2.default.getStorageSync(_config.auth_key)
      },
      success: function success(res) {
        if (res.data.status === 'ok') {
          resolve(res.data.data, res.data.message);
        } else {
          reject(res.data.message);
        }
      },
      fail: function fail(res) {
        reject(res.data.message);
      }
    });
  });
};