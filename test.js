import test from 'ava';
import stripShebang from './index.js';

test('main', t => {
	t.is(stripShebang('#!/usr/bin/env node\nconsole.log("unicorns");'), '\nconsole.log("unicorns");');
});
