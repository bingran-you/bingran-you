/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 515:
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(645);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".poll_body .message{position:static !important;background:none !important;box-shadow:none !important;opacity:1 !important;text-align:left !important;color:#cc2c06 !important;font-size:11px !important;white-space:normal !important;padding:0 !important}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 645:
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ 810:
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 * [js-sha1]{@link https://github.com/emn178/js-sha1}
 *
 * @version 0.6.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
/*jslint bitwise: true */
(function() {
  'use strict';

  var root = typeof window === 'object' ? window : {};
  var NODE_JS = !root.JS_SHA1_NO_NODE_JS && typeof process === 'object' && process.versions && process.versions.node;
  if (NODE_JS) {
    root = __webpack_require__.g;
  }
  var COMMON_JS = !root.JS_SHA1_NO_COMMON_JS && "object" === 'object' && module.exports;
  var AMD =  true && __webpack_require__.amdO;
  var HEX_CHARS = '0123456789abcdef'.split('');
  var EXTRA = [-2147483648, 8388608, 32768, 128];
  var SHIFT = [24, 16, 8, 0];
  var OUTPUT_TYPES = ['hex', 'array', 'digest', 'arrayBuffer'];

  var blocks = [];

  var createOutputMethod = function (outputType) {
    return function (message) {
      return new Sha1(true).update(message)[outputType]();
    };
  };

  var createMethod = function () {
    var method = createOutputMethod('hex');
    if (NODE_JS) {
      method = nodeWrap(method);
    }
    method.create = function () {
      return new Sha1();
    };
    method.update = function (message) {
      return method.create().update(message);
    };
    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createOutputMethod(type);
    }
    return method;
  };

  var nodeWrap = function (method) {
    var crypto = eval("require('crypto')");
    var Buffer = eval("require('buffer').Buffer");
    var nodeMethod = function (message) {
      if (typeof message === 'string') {
        return crypto.createHash('sha1').update(message, 'utf8').digest('hex');
      } else if (message.constructor === ArrayBuffer) {
        message = new Uint8Array(message);
      } else if (message.length === undefined) {
        return method(message);
      }
      return crypto.createHash('sha1').update(new Buffer(message)).digest('hex');
    };
    return nodeMethod;
  };

  function Sha1(sharedMemory) {
    if (sharedMemory) {
      blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] =
      blocks[4] = blocks[5] = blocks[6] = blocks[7] =
      blocks[8] = blocks[9] = blocks[10] = blocks[11] =
      blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      this.blocks = blocks;
    } else {
      this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }

    this.h0 = 0x67452301;
    this.h1 = 0xEFCDAB89;
    this.h2 = 0x98BADCFE;
    this.h3 = 0x10325476;
    this.h4 = 0xC3D2E1F0;

    this.block = this.start = this.bytes = this.hBytes = 0;
    this.finalized = this.hashed = false;
    this.first = true;
  }

  Sha1.prototype.update = function (message) {
    if (this.finalized) {
      return;
    }
    var notString = typeof(message) !== 'string';
    if (notString && message.constructor === root.ArrayBuffer) {
      message = new Uint8Array(message);
    }
    var code, index = 0, i, length = message.length || 0, blocks = this.blocks;

    while (index < length) {
      if (this.hashed) {
        this.hashed = false;
        blocks[0] = this.block;
        blocks[16] = blocks[1] = blocks[2] = blocks[3] =
        blocks[4] = blocks[5] = blocks[6] = blocks[7] =
        blocks[8] = blocks[9] = blocks[10] = blocks[11] =
        blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      }

      if(notString) {
        for (i = this.start; index < length && i < 64; ++index) {
          blocks[i >> 2] |= message[index] << SHIFT[i++ & 3];
        }
      } else {
        for (i = this.start; index < length && i < 64; ++index) {
          code = message.charCodeAt(index);
          if (code < 0x80) {
            blocks[i >> 2] |= code << SHIFT[i++ & 3];
          } else if (code < 0x800) {
            blocks[i >> 2] |= (0xc0 | (code >> 6)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          } else if (code < 0xd800 || code >= 0xe000) {
            blocks[i >> 2] |= (0xe0 | (code >> 12)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          } else {
            code = 0x10000 + (((code & 0x3ff) << 10) | (message.charCodeAt(++index) & 0x3ff));
            blocks[i >> 2] |= (0xf0 | (code >> 18)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 12) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          }
        }
      }

      this.lastByteIndex = i;
      this.bytes += i - this.start;
      if (i >= 64) {
        this.block = blocks[16];
        this.start = i - 64;
        this.hash();
        this.hashed = true;
      } else {
        this.start = i;
      }
    }
    if (this.bytes > 4294967295) {
      this.hBytes += this.bytes / 4294967296 << 0;
      this.bytes = this.bytes % 4294967296;
    }
    return this;
  };

  Sha1.prototype.finalize = function () {
    if (this.finalized) {
      return;
    }
    this.finalized = true;
    var blocks = this.blocks, i = this.lastByteIndex;
    blocks[16] = this.block;
    blocks[i >> 2] |= EXTRA[i & 3];
    this.block = blocks[16];
    if (i >= 56) {
      if (!this.hashed) {
        this.hash();
      }
      blocks[0] = this.block;
      blocks[16] = blocks[1] = blocks[2] = blocks[3] =
      blocks[4] = blocks[5] = blocks[6] = blocks[7] =
      blocks[8] = blocks[9] = blocks[10] = blocks[11] =
      blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
    }
    blocks[14] = this.hBytes << 3 | this.bytes >>> 29;
    blocks[15] = this.bytes << 3;
    this.hash();
  };

  Sha1.prototype.hash = function () {
    var a = this.h0, b = this.h1, c = this.h2, d = this.h3, e = this.h4;
    var f, j, t, blocks = this.blocks;

    for(j = 16; j < 80; ++j) {
      t = blocks[j - 3] ^ blocks[j - 8] ^ blocks[j - 14] ^ blocks[j - 16];
      blocks[j] =  (t << 1) | (t >>> 31);
    }

    for(j = 0; j < 20; j += 5) {
      f = (b & c) | ((~b) & d);
      t = (a << 5) | (a >>> 27);
      e = t + f + e + 1518500249 + blocks[j] << 0;
      b = (b << 30) | (b >>> 2);

      f = (a & b) | ((~a) & c);
      t = (e << 5) | (e >>> 27);
      d = t + f + d + 1518500249 + blocks[j + 1] << 0;
      a = (a << 30) | (a >>> 2);

      f = (e & a) | ((~e) & b);
      t = (d << 5) | (d >>> 27);
      c = t + f + c + 1518500249 + blocks[j + 2] << 0;
      e = (e << 30) | (e >>> 2);

      f = (d & e) | ((~d) & a);
      t = (c << 5) | (c >>> 27);
      b = t + f + b + 1518500249 + blocks[j + 3] << 0;
      d = (d << 30) | (d >>> 2);

      f = (c & d) | ((~c) & e);
      t = (b << 5) | (b >>> 27);
      a = t + f + a + 1518500249 + blocks[j + 4] << 0;
      c = (c << 30) | (c >>> 2);
    }

    for(; j < 40; j += 5) {
      f = b ^ c ^ d;
      t = (a << 5) | (a >>> 27);
      e = t + f + e + 1859775393 + blocks[j] << 0;
      b = (b << 30) | (b >>> 2);

      f = a ^ b ^ c;
      t = (e << 5) | (e >>> 27);
      d = t + f + d + 1859775393 + blocks[j + 1] << 0;
      a = (a << 30) | (a >>> 2);

      f = e ^ a ^ b;
      t = (d << 5) | (d >>> 27);
      c = t + f + c + 1859775393 + blocks[j + 2] << 0;
      e = (e << 30) | (e >>> 2);

      f = d ^ e ^ a;
      t = (c << 5) | (c >>> 27);
      b = t + f + b + 1859775393 + blocks[j + 3] << 0;
      d = (d << 30) | (d >>> 2);

      f = c ^ d ^ e;
      t = (b << 5) | (b >>> 27);
      a = t + f + a + 1859775393 + blocks[j + 4] << 0;
      c = (c << 30) | (c >>> 2);
    }

    for(; j < 60; j += 5) {
      f = (b & c) | (b & d) | (c & d);
      t = (a << 5) | (a >>> 27);
      e = t + f + e - 1894007588 + blocks[j] << 0;
      b = (b << 30) | (b >>> 2);

      f = (a & b) | (a & c) | (b & c);
      t = (e << 5) | (e >>> 27);
      d = t + f + d - 1894007588 + blocks[j + 1] << 0;
      a = (a << 30) | (a >>> 2);

      f = (e & a) | (e & b) | (a & b);
      t = (d << 5) | (d >>> 27);
      c = t + f + c - 1894007588 + blocks[j + 2] << 0;
      e = (e << 30) | (e >>> 2);

      f = (d & e) | (d & a) | (e & a);
      t = (c << 5) | (c >>> 27);
      b = t + f + b - 1894007588 + blocks[j + 3] << 0;
      d = (d << 30) | (d >>> 2);

      f = (c & d) | (c & e) | (d & e);
      t = (b << 5) | (b >>> 27);
      a = t + f + a - 1894007588 + blocks[j + 4] << 0;
      c = (c << 30) | (c >>> 2);
    }

    for(; j < 80; j += 5) {
      f = b ^ c ^ d;
      t = (a << 5) | (a >>> 27);
      e = t + f + e - 899497514 + blocks[j] << 0;
      b = (b << 30) | (b >>> 2);

      f = a ^ b ^ c;
      t = (e << 5) | (e >>> 27);
      d = t + f + d - 899497514 + blocks[j + 1] << 0;
      a = (a << 30) | (a >>> 2);

      f = e ^ a ^ b;
      t = (d << 5) | (d >>> 27);
      c = t + f + c - 899497514 + blocks[j + 2] << 0;
      e = (e << 30) | (e >>> 2);

      f = d ^ e ^ a;
      t = (c << 5) | (c >>> 27);
      b = t + f + b - 899497514 + blocks[j + 3] << 0;
      d = (d << 30) | (d >>> 2);

      f = c ^ d ^ e;
      t = (b << 5) | (b >>> 27);
      a = t + f + a - 899497514 + blocks[j + 4] << 0;
      c = (c << 30) | (c >>> 2);
    }

    this.h0 = this.h0 + a << 0;
    this.h1 = this.h1 + b << 0;
    this.h2 = this.h2 + c << 0;
    this.h3 = this.h3 + d << 0;
    this.h4 = this.h4 + e << 0;
  };

  Sha1.prototype.hex = function () {
    this.finalize();

    var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4;

    return HEX_CHARS[(h0 >> 28) & 0x0F] + HEX_CHARS[(h0 >> 24) & 0x0F] +
           HEX_CHARS[(h0 >> 20) & 0x0F] + HEX_CHARS[(h0 >> 16) & 0x0F] +
           HEX_CHARS[(h0 >> 12) & 0x0F] + HEX_CHARS[(h0 >> 8) & 0x0F] +
           HEX_CHARS[(h0 >> 4) & 0x0F] + HEX_CHARS[h0 & 0x0F] +
           HEX_CHARS[(h1 >> 28) & 0x0F] + HEX_CHARS[(h1 >> 24) & 0x0F] +
           HEX_CHARS[(h1 >> 20) & 0x0F] + HEX_CHARS[(h1 >> 16) & 0x0F] +
           HEX_CHARS[(h1 >> 12) & 0x0F] + HEX_CHARS[(h1 >> 8) & 0x0F] +
           HEX_CHARS[(h1 >> 4) & 0x0F] + HEX_CHARS[h1 & 0x0F] +
           HEX_CHARS[(h2 >> 28) & 0x0F] + HEX_CHARS[(h2 >> 24) & 0x0F] +
           HEX_CHARS[(h2 >> 20) & 0x0F] + HEX_CHARS[(h2 >> 16) & 0x0F] +
           HEX_CHARS[(h2 >> 12) & 0x0F] + HEX_CHARS[(h2 >> 8) & 0x0F] +
           HEX_CHARS[(h2 >> 4) & 0x0F] + HEX_CHARS[h2 & 0x0F] +
           HEX_CHARS[(h3 >> 28) & 0x0F] + HEX_CHARS[(h3 >> 24) & 0x0F] +
           HEX_CHARS[(h3 >> 20) & 0x0F] + HEX_CHARS[(h3 >> 16) & 0x0F] +
           HEX_CHARS[(h3 >> 12) & 0x0F] + HEX_CHARS[(h3 >> 8) & 0x0F] +
           HEX_CHARS[(h3 >> 4) & 0x0F] + HEX_CHARS[h3 & 0x0F] +
           HEX_CHARS[(h4 >> 28) & 0x0F] + HEX_CHARS[(h4 >> 24) & 0x0F] +
           HEX_CHARS[(h4 >> 20) & 0x0F] + HEX_CHARS[(h4 >> 16) & 0x0F] +
           HEX_CHARS[(h4 >> 12) & 0x0F] + HEX_CHARS[(h4 >> 8) & 0x0F] +
           HEX_CHARS[(h4 >> 4) & 0x0F] + HEX_CHARS[h4 & 0x0F];
  };

  Sha1.prototype.toString = Sha1.prototype.hex;

  Sha1.prototype.digest = function () {
    this.finalize();

    var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4;

    return [
      (h0 >> 24) & 0xFF, (h0 >> 16) & 0xFF, (h0 >> 8) & 0xFF, h0 & 0xFF,
      (h1 >> 24) & 0xFF, (h1 >> 16) & 0xFF, (h1 >> 8) & 0xFF, h1 & 0xFF,
      (h2 >> 24) & 0xFF, (h2 >> 16) & 0xFF, (h2 >> 8) & 0xFF, h2 & 0xFF,
      (h3 >> 24) & 0xFF, (h3 >> 16) & 0xFF, (h3 >> 8) & 0xFF, h3 & 0xFF,
      (h4 >> 24) & 0xFF, (h4 >> 16) & 0xFF, (h4 >> 8) & 0xFF, h4 & 0xFF
    ];
  };

  Sha1.prototype.array = Sha1.prototype.digest;

  Sha1.prototype.arrayBuffer = function () {
    this.finalize();

    var buffer = new ArrayBuffer(20);
    var dataView = new DataView(buffer);
    dataView.setUint32(0, this.h0);
    dataView.setUint32(4, this.h1);
    dataView.setUint32(8, this.h2);
    dataView.setUint32(12, this.h3);
    dataView.setUint32(16, this.h4);
    return buffer;
  };

  var exports = createMethod();

  if (COMMON_JS) {
    module.exports = exports;
  } else {
    root.sha1 = exports;
    if (AMD) {
      !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
        return exports;
      }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
  }
})();


/***/ }),

/***/ 418:
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ 408:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=__webpack_require__(418),n=60103,p=60106;__webpack_unused_export__=60107;__webpack_unused_export__=60108;__webpack_unused_export__=60114;var q=60109,r=60110,t=60112;__webpack_unused_export__=60113;var u=60115,v=60116;
if("function"===typeof Symbol&&Symbol.for){var w=Symbol.for;n=w("react.element");p=w("react.portal");__webpack_unused_export__=w("react.fragment");__webpack_unused_export__=w("react.strict_mode");__webpack_unused_export__=w("react.profiler");q=w("react.provider");r=w("react.context");t=w("react.forward_ref");__webpack_unused_export__=w("react.suspense");u=w("react.memo");v=w("react.lazy")}var x="function"===typeof Symbol&&Symbol.iterator;
function y(a){if(null===a||"object"!==typeof a)return null;a=x&&a[x]||a["@@iterator"];return"function"===typeof a?a:null}function z(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B={};function C(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A}C.prototype.isReactComponent={};C.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(z(85));this.updater.enqueueSetState(this,a,b,"setState")};C.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};
function D(){}D.prototype=C.prototype;function E(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A}var F=E.prototype=new D;F.constructor=E;l(F,C.prototype);F.isPureReactComponent=!0;var G={current:null},H=Object.prototype.hasOwnProperty,I={key:!0,ref:!0,__self:!0,__source:!0};
function J(a,b,c){var e,d={},k=null,h=null;if(null!=b)for(e in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)H.call(b,e)&&!I.hasOwnProperty(e)&&(d[e]=b[e]);var g=arguments.length-2;if(1===g)d.children=c;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];d.children=f}if(a&&a.defaultProps)for(e in g=a.defaultProps,g)void 0===d[e]&&(d[e]=g[e]);return{$$typeof:n,type:a,key:k,ref:h,props:d,_owner:G.current}}
function K(a,b){return{$$typeof:n,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function L(a){return"object"===typeof a&&null!==a&&a.$$typeof===n}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var M=/\/+/g;function N(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function O(a,b,c,e,d){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case n:case p:h=!0}}if(h)return h=a,d=d(h),a=""===e?"."+N(h,0):e,Array.isArray(d)?(c="",null!=a&&(c=a.replace(M,"$&/")+"/"),O(d,b,c,"",function(a){return a})):null!=d&&(L(d)&&(d=K(d,c+(!d.key||h&&h.key===d.key?"":(""+d.key).replace(M,"$&/")+"/")+a)),b.push(d)),1;h=0;e=""===e?".":e+":";if(Array.isArray(a))for(var g=
0;g<a.length;g++){k=a[g];var f=e+N(k,g);h+=O(k,b,c,f,d)}else if(f=y(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=e+N(k,g++),h+=O(k,b,c,f,d);else if("object"===k)throw b=""+a,Error(z(31,"[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b));return h}function P(a,b,c){if(null==a)return a;var e=[],d=0;O(a,e,"","",function(a){return b.call(c,a,d++)});return e}
function Q(a){if(-1===a._status){var b=a._result;b=b();a._status=0;a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)})}if(1===a._status)return a._result;throw a._result;}var R={current:null};function S(){var a=R.current;if(null===a)throw Error(z(321));return a}var T={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:G,IsSomeRendererActing:{current:!1},assign:l};
__webpack_unused_export__={map:P,forEach:function(a,b,c){P(a,function(){b.apply(this,arguments)},c)},count:function(a){var b=0;P(a,function(){b++});return b},toArray:function(a){return P(a,function(a){return a})||[]},only:function(a){if(!L(a))throw Error(z(143));return a}};__webpack_unused_export__=C;__webpack_unused_export__=E;__webpack_unused_export__=T;
__webpack_unused_export__=function(a,b,c){if(null===a||void 0===a)throw Error(z(267,a));var e=l({},a.props),d=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=G.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)H.call(b,f)&&!I.hasOwnProperty(f)&&(e[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)e.children=c;else if(1<f){g=Array(f);for(var m=0;m<f;m++)g[m]=arguments[m+2];e.children=g}return{$$typeof:n,type:a.type,
key:d,ref:k,props:e,_owner:h}};__webpack_unused_export__=function(a,b){void 0===b&&(b=null);a={$$typeof:r,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:q,_context:a};return a.Consumer=a};__webpack_unused_export__=J;__webpack_unused_export__=function(a){var b=J.bind(null,a);b.type=a;return b};__webpack_unused_export__=function(){return{current:null}};__webpack_unused_export__=function(a){return{$$typeof:t,render:a}};__webpack_unused_export__=L;
__webpack_unused_export__=function(a){return{$$typeof:v,_payload:{_status:-1,_result:a},_init:Q}};__webpack_unused_export__=function(a,b){return{$$typeof:u,type:a,compare:void 0===b?null:b}};__webpack_unused_export__=function(a,b){return S().useCallback(a,b)};__webpack_unused_export__=function(a,b){return S().useContext(a,b)};__webpack_unused_export__=function(){};__webpack_unused_export__=function(a,b){return S().useEffect(a,b)};__webpack_unused_export__=function(a,b,c){return S().useImperativeHandle(a,b,c)};
__webpack_unused_export__=function(a,b){return S().useLayoutEffect(a,b)};__webpack_unused_export__=function(a,b){return S().useMemo(a,b)};__webpack_unused_export__=function(a,b,c){return S().useReducer(a,b,c)};__webpack_unused_export__=function(a){return S().useRef(a)};__webpack_unused_export__=function(a){return S().useState(a)};__webpack_unused_export__="17.0.2";


/***/ }),

/***/ 294:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  /* unused reexport */ __webpack_require__(408);
} else {}


/***/ }),

/***/ 696:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


        var result = __webpack_require__(515);

        if (result && result.__esModule) {
            result = result.default;
        }

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// UNUSED EXPORTS: endpoint

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
;// CONCATENATED MODULE: ./src/hooks/useWindowSize.ts

function useWindowSize_useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  var _a = useState({
    width: window.innerWidth,
    height: window.innerHeight
  }),
      windowSize = _a[0],
      setWindowSize = _a[1];

  useLayoutEffect(function () {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    } // Add event listener


    window.addEventListener("resize", handleResize); // Call handler right away so state gets updated with initial window size
    // Remove event listener on cleanup

    return function () {
      return window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}
;// CONCATENATED MODULE: ./src/shared.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function enableMessage(selector, settings) {
  var message = document.querySelector(selector);

  if (!message) {
    return;
  }

  setTimeout(function () {
    message.classList.add('show');
  }, 1000);

  if (settings.hideCallText === 'enabled' || settings.button && settings.button.hidePopupText === true) {
    setTimeout(function () {
      closeMessage(selector);
    }, 6000);
  }
}
function closeMessage(selector) {
  var withAnimation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var message = document.querySelector(selector);

  if (!message) {
    return;
  }

  if (withAnimation) {
    message.classList.replace('show', 'closing');
    setTimeout(() => message.classList.remove('closing'), 300);
  } else {
    message.classList.remove('show');
  }
}
function setCookie(name, value, days) {
  var expires = "";

  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }

  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = (document.cookie || '').split(';');

  if (!ca || !ca.length) {
    return null;
  }

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) == ' ') {
      c = c.substring(1, c.length);
    }

    if (c.indexOf(nameEQ) == 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }

  return null;
}
function eraseCookie(name) {
  document.cookie = name + '=; Max-Age=-99999999;';
}
function mobilecheck() {
  var considerForceParam = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var check = false;

  (function (a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);

  return considerForceParam && window.SMT_FORCE_MOBILE || check;
}
function log(text) {
  if (!text.match(/SecurityError|security|localStorage/)) {
    fetch("".concat(endpoint, "/log3"), {
      method: "POST",
      body: JSON.stringify({
        url: window.location.href,
        error: text
      })
    });
  }
}
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
function getForceLocation() {
  var ignoreLanguages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var link = document.currentScript && document.currentScript.getAttribute('src') || '';
  var isoLanguageCodes = ["ab", "aa", "af", "ak", "sq", "am", "ar", "an", "hy", "as", "av", "ae", "ay", "az", "bm", "ba", "eu", "be", "bn", "bh", "bi", "bs", "br", "bg", "my", "ca", "km", "ch", "ce", "ny", "zh", "cu", "cv", "kw", "co", "cr", "hr", "cs", "da", "dv", "nl", "dz", "en", "eo", "et", "ee", "fo", "fj", "fi", "fr", "ff", "gd", "gl", "lg", "ka", "de", "ki", "el", "kl", "gn", "gu", "ht", "ha", "he", "hz", "hi", "ho", "hu", "is", "io", "ig", "id", "ia", "ie", "iu", "ik", "ga", "it", "ja", "jv", "kn", "kr", "ks", "kk", "rw", "kv", "kg", "ko", "kj", "ku", "ky", "lo", "la", "lv", "lb", "li", "ln", "lt", "lu", "mk", "mg", "ms", "ml", "mt", "gv", "mi", "mr", "mh", "ro", "mn", "na", "nv", "nd", "ng", "ne", "se", "no", "nb", "nn", "ii", "oc", "oj", "or", "om", "os", "pi", "pa", "ps", "fa", "pl", "pt", "qu", "rm", "rn", "ru", "sm", "sg", "sa", "sc", "sr", "sn", "sd", "si", "sk", "sl", "so", "st", "nr", "es", "su", "sw", "ss", "sv", "tl", "ty", "tg", "ta", "tt", "te", "th", "bo", "ti", "to", "ts", "tn", "tr", "tk", "tw", "ug", "uk", "ur", "uz", "ve", "vi", "vo", "wa", "cy", "fy", "wo", "xh", "yi", "yo", "za", "zu", "cz", "dk", "gr", "gb"];
  var forceLocation = getParameterByName('forceLocation', link) || '';
  var withLanguageSubfolder = false;
  var languageCodeRegex = /\/([a-z]{2})(\/|\?|$)/;
  var langMatch = location.href.match(languageCodeRegex);

  if (window.location.href.match(/salla\.sa\//)) {
    forceLocation = window.location.href.replace(/salla\.sa\//, 'salla.sa.');
  } else if ((!langMatch || ignoreLanguages) && window.Shopify && window.Shopify.shop) {
    var _link = document.currentScript && document.currentScript.getAttribute('src');

    var scriptSource = getParameterByName('source', _link) || 'smartarget';
    console.log('link', _link);
    console.log('scriptSource', scriptSource);

    if (scriptSource.match(/shopify/)) {
      forceLocation = window.Shopify.shop;
    }
  } else {
    if (langMatch && !ignoreLanguages) {
      var languageCode = langMatch[1];

      if (isoLanguageCodes.indexOf(languageCode) !== -1) {
        forceLocation = location.href.replace(languageCodeRegex, "-".concat(languageCode, "/"));
        withLanguageSubfolder = true;
      }
    }
  }

  return {
    forceLocation,
    withLanguageSubfolder
  };
}
function getCorrectDomainInfo() {
  var source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'loader.js';
  var ignoreLanguages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var forceLocationInfo = getForceLocation(ignoreLanguages);
  var domain = (forceLocationInfo.forceLocation || location.host || '').toLowerCase().replace(/www\.|https?:\/\/|\/$|\/?\?.+|\/.+|^\./g, '');

  if (!domain.match(/pyatigorsk|krasnodar|krasnogorsk|chehov/)) {
    domain = domain.replace(/([^.]+)\.(abk-fasad|natural-floor|regionkomplekt|azbukaparketa|mskroll|rusreshetka|mebel-russia)(.+)/, "$2$3");
  }
  /*console.log(
      'source', source,
      'forceLocation: ' +  forceLocationInfo.forceLocation,
      'withLanguageSubfolder: ' +  forceLocationInfo.withLanguageSubfolder,
      'domain: ' +  domain,
  );*/


  return _objectSpread(_objectSpread({}, forceLocationInfo), {}, {
    domain
  });
}
function getAppContainerSize(appType, demo) {
  var windowSizes = useWindowSize();
  var container;

  if (window.SUPER_DEMO) {
    container = document.getElementById(appType);

    if (container) {
      var rect = container.getBoundingClientRect();
      return {
        width: container.clientWidth || 0,
        height: container.clientHeight || 0,
        left: rect.left,
        top: rect.top
      };
    }

    return {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
  } else if (demo) {
    container = document.querySelector('#object-wrapper');

    if (container) {
      var _rect = container.getBoundingClientRect();

      return {
        width: container.clientWidth || 0,
        height: container.clientHeight || 0,
        left: _rect.left,
        top: _rect.top
      };
    }

    return {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
  } else {
    return _objectSpread(_objectSpread({}, windowSizes), {}, {
      left: 0,
      top: 0
    });
  }
}
function stripTags(text) {
  return text.replace(/(&lt;([^>]+)>)/gi, "");
}
function createAppContainer(appName, parent) {
  var container = document.createElement('div');
  container.style.setProperty('display', 'block', 'important');
  container.classList.add('smt-app', 'smt-app-' + appName, mobilecheck() ? 'force-mobile' : 'force-desktop');
  parent.prepend(container);
  return container;
}
function getPoweredLink(app, powered) {
  var isLongVersion = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var color = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '#999';
  var withIcon = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var styles = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
  var icon = /*#__PURE__*/React.createElement("img", {
    class: "powered-by-icon",
    src: "data:image/svg+xml;charset=utf-8," + encodeURIComponent(smartargetIcon({
      iconColor: '#777',
      backgroundColor: 'transparent'
    }))
  });
  var label = app === 'general' ? 'Improve your website with smartarget.online' : (isLongVersion ? 'Powered ' : '') + 'by Smartarget';

  if (powered) {
    return /*#__PURE__*/React.createElement("a", {
      ref: node => {
        if (node) {
          node.style.setProperty("color", color, "important");
        }
      },
      style: _objectSpread({
        display: 'block !important'
      }, styles),
      className: "powered-link",
      target: "_blank",
      href: "https://smartarget.online/demo.html?ref=".concat(location.origin, "&source=poweredby&app=").concat(app)
    }, withIcon ? icon : '⚡', label);
  }

  return null;
}
function getBodyFontFamily() {
  var fontFamily = 'inherit';

  try {
    var _window$getComputedSt;

    var el = document.querySelector('h1') || document.querySelector('h2') || document.querySelector('h3') || document.querySelector('h4') || document.querySelector('span');
    fontFamily = ((_window$getComputedSt = window.getComputedStyle(el || document.body)) === null || _window$getComputedSt === void 0 ? void 0 : _window$getComputedSt.fontFamily) || 'inherit';
  } catch (e) {}

  return fontFamily.split(',')[0].replace(/[\"\']/g, '');
}
function generatePoweredLink(app, powered) {
  var isLongVersion = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var color = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '#999';
  var label = '⚡' + (isLongVersion ? 'Powered ' : '') + 'by Smartarget';

  if (powered && !mobilecheck()) {
    return "\n            <a style=\"display: block !important; color: ".concat(color, "\" class=\"powered-link\" target=\"_blank\" href=\"https://smartarget.online/demo.html?ref=").concat(location.origin, "&source=poweredby&app=").concat(app, "\">").concat(label, "</a>\n        ");
  }

  return "";
}
function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}
// EXTERNAL MODULE: ./src/styles/fixes.scss
var fixes = __webpack_require__(696);
;// CONCATENATED MODULE: ./src/loader.js
function loader_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function loader_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? loader_ownKeys(Object(source), !0).forEach(function (key) { loader_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : loader_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function loader_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var sha1 = __webpack_require__(810);

var cacheEndpoint = 'https://smartarget-sp-cache.fra1.digitaloceanspaces.com';
var loader_endpoint = 'https://api.smartarget.online';
var endpointNew = ' https://api-v2.smartarget.online';
var baseDomain = 'smartarget.online';

(function () {
  var link = document.currentScript.getAttribute('src'),
      idUser = getParameterByName('u', link) || 'empty',
      forceSettings = getParameterByName('forceSettings', link),
      source = getParameterByName('source', link) || 'smartarget',
      previewApp = getParameterByName('app', location.href),
      previewApps = previewApp && previewApp.length > 30 && [JSON.parse(previewApp.replace(/colorHash/g, '#'))] || [],
      purchased = previewApp && previewApp.length > 30 && getParameterByName('purchased', location.href) || '0',
      powered = false,
      forceTrial = false,
      newSignUp = false,
      isSmartarget = false,
      initiated = false,
      watcherEvents = {},
      startTime = performance.now(),
      allowedPaths = ['', '/', '/index.php', 'index.html'],
      noCache = window.location.search.match('sm_no_cache') || link.match(/ru\.smar/);
  var ignoreLangs = !!window.location.href.match(/rawpowerx|tla-radon/);
  var {
    domain,
    forceLocation,
    withLanguageSubfolder
  } = getCorrectDomainInfo('loader.js', ignoreLangs);
  console.log({
    domain,
    forceLocation,
    withLanguageSubfolder
  });

  try {
    forceSettings = JSON.parse(forceSettings);
  } catch (e) {} finally {
    forceSettings = forceSettings || {};
  }

  if (window.Smartarget && window.Smartarget.usedIds.includes(idUser)) {
    return;
  }

  var idUserIsCorrect = !(idUser.length < 10 || idUser.length > 70 || idUser.match(/http|script/) || idUser === 'empty');

  if (idUserIsCorrect && !window.SUPER_DEMO && !window.SMT_PREVIEW) {
    init();
    window.addEventListener('load', function () {
      init();
    });
  }

  setTimeout(() => {
    (function (history) {
      var pushState = history.pushState;

      history.pushState = function (state) {
        if (typeof history.onpushstate == "function") {
          history.onpushstate({
            state: state
          });
        }

        var websitesWithPushStateLogic = ['shop.wearthat.me', 'www.talentnavigator.io'];

        if (window.location.href.match(/shopbase/) || source.match('thinkific') || source.match('wix') || source.match('framer') || websitesWithPushStateLogic.includes(window.location.host)) {
          initiated = false;
          deleteApps();
          var delay = window.location.host === 'www.talentnavigator.io' ? 0 : 300;
          setTimeout(() => init(), delay);
        }

        return pushState.apply(history, arguments);
      };
    })(window.history);
  }, 1000);
  window.addEventListener("message", message => {
    if (message.data === "is_inside_smt_preview") {
      deleteApps();
    }
  });

  function init() {
    var locationHref = window.location.href;
    console.log('init', locationHref); // disable for WP admin

    if (locationHref.match('wp_admin')) {
      return;
    }

    if (initiated && source.match('ecwid_whatsapp') === null && source.match('ecwid_instagram') === null) {
      return;
    }

    initiated = true;
    insertCssFixes();

    if (window.SMT_PREVIEW && previewApps.length !== 0) {
      setTimeout(() => configureApps(previewApps, purchased), 500);
      return;
    }

    var cacheKey = sha1(idUser + ' ' + domain);
    var forceLocationParam = forceLocation ? '&forceLocation=' + forceLocation : '';
    var link1 = "".concat(cacheEndpoint, "/settings/").concat(cacheKey, ".json");
    var link2 = "".concat(endpointNew, "/api/apps/").concat(idUser, "?source=").concat(source).concat(forceLocationParam);

    if (noCache) {
      link1 = link2;
    }

    var fetchFn = fetch;
    fetchFn(link1).then(response => {
      if (!response.ok) {
        throw new Error("First response OK is false");
      }

      return response.json();
    }).then(data => {
      processResponse(data);
    }).catch(() => {
      fetchFn(link2).then(response => {
        if (!response.ok) {
          throw new Error("Second response OK is false");
        }

        return response.json();
      }).then(data => {
        processResponse(data);
      }).catch(err => {//console.log('error fetching apps', err);
      });
    });
  }

  function processResponse(data) {
    if (data.apps === undefined || !data.apps || data.apps.length === 0) {
      return;
    }

    isSmartarget = data.isSmartarget;
    purchased = data.purchased;
    powered = data.powered;
    forceTrial = data.forceTrial;
    newSignUp = data.newSignUp;
    var href = window.location.href.split('?')[0].replace(/\/$/, '');
    var path = window.location.pathname;
    var hash = window.location.hash;
    var isOpencartInternalPage = source.match(/opencart/) && window.location.search && !window.location.search.match('common/home');

    if (forceTrial === "1" || window.SMT_PREVIEW !== true && purchased === '0' && (allowedPaths.indexOf(path) === -1 || hash.match(/^#\//) || isOpencartInternalPage)
    /* && !source.match(/salla/)*/
    ) {
      if (isSmartarget
      /* && !(source.match(/thinkific/) && window.location.href.match(/courses/) && !window.location.href.match(/tochterundsohn/))*/
      ) {
        configureApps([{
          type: 'end_of_trial',
          upgradeMode: forceTrial === "1",
          newSignUp,
          apps: data.apps,
          hidePopup: false
        }], purchased);
      }

      return;
    }

    if (window.location.href.match('shopbase') && window.location.href.match('checkouts')) {
      return;
    }

    if (!checkVisibilityRules(data.visibility, data.visibilityRules, "main data")) {
      return;
    }

    data.apps = data.apps.filter(app => app.status !== false);
    data.apps = data.apps.filter(app => checkVisibilityRules(app.visibility, app.visibilityRules, "app ".concat(app.type)));
    configureApps(data.apps, purchased, powered, null, data.version);
  }

  function configureApps(apps, purchasedForce) {
    var poweredForce = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var parent = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var version = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
    purchased = purchasedForce;
    powered = poweredForce;
    version = version || Math.random();
    parent = parent || document.body;

    if (document.Pace !== undefined) {
      parent = document.head;
    }

    if (document.querySelector('frameset') !== null) {
      parent = document.documentElement;
    }

    window.Smartarget.parent = parent;

    if (!window.sm_meta_title_initial) {
      window.sm_meta_title_initial = document.title;
    }

    apps.filter(app => app.type).sort((a, b) => ['stories', 'popup', 'exit_preventor', 'popup_forms'].indexOf(a.type) !== -1 ? -1 : 1).forEach(app => {
      app.type = app.type.replace('_new', '');
      insertApp(app, version);
    });
  }

  function configureWatcher(appType) {
    var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

    if (isFirefox) {
      return;
    }

    var apps = document.getElementsByClassName("smt-app-".concat(appType));
    Array.prototype.forEach.call(apps, function (app) {
      var classes = app.getAttribute('class');
      var appName = (classes || "").replace('smt-app smt-app-', '').replace('force-desktop', '').replace('force-mobile', '').replace(/bottom-over|top-over|top-inside/, '').trim();
      var wrapper = app.querySelector('.sm-fixed') || app.querySelector('div');

      if (wrapper === null) {
        return;
      }

      wrapper.addEventListener('click', function (event) {
        if (watcherEvents[appName] !== undefined) {
          return;
        }

        watcherEvents[appName] = 'click';

        if (window.dataLayer) {
          window.dataLayer.push({
            event: 'Smartarget App Click',
            appName: appName
          });
        }

        var forceLocationParam = forceLocation && !withLanguageSubfolder ? '?forceLocation=' + forceLocation : '';
        var page = forceLocation && forceLocation !== 'null' ? forceLocation : location.href;
        var platform = mobilecheck() ? 'mobile' : 'desktop';
        var secondsBeforeAction = Math.round((performance.now() - startTime) / 1000);
        var url = "".concat(endpointNew, "/api/apps/").concat(idUser, "/stat").concat(forceLocationParam);
        fetch(url, {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            page,
            secondsBeforeAction,
            action: 'click',
            app: appName,
            platform
          })
        }).then(function (response) {
          try {} catch (e) {//console.log(e);
          }
        }).catch(err => {});
      });
    });
  }

  function insertApp(app, version) {
    if (noCache) {
      version = Math.random(0, 10000);
    }

    var tries = 0;

    var appInit = () => {
      if (!window.Smartarget[app.type] && tries < 10) {
        tries++; //console.log('app init again', app, version);

        setTimeout(() => appInit(), 100);
        return;
      }

      var appSettings = clearAppSettingsFromTags(loader_objectSpread(loader_objectSpread({}, app), forceSettings));

      if (window.Smartarget.configuredApps === undefined) {
        window.Smartarget.configuredApps = {};
      }

      if (window.SMT_PREVIEW !== true && window.Smartarget.configuredApps[app.type] !== undefined && window.Smartarget.configuredApps[app.type] === JSON.stringify(appSettings)) {
        return;
      } else {
        deleteApps(app.type);
        window.Smartarget.configuredApps[app.type] = JSON.stringify(appSettings);
      }

      try {
        window.SMT_FORCE_MOBILE = app.forceMobile === true;
        var parent = window.SUPER_DEMO && document.getElementById(app.type) || window.Smartarget.parent || document.getElementById('preview') || document.documentElement;
        var container = createAppContainer(app.type, parent);
        window.Smartarget[app.type](container, appSettings, powered, purchased, idUser, source);
      } catch (e) {
        var errorText = e.toString() + ':' + JSON.stringify(e.stack);

        if (!errorText.match(/SecurityError|security|localStorage/)) {
          fetch("".concat(loader_endpoint, "/log3"), {
            method: "POST",
            body: JSON.stringify({
              url: window.location.href,
              error: errorText
            })
          });
        } //console.error(e);

      }

      if (!window.SMT_PREVIEW && app.demo !== true && isSmartarget && app.type !== 'end_of_trial' && !window.location.href.match(/tbshop-ma/)) {
        configureWatcher(app.type);
        setTimeout(() => configureWatcher(app.type), 1000);
        setTimeout(() => configureWatcher(app.type), 2000);
      }
    };

    var isThinkific = window.location.href.match('thinkific');

    if (window.Smartarget[app.type] && !isThinkific) {
      appInit();
    } else {
      var script = document.createElement("script");
      script.setAttribute('layout', 'container');

      if (window.DEV) {
        script.src = "/assets/dev/".concat(app.type, ".dev.bundle.js?ver=") + Math.random() + "&source=".concat(source);
      } else if (window.location.search.match('sm_dev')) {
        script.src = "https://".concat(baseDomain, "/apps/").concat(app.type, ".dev.bundle.js?ver=") + Math.random() + "&source=".concat(source);
      } else {
        script.src = "https://".concat(link.match(/ru\.smar/) ? 'ru.' : '').concat(baseDomain, "/apps/").concat(app.type, ".bundle.js?ver=").concat(isThinkific ? Math.random() : version) + "&source=".concat(source);
      }

      script.addEventListener('load', function () {
        appInit();
      });
      document.head.appendChild(script);
    }
  }

  function clearAppSettingsFromTags(settings) {
    for (var key in settings) {
      if (typeof settings[key] === 'object' && settings[key] !== null) {
        settings[key] = clearAppSettingsFromTags(settings[key]);
      } else if (typeof settings[key] === 'string' || settings[key] instanceof String) {
        settings[key] = stripTags(settings[key]);
      }
    }

    return settings;
  }

  function insertCssFixes() {
    var styles = document.createElement("style");
    styles.innerHTML += "\n\t\t\t\t.shadow-smt-app {\n\t\t\t\t\tdisplay: block !important;\n\t\t\t\t}\n\t\t\t";
    document.head.appendChild(styles);
  }

  function deleteApps(appType) {
    if (window.location.href.match('ranchcolt')) {
      return;
    }

    var apps = document.getElementsByClassName("smt-app");

    if (appType) {
      apps = document.getElementsByClassName("smt-app-".concat(appType));
      delete window.Smartarget.configuredApps[appType];
    } else {
      window.Smartarget.configuredApps = {};
    }

    Array.prototype.forEach.call(apps, function (app) {
      app.remove();
    });
  }

  function checkVisibilityRules(visibility, visibilityRules) {
    var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
    var href = window.location.href.split('?')[0].replace(/\/$/, '');
    var hrefWithQuery = window.location.href.replace(/\/$/, '');
    var showApps = false;

    if (!Array.isArray(visibilityRules)) {
      try {
        visibilityRules = JSON.parse(visibilityRules);
      } catch (e) {
        visibilityRules = [];
      }
    }

    if (!visibility || visibility === 'ALL' || visibilityRules.length === 0) {
      showApps = true; //console.log(visibility, visibilityRules, showApps, level, `result: ${showApps}`);

      return showApps;
    }

    var rulesForInclude = visibilityRules.filter(rule => rule.type === 'INCLUDE_EXACT' || rule.type === 'INCLUDE_CONTAINS');
    var rulesForExclude = visibilityRules.filter(rule => rule.type === 'EXCLUDE_EXACT' || rule.type === 'EXCLUDE_CONTAINS');

    if (rulesForInclude.length === 0 && rulesForExclude.length !== 0) {
      showApps = true;
    } else if (rulesForInclude.length !== 0 && rulesForExclude.length === 0) {
      showApps = false;
    } else if (rulesForInclude.length === 0 && rulesForExclude.length === 0) {
      showApps = true;
    }

    rulesForInclude.forEach(rule => {
      var pathToCheck = rule.considerQueryParams ? hrefWithQuery : href;

      if (rule.type === 'INCLUDE_EXACT' && pathToCheck === rule.path) {
        showApps = true;
      } else if (rule.type === 'INCLUDE_CONTAINS' && pathToCheck.match(rule.path)) {
        showApps = true;
      }
    });
    rulesForExclude.forEach(rule => {
      var pathToCheck = rule.considerQueryParams ? hrefWithQuery : href;

      if (rule.type === 'EXCLUDE_EXACT' && pathToCheck === rule.path) {
        showApps = false;
      } else if (rule.type === 'EXCLUDE_CONTAINS' && pathToCheck.match(rule.path)) {
        showApps = false;
      }
    }); //console.log(visibility, visibilityRules, showApps, level, `result: ${showApps}`);

    return showApps;
  }

  if (window.Smartarget === undefined) {
    window.Smartarget = {
      configureApps,
      deleteApps,
      configuredApps: {},
      usedIds: [idUser]
    };
  }
})();
})();

/******/ })()
;