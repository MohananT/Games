/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = module.exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "html, body {\r\n    margin: 0;\r\n    height: 100%;\r\n    background: #222222;\r\n}\r\n\r\n.container {\r\n    margin: 0 10%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n}\r\n\r\n.games-header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    height: 30px;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n\r\n.canvas-container {\r\n    flex-grow: 1;\r\n    border-left: 5px solid #333333;\r\n    border-right: 5px solid #333333;\r\n    border-top: 5px solid #333333;\r\n    cursor: none;\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n\r\n.modal {\r\n    display: none;\r\n    background: rgba(0, 0, 0, 0.527);\r\n    color: white;\r\n    position: absolute;\r\n    top: 10%;\r\n    left: 10%;\r\n    height: 80%;\r\n    width: 80%;\r\n    \r\n}\r\n\r\n.modal-content{\r\n    display: grid;\r\n    margin: auto;\r\n}\r\n\r\n/* button styles */\r\n.glow-on-hover {\r\n    width: 220px;\r\n    height: 50px;\r\n    border: none;\r\n    outline: none;\r\n    color: #fff;\r\n    background: #111;\r\n    cursor: pointer;\r\n    position: relative;\r\n    z-index: 0;\r\n    border-radius: 10px;\r\n}\r\n\r\n.glow-on-hover:before {\r\n    content: '';\r\n    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);\r\n    position: absolute;\r\n    top: -2px;\r\n    left:-2px;\r\n    background-size: 400%;\r\n    z-index: -1;\r\n    filter: blur(5px);\r\n    width: calc(100% + 4px);\r\n    height: calc(100% + 4px);\r\n    animation: glowing 20s linear infinite;\r\n    opacity: 0;\r\n    transition: opacity .3s ease-in-out;\r\n    border-radius: 10px;\r\n}\r\n\r\n.glow-on-hover:active {\r\n    color: rgb(252, 0, 0)\r\n}\r\n\r\n.glow-on-hover:active:after {\r\n    background: transparent;\r\n}\r\n\r\n.glow-on-hover:hover:before {\r\n    opacity: 1;\r\n}\r\n\r\n.glow-on-hover:after {\r\n    z-index: -1;\r\n    content: '';\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: #111;\r\n    left: 0;\r\n    top: 0;\r\n    border-radius: 10px;\r\n}\r\n\r\n@keyframes glowing {\r\n    0% { background-position: 0 0; }\r\n    50% { background-position: 400% 0; }\r\n    100% { background-position: 0 0; }\r\n}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    for (var i = 0; i < modules.length; i++) {
      var item = [].concat(modules[i]);

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
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
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

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles.css */ "./src/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
var modal = document.getElementById('id-modal');
var btnNewGame = document.getElementById('id-btn-newgame');
var canvasContainerId = document.getElementById('canvas-container-id');
canvas.width = canvasContainerId.offsetWidth;
canvas.height = canvasContainerId.offsetHeight;
var mouse = {
  x: canvasContainerId.offsetWidth,
  y: canvasContainerId.offsetHeight
};

function getXY(canvas, event) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  };
} // Event Listeners


canvasContainerId.addEventListener('mousemove', function (event) {
  var obj = getXY(canvas, event);
  mouse.x = obj.x;
  mouse.y = obj.y;
});
addEventListener('resize', function () {
  canvas.width = canvasContainerId.offsetWidth;
  canvas.height = canvasContainerId.offsetHeight; // init()
});
btnNewGame.addEventListener('click', function (event) {
  blueBallObj.reset();
  modal.style.display = "none";
}); // Object

var Balls =
/*#__PURE__*/
function () {
  function Balls(x, y, radius, color, xVelocity, yVelocity) {
    _classCallCheck(this, Balls);

    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.dx = xVelocity;
    this.dy = yVelocity;
  }

  _createClass(Balls, [{
    key: "draw",
    value: function draw() {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.fillStyle = this.color;
      c.fill();
      c.closePath();
    }
  }, {
    key: "update",
    value: function update() {
      this.x = this.x + this.dx;
      this.y = this.y + this.dy;
      this.draw();
    }
  }, {
    key: "downdate",
    value: function downdate(dx, dy) {
      this.x = this.x + dx;
      this.y = this.y - dy;
      this.draw();
    }
  }]);

  return Balls;
}();

var User =
/*#__PURE__*/
function () {
  function User(x, y, radius, color) {
    _classCallCheck(this, User);

    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.lifeColors = [{
      life: 1,
      color: '#FFFFFF'
    }, {
      life: 2,
      color: '#00CDFF'
    }, {
      life: 3,
      color: '#1300FF'
    }, {
      life: 4,
      color: '#FF00E0'
    }]; // below informations are for strictly games

    this.points = 0;
    this.lives = 2;
  } // getter ans setter


  _createClass(User, [{
    key: "getPoints",
    value: function getPoints() {
      return this.points;
    }
  }, {
    key: "getLives",
    value: function getLives() {
      return this.lives;
    }
  }, {
    key: "setLives",
    value: function setLives(live) {
      this.lives = live;
    }
  }, {
    key: "setPoints",
    value: function setPoints(pt) {
      this.points = pt;
    }
  }, {
    key: "draw",
    value: function draw() {
      c.save();
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.fillStyle = this.color;
      c.shadowColor = this.color;
      c.shadowBlur = 15;
      c.fill();
      c.closePath();
      c.restore();
    }
  }, {
    key: "changeColor",
    value: function changeColor() {
      var clrIndex = this.lives > 0 ? this.lives - 1 : 0;
      var colr = this.lifeColors[clrIndex]; // console.log(this.lives);
      // console.log(this.lifeColors);
      // console.log(colr);

      this.color = colr.color;
    }
  }, {
    key: "calculateLives",
    value: function calculateLives() {
      if (this.lives <= 0) {// logic to show game over
      }

      if (this.lives > 4) this.lives = 4;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.lives = 2;
      this.points = 2;
    }
  }, {
    key: "mouseMove",
    value: function mouseMove(dx, dy) {
      this.x = dx;
      this.y = dy;
      this.draw();
    }
  }, {
    key: "greenBallsCollision",
    value: function greenBallsCollision(ballsArray) {
      for (var i = 0; i < ballsArray.length; i++) {
        var dist = _utils__WEBPACK_IMPORTED_MODULE_0___default.a.distance(this.x, this.y, ballsArray[i].x, ballsArray[i].y); // document.getElementById("point").innerHTML = '  Point' + i + ':' + dist;
        // consider the radius while collison
        // default radius calculation - 10 is hardcoded
        // destroy the green circle
        // remove them in array

        if (dist < 10) {
          this.points += 1;
          document.getElementById("point").innerHTML = "Score : " + this.points; // reduce the radius to zero

          ballsArray[i].radius = 0; // create mini balls to scatter

          for (var j = 0; j < 5; j++) {
            miniBallsObjArray.push(new MiniBalls(ballsArray[i].x, ballsArray[i].y, 2, ballsArray[i].color));
          }
        }
      }
    }
  }, {
    key: "redBallsCollision",
    value: function redBallsCollision(ballsArray) {
      for (var i = 0; i < ballsArray.length; i++) {
        var dist = _utils__WEBPACK_IMPORTED_MODULE_0___default.a.distance(this.x, this.y, ballsArray[i].x, ballsArray[i].y); // document.getElementById("point").innerHTML = '  Point' + i + ':' + dist;
        // consider the radius while collison
        // default radius calculation - 10 is hardcoded
        // destroy the green circle
        // remove them in array

        if (dist < 10) {
          this.lives -= 1; //console.log('document.getElementById("live").innerHTML', document.getElementById("live").innerHTML);

          document.getElementById("live").innerHTML = "Lives : " + this.lives; // reduce the radius to zero

          ballsArray[i].radius = 0; // create mini balls to scatter

          for (var j = 0; j < 5; j++) {
            miniBallsObjArray.push(new MiniBalls(ballsArray[i].x, ballsArray[i].y, 2, this.color));
          }
        }
      }
    }
  }]);

  return User;
}();

var MiniBalls =
/*#__PURE__*/
function () {
  function MiniBalls(x, y, radius, color) {
    _classCallCheck(this, MiniBalls);

    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.xVelocity = Math.sin(_utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomIntFromRange(1, 100));
    this.yVelocity = Math.sin(_utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomIntFromRange(1, 100));
    ;
  }

  _createClass(MiniBalls, [{
    key: "draw",
    value: function draw() {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.fillStyle = this.color;
      c.fill();
      c.closePath();
    }
  }, {
    key: "update",
    value: function update() {
      this.x = this.x + this.xVelocity;
      this.y = this.y + this.yVelocity;
      this.draw();
    }
  }]);

  return MiniBalls;
}();

var rebBallsObjArray = [];
var greenBallsObjArray = [];
var miniBallsObjArray = [];
var blueBallObj; // Reb balls - decreases points

function initRedBalls() {
  var colorInFun = '#FF0000';

  for (var i = 0; i < 50; i++) {
    var x = _utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomIntFromRange(-1000, 0);
    var y = _utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomIntFromRange(-1500, canvas.height);
    var radius = _utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomIntFromRange(2, 8);
    var dx = _utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomIntFromRange(1, 5);
    var dy = 1;
    rebBallsObjArray.push(new Balls(x, y, radius, colorInFun, dx, dy));
  }
}

function initGreenBalls() {
  var colorInFun = '#00FF00';

  for (var i = 0; i < 10; i++) {
    var x = _utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomIntFromRange(-1000, 0);
    var y = _utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomIntFromRange(-1500, canvas.height);
    var radius = 8;
    var dx = _utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomIntFromRange(1, 5);
    var dy = _utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomIntFromRange(1, 5);
    greenBallsObjArray.push(new Balls(x, y, radius, colorInFun, dx, dy));
  }
} // blue ball - user


function initBlueBalls() {
  //let colorInFun = '#00CDFF'
  var colorInFun = '#FFFFFF';
  var radius = 8;
  var x = _utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomIntFromRange(100, 100);
  var y = _utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomIntFromRange(1000, 500);
  blueBallObj = new User(x, y, radius, colorInFun);
}

function calculateGame() {
  var lives = blueBallObj.getLives(); // console.log(lives);

  if (lives <= 0) {
    console.log(lives);
    modal.style.display = "block";
  }
} // Animation Loop


function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  rebBallsObjArray.forEach(function (object, index) {
    if (object.radius == 0) {
      rebBallsObjArray.splice(index, 1);
    }

    object.update();
  });
  greenBallsObjArray.forEach(function (obj, index) {
    if (obj.radius == 0) {
      greenBallsObjArray.splice(index, 1);
    }

    obj.update();
  });
  blueBallObj.mouseMove(mouse.x, mouse.y);
  blueBallObj.greenBallsCollision(greenBallsObjArray);
  blueBallObj.redBallsCollision(rebBallsObjArray);
  blueBallObj.calculateLives();
  blueBallObj.changeColor(); // for modal popup

  calculateGame();
  miniBallsObjArray.forEach(function (object, index) {
    setTimeout(function () {
      object.radius -= 1;
    }, 1000);

    if (object.radius <= 0) {
      miniBallsObjArray.splice(index, 1);
    }

    object.update();
  });
}

setInterval(function () {
  initRedBalls();
  initGreenBalls(); // console.log('Points', points);
}, 5000);
initRedBalls();
initBlueBalls();
initGreenBalls();
animate();

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

function distance(x1, y1, x2, y2) {
  var xDist = x2 - x1;
  var yDist = y2 - y1;
  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

module.exports = {
  randomIntFromRange: randomIntFromRange,
  randomColor: randomColor,
  distance: distance
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map