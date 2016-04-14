import test from 'ava';
import detectScripts from './';

test('it work!', t => {
	const result = detectScripts();
	t.is(result, 42);
});
