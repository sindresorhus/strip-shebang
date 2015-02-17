'use strict';
var shebangRegex = require('shebang-regex');

module.exports = function (str) {
	return str.replace(shebangRegex, '');
};
