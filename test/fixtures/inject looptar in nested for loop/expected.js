"use strict";

var _looptar2 = require("looptar");

var _looptar3 = _interopRequireDefault(_looptar2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

for (var foo = 0; foo < 5; foo++) {
  _looptar3.default.iterates(0);

  for (var foo2 = 0; foo2 < 6; foo2++) {
    _looptar3.default.iterates(1);
  }

  _looptar3.default.exits(1);
}

_looptar3.default.exits(0);
