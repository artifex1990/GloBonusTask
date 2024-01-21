/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_generateCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/generateCard */ \"./modules/generateCard.js\");\n/* harmony import */ var _modules_getdata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/getdata */ \"./modules/getdata.js\");\n\n\n\nconst data = await (0,_modules_getdata__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('./data/dbHeroes.json');\nconst app = document.getElementById('app');\nconst cards = document.createElement('div');\n\ncards.classList.add('cards');\n\ndata.forEach((element) => {\n  cards.append((0,_modules_generateCard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element));\n  cards.appendChild(document.createElement('br'));\n});\n\napp.append(cards);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/generateCard.js":
/*!*********************************!*\
  !*** ./modules/generateCard.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./modules/helper.js\");\n\n\nconst generateCard = (card) => {\n  const type = 'card';\n  const cardBlock = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.generateTags)('div');\n  const table = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.generateTags)('table');\n\n  const className = `card${new Date().getTime()}`;\n  cardBlock.classList.add(className);\n  // eslint-disable-next-line no-restricted-syntax, guard-for-in\n  for (const key in card) {\n    const tr = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.generateTags)('tr');\n    const tdName = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.generateTags)('td');\n    const tdValue = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.generateTags)('td');\n    tdName.innerText = `${(0,_helper__WEBPACK_IMPORTED_MODULE_0__.locales)(type)[key]}: `;\n    if (key === 'photo') {\n      const img = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.generateTags)('img');\n      img.setAttribute('src', `./data/${card[key]}`);\n      // eslint-disable-next-line no-param-reassign\n      tdValue.append(img);\n    } else {\n      tdValue.innerText = card[key];\n    }\n    tr.append(tdName);\n    tr.append(tdValue);\n    table.append(tr);\n  }\n  cardBlock.append(table);\n\n  return cardBlock;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateCard);\n\n\n//# sourceURL=webpack:///./modules/generateCard.js?");

/***/ }),

/***/ "./modules/getdata.js":
/*!****************************!*\
  !*** ./modules/getdata.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getData = (url) => fetch(url)\n  .then((response) => response.json())\n  .then((data) => data)\n  .catch((error) => error);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n\n//# sourceURL=webpack:///./modules/getdata.js?");

/***/ }),

/***/ "./modules/helper.js":
/*!***************************!*\
  !*** ./modules/helper.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateTags: () => (/* binding */ generateTags),\n/* harmony export */   locales: () => (/* binding */ locales)\n/* harmony export */ });\nconst locales = (typeObject, locale = 'en') => {\n  const defaultLocale = 'en';\n  // eslint-disable-next-line no-underscore-dangle\n  const _locales = {\n    en: {\n      card: {\n        name: 'Name',\n        realName: 'Real name',\n        citizenship: 'Citizenship',\n        species: 'Species',\n        gender: 'Gender',\n        birthDay: 'Birth day',\n        deathDay: 'Death day',\n        status: 'Status',\n        actors: 'Actors',\n        photo: 'Photo',\n        movies: 'Movies',\n      },\n    },\n  };\n\n  if (_locales[locale].length) {\n    return _locales[locale][typeObject];\n  }\n\n  return _locales[defaultLocale][typeObject];\n};\n\nconst generateTags = (typeTag, innerText = '') => {\n  // eslint-disable-next-line no-shadow\n  const getTag = (typeTag) => document.createElement(typeTag);\n  const tag = getTag(typeTag);\n  tag.innerText = innerText;\n\n  return tag;\n};\n\n// eslint-disable-next-line import/prefer-default-export\n\n\n\n//# sourceURL=webpack:///./modules/helper.js?");

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;