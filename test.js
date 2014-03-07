'use strict';
var assert = require('assert');
var stripShebang = require('./index');

it('should strip shebang from a string', function () {
	assert.strictEqual(
		stripShebang('#!/usr/bin/env node\nconsole.log("unicorns");'),
		'\nconsole.log("unicorns");'
	);
});
