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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cardService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cardService */ \"./modules/cardService.js\");\n/* harmony import */ var _modules_initFilters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/initFilters */ \"./modules/initFilters.js\");\n/* harmony import */ var _modules_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/render */ \"./modules/render.js\");\n\n\n\n\nwindow.cardService = new _modules_cardService__WEBPACK_IMPORTED_MODULE_0__.CardService();\n\n// eslint-disable-next-line no-undef\nconst cards = cardService.getCards();\n\n(0,_modules_render__WEBPACK_IMPORTED_MODULE_2__.render)(cards);\n(0,_modules_initFilters__WEBPACK_IMPORTED_MODULE_1__.initFilters)(cards);\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/cardService.js":
/*!********************************!*\
  !*** ./modules/cardService.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CardService: () => (/* binding */ CardService)\n/* harmony export */ });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./modules/helper.js\");\n\n\n// eslint-disable-next-line import/prefer-default-export\nclass CardService {\n  // eslint-disable-next-line class-methods-use-this\n  getCards() {\n    return (0,_helper__WEBPACK_IMPORTED_MODULE_0__.getData)('http://localhost:4545/heroes').then((cards) => cards);\n  }\n\n  // eslint-disable-next-line class-methods-use-this\n  getFilterCards(name, value) {\n    return (0,_helper__WEBPACK_IMPORTED_MODULE_0__.getData)(`http://localhost:4545/heroes?${name}_like=${value}`).then((cards) => cards);\n  }\n}\n\n\n//# sourceURL=webpack:///./modules/cardService.js?");

/***/ }),

/***/ "./modules/helper.js":
/*!***************************!*\
  !*** ./modules/helper.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateTags: () => (/* binding */ generateTags),\n/* harmony export */   getData: () => (/* binding */ getData),\n/* harmony export */   locales: () => (/* binding */ locales),\n/* harmony export */   merge: () => (/* binding */ merge)\n/* harmony export */ });\nconst locales = (typeObject, locale = 'en') => {\n  const defaultLocale = 'en';\n  // eslint-disable-next-line no-underscore-dangle\n  const _locales = {\n    en: {\n      card: {\n        name: 'Name',\n        realName: 'Real name',\n        citizenship: 'Citizenship',\n        species: 'Species',\n        gender: 'Gender',\n        birthDay: 'Birth day',\n        deathDay: 'Death day',\n        status: 'Status',\n        actors: 'Actors',\n        photo: 'Photo',\n        movies: 'Movies',\n      },\n    },\n    ru: {\n      card: {\n        name: 'Имя',\n        realName: 'Настоящее имя',\n        citizenship: 'Гражданство',\n        species: 'Вид',\n        gender: 'Пол',\n        birthDay: 'День рождения',\n        deathDay: 'День смерти',\n        status: 'Статус',\n        actors: 'Актёр',\n        photo: 'Фотография',\n        movies: 'Фильмы',\n      },\n    },\n  };\n\n  if (Object.keys(_locales[locale][typeObject]).length) {\n    return _locales[locale][typeObject];\n  }\n\n  return _locales[defaultLocale][typeObject];\n};\n\nconst generateTags = (typeTag, innerText = '') => {\n  // eslint-disable-next-line no-shadow\n  const getTag = (typeTag) => document.createElement(typeTag);\n  const tag = getTag(typeTag);\n  tag.innerText = innerText;\n\n  return tag;\n};\n\n// eslint-disable-next-line arrow-body-style\nconst getData = (url) => {\n  return fetch(url)\n    .then((response) => response.json())\n    .catch((error) => error);\n};\n\n// eslint-disable-next-line no-shadow\nconst merge = (a, b, condition = (a, b) => a === b) => {\n  const temp = [...a];\n\n  // eslint-disable-next-line max-len\n  b.forEach((bItem) => (temp.some((tempItem) => condition(bItem, tempItem)) ? null : temp.push(bItem)));\n\n  return temp;\n};\n\n\n//# sourceURL=webpack:///./modules/helper.js?");

/***/ }),

/***/ "./modules/initFilters.js":
/*!********************************!*\
  !*** ./modules/initFilters.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initFilters: () => (/* binding */ initFilters)\n/* harmony export */ });\n/* harmony import */ var _initMoviesFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initMoviesFilter */ \"./modules/initMoviesFilter.js\");\n\n\n// eslint-disable-next-line import/prefer-default-export\nconst initFilters = async (cards) => {\n  (0,_initMoviesFilter__WEBPACK_IMPORTED_MODULE_0__.initMoviesFilter)(cards);\n};\n\n\n//# sourceURL=webpack:///./modules/initFilters.js?");

/***/ }),

/***/ "./modules/initMoviesFilter.js":
/*!*************************************!*\
  !*** ./modules/initMoviesFilter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initMoviesFilter: () => (/* binding */ initMoviesFilter)\n/* harmony export */ });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./modules/helper.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ \"./modules/render.js\");\n\n\n\n// eslint-disable-next-line import/prefer-default-export\nconst initMoviesFilter = async (cards) => {\n  const filterMoviesSelect = document.getElementById('filter-movies');\n  let movies = [];\n\n  const getMoviesList = async () => {\n    // eslint-disable-next-line no-undef\n    await cards.then((data) => {\n      data.forEach((hero) => {\n        const heroMovies = typeof hero.movies !== 'undefined' ? hero.movies : [];\n        movies = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.merge)(movies, heroMovies);\n      });\n    });\n  };\n\n  const createMoviesList = () => {\n    movies.forEach((movie) => {\n      const option = document.createElement('option');\n\n      // eslint-disable-next-line no-multi-assign\n      option.value = option.textContent = movie;\n      filterMoviesSelect.appendChild(option);\n    });\n  };\n\n  filterMoviesSelect.addEventListener('change', (e) => {\n    e.preventDefault();\n    const movieName = e.target.value;\n\n    // eslint-disable-next-line no-undef\n    (0,_render__WEBPACK_IMPORTED_MODULE_1__.render)(cardService.getFilterCards('movies', movieName));\n  });\n\n  await getMoviesList();\n  createMoviesList();\n};\n\n\n//# sourceURL=webpack:///./modules/initMoviesFilter.js?");

/***/ }),

/***/ "./modules/render.js":
/*!***************************!*\
  !*** ./modules/render.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./modules/helper.js\");\n\n\n// eslint-disable-next-line import/prefer-default-export\nconst render = (cards, locale = 'en') => {\n  const cardList = document.getElementById('card-list');\n  cardList.innerHTML = '';\n\n  const createCard = (card) => {\n    const type = 'card';\n    const cardBlock = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.generateTags)('div');\n    const table = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.generateTags)('table');\n    const className = `card${new Date().getTime()}`;\n\n    cardBlock.classList.add(className);\n    // eslint-disable-next-line no-restricted-syntax, guard-for-in\n    for (const key in card) {\n      const tr = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.generateTags)('tr');\n      const tdName = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.generateTags)('td');\n      const tdValue = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.generateTags)('td');\n\n      tdName.innerText = `${(0,_helper__WEBPACK_IMPORTED_MODULE_0__.locales)(type, locale)[key]}: `;\n\n      if (key === 'photo') {\n        const img = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.generateTags)('img');\n        img.setAttribute('src', `./data/${card[key]}`);\n        // eslint-disable-next-line no-param-reassign\n        tdValue.append(img);\n      } else {\n        tdValue.innerText = card[key];\n      }\n\n      tr.append(tdName);\n      tr.append(tdValue);\n      table.append(tr);\n    }\n    cardBlock.append(table);\n\n    return cardBlock;\n  };\n\n  try {\n    cards.then((data) => {\n      data.forEach((card) => {\n        cardList.append(createCard(card));\n        cardList.append(document.createElement('br'));\n      });\n      cardList.append(cards);\n    });\n  } catch (error) {\n    console.log(error.message);\n  }\n};\n\n\n//# sourceURL=webpack:///./modules/render.js?");

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