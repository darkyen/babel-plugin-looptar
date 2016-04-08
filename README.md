# babel-plugin-looptar

In the UI thread if you are spending more than a few 100ms you are killing the
user experience. And no matter how much you think you can estimate time, you can't
This tool throws errors if the loop is too long. It defaults to 1000ms at the 
point where user has already lost interest in your website but you can reduce it
to several milliseconds.

Basically this can be injected to find long running loops and break them like
stackoverflows via injecting looptar through babel.

For issues and features about looptar the library itself please make an issue
at https://github.com/darkyen/looptar/ the issue tracker here is for issues
with the babel plugin and not looptar itself. This allows sanity with tests
and over all less bugs.

## Example
This will work with ``for``, ``while``, ``do while`` loops alike.

**In**

```js
// input code
for( let i = 0; i < 9001; i++ ){

}
```

**Out**

```js
"use strict";
const __looptar = require('looptar')();

// output code
for( let i = 0; i < 9001; i++ ){
  __looptar.iterates(0);
}
__looptar.exits(0);
```

## Installation

```sh
$ npm install babel-plugin-looptar
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["looptar"]
}
```

### Via CLI

```sh
$ babel --plugins looptar script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["looptar"]
});
```
