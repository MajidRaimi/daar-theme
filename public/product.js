/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/product.js"
/*!**********************************!*\
  !*** ./src/assets/js/product.js ***!
  \**********************************/
() {

eval("{// Daar Store - Product Page JS\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  initProductGallery();\n});\nfunction initProductGallery() {\n  var thumbnails = document.querySelectorAll('.dar-product-gallery button');\n  var slider = document.getElementById('product-images');\n  if (!thumbnails.length || !slider) return;\n  thumbnails.forEach(function (thumb, index) {\n    thumb.addEventListener('click', function () {\n      // Update active thumbnail\n      thumbnails.forEach(function (t) {\n        return t.classList.remove('border-dar-olive');\n      });\n      thumb.classList.add('border-dar-olive');\n\n      // Navigate slider\n      if (slider.swiper) {\n        slider.swiper.slideTo(index);\n      }\n    });\n  });\n}\n\n//# sourceURL=webpack://daar-theme/./src/assets/js/product.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/product.js"]();
/******/ 	
/******/ })()
;