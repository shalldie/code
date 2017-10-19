'use strict';

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

let result = _lodash2.default.chunk(arr, 3);

console.log(result);