/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__head_html__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__head_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__head_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__head_scss__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__head_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__head_scss__);



function head() {
    return {
        name: 'head',
        tpl: __WEBPACK_IMPORTED_MODULE_0__head_html___default.a
    };
}

/* harmony default export */ __webpack_exports__["a"] = head;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layer_html__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layer_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__layer_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layer_scss__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layer_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__layer_scss__);



function layer() {
    return {
        name: 'layer',
        tpl: __WEBPACK_IMPORTED_MODULE_0__layer_html___default.a
    };
}

/* harmony default export */ __webpack_exports__["a"] = layer;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "<header class=\"head\">\n    <div class=\"wrap\">\n        <ul class=\"nav\">\n            <li>\n                <a href=\"javascript:;\">首页</a>\n            </li>\n            <li>\n                <a href=\"javascript:;\">资讯</a>\n            </li>\n            <li>\n                <a href=\"javascript:;\">关于</a>\n            </li>\n        </ul>\n    </div>\n</header>\n";

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap\">\n    <div class=\"layer\">\n        <h2>Body</h2>\n    </div>\n</div>\n";

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_layer_layer_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_head_head_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__css_vendor_common_css__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__css_vendor_common_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__css_vendor_common_css__);





const App = function () {
    var domApp = document.getElementById('app');
    var layer = new __WEBPACK_IMPORTED_MODULE_0__components_layer_layer_js__["a" /* default */]();
    var head = new __WEBPACK_IMPORTED_MODULE_1__components_head_head_js__["a" /* default */]();
    domApp.innerHTML = head.tpl + layer.tpl;
};

new App();

/***/ })
/******/ ]);