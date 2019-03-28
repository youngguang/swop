'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mobx = require('../npm/mobx/lib/mobx.js');

exports.default = (0, _mobx.observable)({
  province: '',
  city: '',
  area: '',
  longitude: '',
  latitude: '',

  setLocation: function setLocation(_ref) {
    var province = _ref.province,
        city = _ref.city,
        area = _ref.area,
        longitude = _ref.longitude,
        latitude = _ref.latitude;

    this.province = province;
    this.city = city;
    this.area = area;
    this.longitude = longitude;
    this.latitude = latitude;
  }
});