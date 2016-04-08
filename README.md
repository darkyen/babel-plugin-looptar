# babel-plugin-looptar

Breaks infinite loops in ui therads in dev environment, this is really helpful
if you are building user interfaces, will save your butt a lot :P

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
