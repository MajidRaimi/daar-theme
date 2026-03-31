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

/***/ "./src/assets/js/home.js"
/*!*******************************!*\
  !*** ./src/assets/js/home.js ***!
  \*******************************/
() {

eval("{// Daar Store - Home Page JS\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  initHeroAnimations();\n});\nfunction initHeroAnimations() {\n  var hero = document.querySelector('.dar-hero');\n  if (!hero) return;\n\n  // Fade in hero content\n  var content = hero.querySelector('.container');\n  if (content) {\n    content.style.opacity = '0';\n    content.style.transform = 'translateY(20px)';\n    content.style.transition = 'opacity 0.6s ease, transform 0.6s ease';\n    requestAnimationFrame(function () {\n      content.style.opacity = '1';\n      content.style.transform = 'translateY(0)';\n    });\n  }\n}\n\n//# sourceURL=webpack://daar-theme/./src/assets/js/home.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/home.js"]();
/******/ 	
/******/ })()
;