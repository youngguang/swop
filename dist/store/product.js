"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3;

var _mobx = require("../npm/mobx/lib/mobx.js");

var _index = require("../kit/index.js");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var Product = (_class = function () {
  function Product() {
    _classCallCheck(this, Product);

    _initDefineProp(this, "list", _descriptor, this);

    _initDefineProp(this, "q", _descriptor2, this);

    this.longitude = '';
    this.latitude = '';

    _initDefineProp(this, "pageNo", _descriptor3, this);
  }

  _createClass(Product, [{
    key: "setLocation",
    value: function setLocation(longitude, latitude) {
      self.longitude = longitude;
      self.latitude = latitude;
    }
  }, {
    key: "queryProduct",
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var queryParam = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var data, res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                data = {
                  q: self.q = queryParam.q || self.q,
                  longitude: self.longitude = queryParam.longitude || self.longitude,
                  latitude: self.latitude = queryParam.latitude || self.latitude,
                  pageNo: self.pageNo = queryParam.pageNo || self.pageNo
                };
                _context.next = 3;
                return (0, _index.fetch)('/product/list', data);

              case 3:
                res = _context.sent;

                self.list = self.list.concat(res.data);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function queryProduct() {
        return _ref.apply(this, arguments);
      }

      return queryProduct;
    }()
  }]);

  return Product;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "list", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "q", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "pageNo", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _applyDecoratedDescriptor(_class.prototype, "queryProduct", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "queryProduct"), _class.prototype)), _class);


var self = new Product();
exports.default = self;