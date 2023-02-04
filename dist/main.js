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

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://online_bookstore/./src/styles/index.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ \"./src/styles/index.scss\");\n/* harmony import */ var _js_Slider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/Slider.js */ \"./src/js/Slider.js\");\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://online_bookstore/./src/index.js?");

/***/ }),

/***/ "./src/js/Slider.js":
/*!**************************!*\
  !*** ./src/js/Slider.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"images\": () => (/* binding */ images),\n/* harmony export */   \"initSlider\": () => (/* binding */ initSlider)\n/* harmony export */ });\nlet images = [{\r\n    url: \"./static/images/banner_01.jpg\"\r\n  }, {\r\n    url: \"./static/images/banner_02.jpg\"\r\n  }, {\r\n    url: \"./static/images/banner_03.jpg\"\r\n}];\r\n\r\nfunction initSlider(options) {\r\n  if (!images || !images.length) return;\r\n  \r\n  options = options || {\r\n    dots: true,\r\n    autoplay: false\r\n  };\r\n  \r\n  let sliderImages = document.querySelector(\".slider__images\");\r\n  let sliderDots = document.querySelector(\".slider__dots\");\r\n  \r\n  initImages();\r\n\r\n  if (options.dots) {\r\n    initDots();\r\n  }\r\n  \r\n  if (options.autoplay) {\r\n    initAutoplay();\r\n  }\r\n  \r\n  function initImages() {\r\n    images.forEach((image, index) => {\r\n      let imageDiv = `<div class=\"image n${index} ${index === 0? \"active\" : \"\"}\" style=\"background-image:url(${images[index].url});\" data-index=\"${index}\"></div>`;\r\n      sliderImages.innerHTML += imageDiv;\r\n    });\r\n  }\r\n  \r\n  function initDots() {\r\n    images.forEach((image, index) => {\r\n      let dot = `<div class=\"slider__dots-item n${index} ${index === 0? \"active\" : \"\"}\" data-index=\"${index}\"></div>`;\r\n      sliderDots.innerHTML += dot;\r\n    });\r\n    sliderDots.querySelectorAll(\".slider__dots-item\").forEach(dot => {\r\n      dot.addEventListener(\"click\", function() {\r\n        moveSlider(this.dataset.index);\r\n      })\r\n    })\r\n  }\r\n  \r\n  function moveSlider(num) {\r\n    sliderImages.querySelector(\".active\").classList.remove(\"active\");\r\n    sliderImages.querySelector(\".n\" + num).classList.add(\"active\");\r\n    if (options.dots) {\r\n      sliderDots.querySelector(\".active\").classList.remove(\"active\");\r\n      sliderDots.querySelector(\".n\" + num).classList.add(\"active\");\r\n    }\r\n  }\r\n  \r\n  function initAutoplay() {\r\n    setInterval(() => {\r\n      let curNumber = +sliderImages.querySelector(\".active\").dataset.index;\r\n      let nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;\r\n      moveSlider(nextNumber);\r\n    }, options.autoplayInterval);\r\n  }\r\n}\r\n\r\nlet sliderOptions = {\r\n  dots: true,\r\n  autoplay: true,\r\n  autoplayInterval: 1000\r\n};\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function() {\r\n  initSlider(sliderOptions);\r\n});\r\n\r\n\n\n//# sourceURL=webpack://online_bookstore/./src/js/Slider.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;