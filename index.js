import shebangRegex from 'shebang-regex';

export default function stripShebang(string) {
	return string.replace(shebangRegex, '');
}
