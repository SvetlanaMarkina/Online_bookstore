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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ \"./src/styles/index.scss\");\n/* harmony import */ var _js_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/Card */ \"./src/js/Card.js\");\n/* harmony import */ var _js_Categories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/Categories */ \"./src/js/Categories.js\");\n/* harmony import */ var _js_Slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/Slider */ \"./src/js/Slider.js\");\n/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./key */ \"./src/key.js\");\n/* harmony import */ var _js_LoadMore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/LoadMore */ \"./src/js/LoadMore.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst cartObj = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : { 'cart': [] }\r\nconst cart = cartObj['cart']\r\n\r\nconst categoriesData = ['Architecture', 'Art & Fashion', 'Biography', 'Business', 'Crafts & Hobbies', 'Drama', 'Fiction', 'Food & Drink', 'Health & Wellbeing', 'History & Politics', 'Humor', 'Poetry', 'Psychology', 'Science', 'Technology', 'Travel & Maps']\r\nconst activeCategory = categoriesData[0]\r\n\r\nconst categoryList = document.querySelector('.books__categories')\r\ncategoryList.insertAdjacentHTML('afterbegin', (0,_js_Categories__WEBPACK_IMPORTED_MODULE_2__.Categories)(categoriesData, activeCategory))\r\n;(0,_js_Categories__WEBPACK_IMPORTED_MODULE_2__.categoryListener)(cart)\r\n\r\nlet startIndex = 0\r\nlet maxResults = 6\r\n\r\nconst url = `https://www.googleapis.com/books/v1/volumes?q=\"subject:${activeCategory}\"&key=${_key__WEBPACK_IMPORTED_MODULE_4__.apiKey.key}&printType=books&startIndex=${startIndex}&maxResults=${maxResults}&langRestrict=en`\r\nconst bookSection = document.querySelector('.books')\r\n\r\nfetch(url)\r\n    .then(data => data.json())\r\n    .then(data => {\r\n        const books = data.items\r\n        const booksList = bookSection.querySelector('.books__info')\r\n        books.map(book => {\r\n            booksList.insertAdjacentHTML('beforeend', (0,_js_Card__WEBPACK_IMPORTED_MODULE_1__.Card)(book))\r\n        })\r\n        ;(0,_js_Card__WEBPACK_IMPORTED_MODULE_1__.cardBtnListener)(cart)\r\n        bookSection.insertAdjacentHTML('beforeend', (0,_js_LoadMore__WEBPACK_IMPORTED_MODULE_5__.LoadMore)())\r\n        ;(0,_js_LoadMore__WEBPACK_IMPORTED_MODULE_5__.loadMoreListener)(startIndex, maxResults, cart)\r\n    })\r\n    .catch(() => alert('Ошибка получения данных с сервера'))\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://online_bookstore/./src/index.js?");

/***/ }),

/***/ "./src/js/Books.js":
/*!*************************!*\
  !*** ./src/js/Books.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formatAuthor\": () => (/* binding */ formatAuthor),\n/* harmony export */   \"formatAvRate\": () => (/* binding */ formatAvRate),\n/* harmony export */   \"formatDescr\": () => (/* binding */ formatDescr),\n/* harmony export */   \"formatPrice\": () => (/* binding */ formatPrice)\n/* harmony export */ });\nfunction formatAuthor(authorsArr) {\r\n    let authorsStr = ''\r\n  \r\n    if (!authorsArr) {\r\n      authorsStr = 'No author'\r\n      return authorsStr\r\n    }\r\n  \r\n    authorsArr.forEach((author, index) => {\r\n      if (index !== (+authorsArr.length - 1)) {\r\n        authorsStr += `${author}, `\r\n      } else {\r\n        authorsStr += `${author}`\r\n      }\r\n    })\r\n    return authorsStr\r\n  };\r\n  \r\n  function formatDescr(description) {\r\n    if (!description) {\r\n      return ''\r\n    }\r\n  \r\n    const arrDescr = [...description.split(' ', 20)]\r\n    return arrDescr.join(' ') + '...'\r\n  }\r\n  \r\n  function formatPrice(priceObj) {\r\n    let resPrice = ''\r\n    if (!priceObj) {\r\n      resPrice = ''\r\n      return resPrice\r\n    }\r\n  \r\n    if (priceObj.currencyCode === \"RUB\") {\r\n      resPrice = `&#8381; ${priceObj.amount}`\r\n    } else {\r\n      resPrice = `${priceObj.amount} ${priceObj.currencyCode}`\r\n    }\r\n  \r\n    return resPrice\r\n  };\r\n  \r\n  function formatAvRate(rateNum) {\r\n    let resultStr = ''\r\n    let maxStars = 5\r\n  \r\n    if (!rateNum) {\r\n      return resultStr\r\n    };\r\n  \r\n    const copyNum = rateNum;\r\n    const intPartNum = Math.trunc(copyNum);\r\n    const decPartNum = (copyNum - intPartNum).toFixed(2);\r\n    const parcent = decPartNum * 100;\r\n  \r\n    for (let i = intPartNum; i > 0; i--) {\r\n      resultStr += `\r\n      <svg width=\"12\" height=\"11\" viewBox=\"0 0 12 11\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <path d=\"M6 0L7.80568 3.5147L11.7063 4.1459L8.92165 6.9493L9.52671 10.8541L6 9.072L2.47329 10.8541L3.07835 6.9493L0.293661 4.1459L4.19432 3.5147L6 0Z\" fill=\"#F2C94C\"/>\r\n      </svg>`\r\n    };\r\n    if (intPartNum < maxStars) {\r\n      resultStr += `\r\n      <svg width=\"12\" height=\"11\" viewBox=\"0 0 12 11\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <defs>\r\n          <mask id=\"half\">\r\n            <rect x=\"0\" y=\"0\" width=\"12\" height=\"12\" fill=\"white\" />\r\n            <rect x=\"${parcent}%\" y=\"0\" width=\"12\" height=\"12\" fill=\"red\" /> \r\n          </mask>\r\n        </defs>\r\n        <path d=\"M6 0L7.80568 3.5147L11.7063 4.1459L8.92165 6.9493L9.52671 10.8541L6 9.072L2.47329 10.8541L3.07835 6.9493L0.293661 4.1459L4.19432 3.5147L6 0Z\" fill=\"#F2C94C\" mask=\"url(#half)\"/>\r\n    </svg>`\r\n    };\r\n    if (intPartNum < (maxStars - 1)) {\r\n      for (let i = ((maxStars - 1) - intPartNum); i > 0; i--) {\r\n        resultStr += `\r\n        <svg width=\"12\" height=\"11\" viewBox=\"0 0 12 11\" xmlns=\"http://www.w3.org/2000/svg\">\r\n          <path d=\"M6 0L7.80568 3.5147L11.7063 4.1459L8.92165 6.9493L9.52671 10.8541L6 9.072L2.47329 10.8541L3.07835 6.9493L0.293661 4.1459L4.19432 3.5147L6 0Z\" fill=\"#EEEDF5\"/>\r\n        </svg>`\r\n      }\r\n    };\r\n  \r\n    return resultStr;\r\n  }\r\n  \r\n  \n\n//# sourceURL=webpack://online_bookstore/./src/js/Books.js?");

/***/ }),

/***/ "./src/js/Card.js":
/*!************************!*\
  !*** ./src/js/Card.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Card\": () => (/* binding */ Card),\n/* harmony export */   \"cardBtnListener\": () => (/* binding */ cardBtnListener)\n/* harmony export */ });\n/* harmony import */ var _Books__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Books */ \"./src/js/Books.js\");\n\r\nlet placeholderImg = [{\r\n  url: \"../../dist/images/placeholder.jpg\"\r\n}];\r\n\r\n\r\nfunction Card(book) {\r\n  const authors = (0,_Books__WEBPACK_IMPORTED_MODULE_0__.formatAuthor)(book.volumeInfo.authors);\r\n  const title = book.volumeInfo.title;\r\n  const description = (0,_Books__WEBPACK_IMPORTED_MODULE_0__.formatDescr)(book.volumeInfo.description);\r\n  const price = (0,_Books__WEBPACK_IMPORTED_MODULE_0__.formatPrice)(book.saleInfo.listPrice);\r\n  const imageUrl = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : placeholderImg;\r\n  const id = book.id;\r\n  const averageRating = (0,_Books__WEBPACK_IMPORTED_MODULE_0__.formatAvRate)(book.volumeInfo.averageRating) ? (0,_Books__WEBPACK_IMPORTED_MODULE_0__.formatAvRate)(book.volumeInfo.averageRating) : '';\r\n  const ratingCount = book.volumeInfo.ratingsCount ? `${book.volumeInfo.ratingsCount}  revies` : \"\";\r\n\r\n  const html = `<li class=\"books__item\" data-id=\"${id}\">\r\n  <div style=\"background-image: url(${imageUrl});\" class=\"cover\"></div>\r\n  <div class=\"descr\">\r\n    <p class=\"author\">${authors}</p>\r\n    <h2 class=\"title\">${title}</h2>\r\n    <div class=\"rate\">\r\n      ${averageRating}\r\n      <span>${ratingCount}</span>\r\n    </div>\r\n    <p class=\"text\">${description}</p>\r\n    <div class=\"price\">${price}</div>\r\n    <button class=\"buyBtn\" data-id=\"${id}\">buy now</button>\r\n  </div>\r\n</li>`\r\n  return html\r\n}\r\n\r\nconst cardBtnListener = (cart) => {\r\n  const booksItems = document.querySelectorAll(\".books__item\")\r\n\r\n  const listener = (event) => {\r\n    const cartCountElement = document.querySelector('#cartCount')\r\n    let curCount = +cartCountElement.textContent\r\n    if (!cart.includes(event.target.dataset.id)) {\r\n      cartCountElement.textContent = curCount + 1\r\n      event.target.classList.add('buyBtn-inCart')\r\n      event.target.textContent = 'in the cart'\r\n      cart.push(event.target.dataset.id)\r\n      localStorage.setItem(\"cart\", JSON.stringify({ \"cart\": cart }))\r\n    } else {\r\n      cartCountElement.textContent = curCount - 1\r\n      event.target.classList.remove('buyBtn-inCart')\r\n      event.target.textContent = 'buy now'\r\n      cart.splice(cart.indexOf(event.target.dataset.id, 1))\r\n      localStorage.setItem(\"cart\", JSON.stringify({ \"cart\": cart }))\r\n    }\r\n\r\n  };\r\n\r\n  booksItems.forEach(book => {\r\n    const bookBtn = book.querySelector('.buyBtn')\r\n    const cartCountElement = document.querySelector('#cartCount')\r\n    let curCount = +cartCountElement.textContent\r\n    if (cart.includes(bookBtn.dataset.id)) {\r\n      cartCountElement.textContent = curCount + 1\r\n      bookBtn.classList.add('buyBtn-inCart')\r\n      bookBtn.textContent = 'in the cart'\r\n      bookBtn.addEventListener('click', listener)\r\n    } else {\r\n      bookBtn.addEventListener('click', listener)\r\n    }\r\n  });\r\n}\r\n\r\n\n\n//# sourceURL=webpack://online_bookstore/./src/js/Card.js?");

/***/ }),

/***/ "./src/js/Categories.js":
/*!******************************!*\
  !*** ./src/js/Categories.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Categories\": () => (/* binding */ Categories),\n/* harmony export */   \"categoryListener\": () => (/* binding */ categoryListener),\n/* harmony export */   \"getActiveCategory\": () => (/* binding */ getActiveCategory)\n/* harmony export */ });\n/* harmony import */ var _key_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../key.js */ \"./src/key.js\");\n/* harmony import */ var _Card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.js */ \"./src/js/Card.js\");\n\r\n\r\n\r\nlet activeCategory = ''\r\n\r\nfunction Categories(data) {\r\n  let html = ``\r\n  data.forEach((category, index) => {\r\n    if (index === 0) {\r\n      html += `<li class=\"category category-active\">${category}</li>`\r\n    } else {\r\n      html += `<li class=\"category\">${category}</li>`\r\n    }\r\n  })\r\n  activeCategory = data[0]\r\n  return html\r\n}\r\n\r\nconst categoryListener = (cart) => {\r\n  const categoryNodeList = document.querySelectorAll('.category')\r\n  const listener = (event) => {\r\n    if (event.target.classList.contains('category-active')) return\r\n    categoryNodeList.forEach(item => {\r\n      if (item.classList.contains('category-active')) {\r\n        item.classList.remove('category-active')\r\n        return\r\n      }\r\n    })\r\n\r\n    event.target.classList.add('category-active')\r\n    \r\n    const url = `https://www.googleapis.com/books/v1/volumes?q=\"subject:${event.target.innerText}\"&key=${_key_js__WEBPACK_IMPORTED_MODULE_0__.apiKey.key}&printType=books&startIndex=0&maxResults=6&langRestrict=en`\r\n\r\n    activeCategory = event.target.innerText\r\n\r\n    fetch(url)\r\n      .then(data => data.json())\r\n      .then(data => {\r\n        const books = data.items\r\n        const booksList = document.querySelector('.books__info')\r\n        booksList.querySelectorAll('.books__item').forEach(item => booksList.removeChild(item))\r\n        books.map(book => booksList.insertAdjacentHTML('beforeend', (0,_Card_js__WEBPACK_IMPORTED_MODULE_1__.Card)(book)))\r\n        ;(0,_Card_js__WEBPACK_IMPORTED_MODULE_1__.cardBtnListener)(cart)\r\n      })\r\n      .catch(() => alert('Ошибка получения данных с сервера'))\r\n  }\r\n  categoryNodeList.forEach(item => item.addEventListener('click', listener))\r\n}\r\n\r\nconst getActiveCategory = () => {\r\n  return activeCategory\r\n}\r\n\r\n\n\n//# sourceURL=webpack://online_bookstore/./src/js/Categories.js?");

/***/ }),

/***/ "./src/js/LoadMore.js":
/*!****************************!*\
  !*** ./src/js/LoadMore.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LoadMore\": () => (/* binding */ LoadMore),\n/* harmony export */   \"loadMoreListener\": () => (/* binding */ loadMoreListener)\n/* harmony export */ });\n/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../key */ \"./src/key.js\");\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card */ \"./src/js/Card.js\");\n/* harmony import */ var _Categories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Categories */ \"./src/js/Categories.js\");\n\r\n\r\n\r\n\r\n\r\nfunction LoadMore() {\r\n  const html = `<button class=\"moreBtn\">load more</button>`\r\n  return html\r\n};\r\n\r\nconst loadMoreListener = (startIndex, maxResults, cart) => {\r\n  const btnLoadMore = document.querySelector('.moreBtn')\r\n  const bookSection = document.querySelector('.books')\r\n  const listener = () => {\r\n    startIndex += maxResults\r\n    const url = `https://www.googleapis.com/books/v1/volumes?q=\"subject:${(0,_Categories__WEBPACK_IMPORTED_MODULE_2__.getActiveCategory)()}\"&key=${_key__WEBPACK_IMPORTED_MODULE_0__.apiKey.key}&printType=books&startIndex=${startIndex}&maxResults=${maxResults}&langRestrict=en`;\r\n    fetch(url)\r\n      .then(data => data.json())\r\n      .then(data => {\r\n        const books = data.items\r\n        const booksList = bookSection.querySelector('.books__info')\r\n        books.map(book => {\r\n          booksList.insertAdjacentHTML('beforeend', (0,_Card__WEBPACK_IMPORTED_MODULE_1__.Card)(book))\r\n        })\r\n        ;(0,_Card__WEBPACK_IMPORTED_MODULE_1__.cardBtnListener)(cart)\r\n      })\r\n      .catch(() => alert('Ошибка получения данных с сервера'))\r\n  }\r\n\r\n  btnLoadMore.addEventListener('click', listener)\r\n}\r\n\r\n\n\n//# sourceURL=webpack://online_bookstore/./src/js/LoadMore.js?");

/***/ }),

/***/ "./src/js/Slider.js":
/*!**************************!*\
  !*** ./src/js/Slider.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"images\": () => (/* binding */ images),\n/* harmony export */   \"initSlider\": () => (/* binding */ initSlider)\n/* harmony export */ });\nlet images = [{\r\n    url: \"./dist/images/banner_01.jpg\"\r\n  }, {\r\n    url: \"./dist/images/banner_02.jpg\"\r\n  }, {\r\n    url: \"./dist/images/banner_03.jpg\"\r\n}];\r\n\r\nfunction initSlider(options) {\r\n  if (!images || !images.length) return;\r\n  \r\n  options = options || {\r\n    dots: true,\r\n    autoplay: false\r\n  };\r\n  \r\n  let sliderImages = document.querySelector(\".slider__images\");\r\n  let sliderDots = document.querySelector(\".slider__dots\");\r\n  \r\n  initImages();\r\n\r\n  if (options.dots) {\r\n    initDots();\r\n  }\r\n  \r\n  if (options.autoplay) {\r\n    initAutoplay();\r\n  }\r\n  \r\n  function initImages() {\r\n    images.forEach((image, index) => {\r\n      let imageDiv = `<div class=\"image n${index} ${index === 0? \"active\" : \"\"}\" style=\"background-image:url(${images[index].url});\" data-index=\"${index}\"></div>`;\r\n      sliderImages.innerHTML += imageDiv;\r\n    });\r\n  }\r\n  \r\n  function initDots() {\r\n    images.forEach((image, index) => {\r\n      let dot = `<div class=\"slider__dots-item n${index} ${index === 0? \"active\" : \"\"}\" data-index=\"${index}\"></div>`;\r\n      sliderDots.innerHTML += dot;\r\n    });\r\n    sliderDots.querySelectorAll(\".slider__dots-item\").forEach(dot => {\r\n      dot.addEventListener(\"click\", function() {\r\n        moveSlider(this.dataset.index);\r\n      })\r\n    })\r\n  }\r\n  \r\n  function moveSlider(num) {\r\n    sliderImages.querySelector(\".active\").classList.remove(\"active\");\r\n    sliderImages.querySelector(\".n\" + num).classList.add(\"active\");\r\n    if (options.dots) {\r\n      sliderDots.querySelector(\".active\").classList.remove(\"active\");\r\n      sliderDots.querySelector(\".n\" + num).classList.add(\"active\");\r\n    }\r\n  }\r\n  \r\n  function initAutoplay() {\r\n    setInterval(() => {\r\n      let curNumber = +sliderImages.querySelector(\".active\").dataset.index;\r\n      let nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;\r\n      moveSlider(nextNumber);\r\n    }, options.autoplayInterval);\r\n  }\r\n}\r\n\r\nlet sliderOptions = {\r\n  dots: true,\r\n  autoplay: true,\r\n  autoplayInterval: 5000\r\n};\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function() {\r\n  initSlider(sliderOptions);\r\n});\r\n\r\n\n\n//# sourceURL=webpack://online_bookstore/./src/js/Slider.js?");

/***/ }),

/***/ "./src/key.js":
/*!********************!*\
  !*** ./src/key.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apiKey\": () => (/* binding */ apiKey)\n/* harmony export */ });\nconst apiKey = {\r\n    key: 'AIzaSyBTPi-K3FZ2TM0iqrFGPNIHWRqrc1D5Txk'\r\n  }\r\n  \n\n//# sourceURL=webpack://online_bookstore/./src/key.js?");

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