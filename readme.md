# strip-shebang

> Strip [shebang](https://en.wikipedia.org/wiki/Shebang_(Unix)) *(Example: `#!/bin/sh`)* from a string

## Install

```
$ npm install strip-shebang
```

## Usage

```js
import fs from 'node:fs';
import stripShebang from 'strip-shebang';

const string = fs.readFileSync('unicorns', 'utf8');
//=> #!/usr/bin/env node
//=> console.log('unicorns');

stripShebang(string);
//=>
//=> console.log('unicorns');
```
