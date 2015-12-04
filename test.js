import test from 'ava';
import fn from './';

test(t => {
	t.is(fn('#!/usr/bin/env node\nconsole.log("unicorns");'), '\nconsole.log("unicorns");');
});
