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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__expresstful__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__expresstful__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__decorators__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__decorators__["a"]; });
/* unused harmony reexport all */
/* unused harmony reexport del */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__decorators__["b"]; });
/* unused harmony reexport post */
/* unused harmony reexport put */



/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-own-property-descriptor");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_morgan__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_morgan___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_morgan__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_expresstful__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__posts__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users__ = __webpack_require__(9);






const app = __WEBPACK_IMPORTED_MODULE_0_express___default()();
const port = 4000;

app.use(__WEBPACK_IMPORTED_MODULE_1_morgan___default()('dev'));

app.use(Object(__WEBPACK_IMPORTED_MODULE_2_expresstful__["b" /* default */])([__WEBPACK_IMPORTED_MODULE_4__users__["a" /* Users */], __WEBPACK_IMPORTED_MODULE_3__posts__["a" /* Posts */]]));

app.listen(port, () => {
  console.log(`demo app listening on port ${port}`);
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = expresstful;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);


function expresstful(controllers) {
  const router = new __WEBPACK_IMPORTED_MODULE_0_express__["Router"]();

  controllers.forEach(Controller => {
    const instance = new Controller();

    for (const { method, path, middleware, routeFn } of instance.$routes) {
      router[method](path, ...middleware, instance[routeFn].bind(instance));
    }
  });

  return router;
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = controller;
/* unused harmony export route */
/* unused harmony export all */
/* unused harmony export del */
/* harmony export (immutable) */ __webpack_exports__["b"] = get;
/* unused harmony export post */
/* unused harmony export put */
const PREFIX = '$$route_';
/* unused harmony export PREFIX */


function controller(ctrlPath, ...ctrlMiddleware) {
  return function (target, key, descriptor) {
    const proto = target.prototype;
    proto.$routes = Object.getOwnPropertyNames(proto).filter(prop => prop.indexOf(PREFIX) === 0).map(prop => {
      const route = proto[prop];
      const middleware = ctrlMiddleware.concat(route.middleware);
      const method = route.method;
      const path = route.path.length > 1 ? route.path : '';
      const routeFn = prop.substring(PREFIX.length);

      return {
        method: method,
        path: `${ctrlPath}${path}`,
        middleware: middleware,
        routeFn: routeFn
      };
    });
  };
}

function route(method, path, ...middleware) {
  return function (target, name) {
    target[`${PREFIX}${name}`] = {
      method: method,
      path: path,
      middleware: middleware
    };
  };
}

function all(path, ...middlewares) {
  return route('all', path, middlewares);
}

function del(path, ...middlewares) {
  return route('delete', path, middlewares);
}

function get(path, ...middlewares) {
  return route('get', path, middlewares);
}

function post(path, ...middlewares) {
  return route('post', path, middlewares);
}

function put(path, ...middlewares) {
  return route('put', path, middlewares);
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Posts; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_expresstful__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__middleware__ = __webpack_require__(8);


var _dec, _dec2, _dec3, _class, _desc, _value, _class2;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}




let Posts = (_dec = Object(__WEBPACK_IMPORTED_MODULE_1_expresstful__["a" /* controller */])('/posts', __WEBPACK_IMPORTED_MODULE_2__middleware__["a" /* auth */]), _dec2 = Object(__WEBPACK_IMPORTED_MODULE_1_expresstful__["c" /* get */])('/', __WEBPACK_IMPORTED_MODULE_2__middleware__["b" /* log */], __WEBPACK_IMPORTED_MODULE_2__middleware__["c" /* test */]), _dec3 = Object(__WEBPACK_IMPORTED_MODULE_1_expresstful__["c" /* get */])('/somethingElse'), _dec(_class = (_class2 = class Posts {
  root(req, res) {
    res.json(this.posts);
  }

  somethingElse(req, res) {
    res.json({
      something: 'else'
    });
  }

  get posts() {
    return [{
      title: 'Lorem Ipsum'
    }, {
      title: 'Dolor Sit Amat'
    }];
  }
}, (_applyDecoratedDescriptor(_class2.prototype, 'root', [_dec2], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class2.prototype, 'root'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'somethingElse', [_dec3], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class2.prototype, 'somethingElse'), _class2.prototype)), _class2)) || _class);




/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = auth;
/* harmony export (immutable) */ __webpack_exports__["b"] = log;
/* harmony export (immutable) */ __webpack_exports__["c"] = test;
function auth(req, res, next) {
  console.log('auth middleware');
  next();
}

function log(req, res, next) {
  console.log('logging middleware');
  next();
}

function test(req, res, next) {
  console.log('test middleware');
  next();
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Users; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_expresstful__ = __webpack_require__(0);


var _dec, _dec2, _dec3, _class, _desc, _value, _class2;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}



let Users = (_dec = Object(__WEBPACK_IMPORTED_MODULE_1_expresstful__["a" /* controller */])('/users'), _dec2 = Object(__WEBPACK_IMPORTED_MODULE_1_expresstful__["c" /* get */])('/'), _dec3 = Object(__WEBPACK_IMPORTED_MODULE_1_expresstful__["c" /* get */])('/all'), _dec(_class = (_class2 = class Users {
  root(req, res) {
    res.send('users');
  }

  all(req, res) {
    res.json([{
      username: 'Frank'
    }, {
      username: 'Jane'
    }]);
  }
}, (_applyDecoratedDescriptor(_class2.prototype, 'root', [_dec2], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class2.prototype, 'root'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'all', [_dec3], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class2.prototype, 'all'), _class2.prototype)), _class2)) || _class);

/***/ })
/******/ ]);