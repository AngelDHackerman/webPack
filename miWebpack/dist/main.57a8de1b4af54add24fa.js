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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _templates_Template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @templates/Template.js */ \"./src/templates/Template.js\");\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styles/main.css */ \"./src/styles/main.css\");\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_vars_styl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @styles/vars.styl */ \"./src/styles/vars.styl\");\n\n\n\n\n(async function App() {\n  const main =  false || document.getElementById('main');\n  main.innerHTML = await (0,_templates_Template_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n})();\n\n//# sourceURL=webpack://js-portfolio/./src/index.js?");

/***/ }),

/***/ "./src/templates/Template.js":
/*!***********************************!*\
  !*** ./src/templates/Template.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_getData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils/getData.js */ \"./src/utils/getData.js\");\n/* harmony import */ var _images_github_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @images/github.png */ \"./src/assets/images/github.png\");\n/* harmony import */ var _images_twitter_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @images/twitter.png */ \"./src/assets/images/twitter.png\");\n/* harmony import */ var _images_instagram_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @images/instagram.png */ \"./src/assets/images/instagram.png\");\n\n\n\n\n\nconst Template = async () => {\n  const data = await (0,_utils_getData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  const view = `\n    <div class=\"About\">\n      <div class=\"card\">\n        <div class=\"card_details\">\n          <div class=\"card_photo center circle\">\n            <img src=\"${data.picture.large}\" alt=\"${data.name.first}\">\n            <svg viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\" style=\"enable-background:new -580 439 577.9 194;\"\n              xml:space=\"preserve\">\n              <circle cx=\"50\" cy=\"50\" r=\"40\" />\n            </svg>\n          </div>\n          <p class=\"card_title\">Hi, My name is</p>\n          <p class=\"card_value\">${data.name.first} ${data.name.last}</p>\n        </div>\n        <div class=\"card_userdata\">\n          <ul>\n            <li>${data.email}</li>\n            <li>${data.location.country}</li>\n          </ul>\n        </div>\n        <div class=\"card_social\">\n          <a href=\"https://twitter.com/gndx\">\n            <img src=\"${_images_twitter_png__WEBPACK_IMPORTED_MODULE_2__}\" />\n          </a>\n          <a href=\"https://github.com/gndx\">\n            <img src=\"${_images_github_png__WEBPACK_IMPORTED_MODULE_1__}\" />\n          </a>\n          <a href=\"https://instagram.com/gndx\">\n            <img src=\"${_images_instagram_png__WEBPACK_IMPORTED_MODULE_3__}\" />\n          </a>\n        </div>\n      </div>\n    </div>\n  `;\n  return view;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Template);\n\n//# sourceURL=webpack://js-portfolio/./src/templates/Template.js?");

/***/ }),

/***/ "./src/utils/getData.js":
/*!******************************!*\
  !*** ./src/utils/getData.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst API = \"undefined\";\n\nconst getData = async id => {\n  const apiURl = id ? `${API}${id}` : API;\n\n  try {\n    const response = await fetch(apiURl);\n    const data = await response.json();\n    return data.results[0];\n  } catch (error) {\n    console.log('Fetch Error', error);\n  }\n\n  ;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack://js-portfolio/./src/utils/getData.js?");

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ (() => {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nHookWebpackError: Cannot find module '../assets/fonts/ubuntu-regular.woff2'\\n    at tryRunOrWebpackError (/home/angel/platziProgramador/escuelaDeDesarrolloWeb/webPack/miWebpack/node_modules/webpack/lib/HookWebpackError.js:88:9)\\n    at __webpack_require_module__ (/home/angel/platziProgramador/escuelaDeDesarrolloWeb/webPack/miWebpack/node_modules/webpack/lib/Compilation.js:5020:12)\\n    at __webpack_require__ (/home/angel/platziProgramador/escuelaDeDesarrolloWeb/webPack/miWebpack/node_modules/webpack/lib/Compilation.js:4977:18)\\n    at /home/angel/platziProgramador/escuelaDeDesarrolloWeb/webPack/miWebpack/node_modules/webpack/lib/Compilation.js:5048:20\\n    at symbolIterator (/home/angel/platziProgramador/escuelaDeDesarrolloWeb/webPack/miWebpack/node_modules/neo-async/async.js:3485:9)\\n    at timesSync (/home/angel/platziProgramador/escuelaDeDesarrolloWeb/webPack/miWebpack/node_modules/neo-async/async.js:2297:7)\\n    at Object.eachLimit (/home/angel/platziProgramador/escuelaDeDesarrolloWeb/webPack/miWebpack/node_modules/neo-async/async.js:3463:5)\\n    at /home/angel/platziProgramador/escuelaDeDesarrolloWeb/webPack/miWebpack/node_modules/webpack/lib/Compilation.js:4920:16\\n    at symbolIterator (/home/angel/platziProgramador/escuelaDeDesarrolloWeb/webPack/miWebpack/node_modules/neo-async/async.js:3485:9)\\n    at timesSync (/home/angel/platziProgramador/escuelaDeDesarrolloWeb/webPack/miWebpack/node_modules/neo-async/async.js:2297:7)\\n-- inner error --\\nError: Cannot find module '../assets/fonts/ubuntu-regular.woff2'\\n    at webpackMissingModule (/home/angel/platziProgramador/escuelaDeDesarrolloWeb/webPack/miWebpack/node_modules/css-loader/dist/cjs.js!/home/angel/platziProgramador/escuelaDeDesarrolloWeb/webPack/miWebpack/node_modules/stylus-loader/dist/cjs.js!/home/angel/platziProgramador/escuelaDeDesarrolloWeb/webPack/miWebpack/src/styles/main.css:15:113)\\n    at Module.<anonymous> (/home/angel/platziProgramador/escuelaDeDesarrolloWeb/webPack/miWebpack/node_modules/css-loader/dist/cjs.js!/home/angel/platziProgramador/escuelaDeDesarrolloWeb/webPack/miWebpack/node_modules/stylus-loader/dist/cjs.js!/home/angel/platziProgramador/escuelaDeDesarrolloWeb/webPack/miWebpack/src/styles/main.css:15:224)\\n    at /home/angel/platziProgramador/escuelaDeDesarrolloWeb/webPack/miWebpack/node_modules/webpack/lib/javascript/JavascriptModulesPlugin.js:432:11\\n    at Hook.eval [as call] (eval at create (/home/angel/platziProgramador/escuelaDeDesarrolloWeb/webPack/miWebpack/node_modules/tapable/lib/HookCodeFactory.js:19:10), <anonymous>:7:1)\\n    at /home/angel/platziProgramador/escuelaDeDesarrolloWeb/webPack/miWebpack/node_modules/webpack/lib/Compilation.js:5022:39\\n    at tryRunOrWebpackError (/home/angel/platziProgramador/escuelaDeDesarrolloWeb/webPack/miWebpack/node_modules/webpack/lib/HookWebpackError.js:83:7)\\n    at __webpack_require_module__ (/home/angel/platziProgramador/escuelaDeDesarrolloWeb/webPack/miWebpack/node_modules/webpack/lib/Compilation.js:5020:12)\\n    at __webpack_require__ (/home/angel/platziProgramador/escuelaDeDesarrolloWeb/webPack/miWebpack/node_modules/webpack/lib/Compilation.js:4977:18)\\n    at /home/angel/platziProgramador/escuelaDeDesarrolloWeb/webPack/miWebpack/node_modules/webpack/lib/Compilation.js:5048:20\\n    at symbolIterator (/home/angel/platziProgramador/escuelaDeDesarrolloWeb/webPack/miWebpack/node_modules/neo-async/async.js:3485:9)\\n\\nGenerated code for /home/angel/platziProgramador/escuelaDeDesarrolloWeb/webPack/miWebpack/node_modules/css-loader/dist/cjs.js!/home/angel/platziProgramador/escuelaDeDesarrolloWeb/webPack/miWebpack/node_modules/stylus-loader/dist/cjs.js!/home/angel/platziProgramador/escuelaDeDesarrolloWeb/webPack/miWebpack/src/styles/main.css\\n 1 | __webpack_require__.r(__webpack_exports__);\\n 2 | /* harmony export */ __webpack_require__.d(__webpack_exports__, {\\n 3 | /* harmony export */   \\\"default\\\": () => (__WEBPACK_DEFAULT_EXPORT__)\\n 4 | /* harmony export */ });\\n 5 | /* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \\\"/home/angel/platziProgramador/escuelaDeDesarrolloWeb/webPack/miWebpack/node_modules/css-loader/dist/runtime/noSourceMaps.js\\\");\\n 6 | /* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\\n 7 | /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \\\"/home/angel/platziProgramador/escuelaDeDesarrolloWeb/webPack/miWebpack/node_modules/css-loader/dist/runtime/api.js\\\");\\n 8 | /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\\n 9 | /* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \\\"/home/angel/platziProgramador/escuelaDeDesarrolloWeb/webPack/miWebpack/node_modules/css-loader/dist/runtime/getUrl.js\\\");\\n10 | /* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\\n11 | // Imports\\n12 | \\n13 | \\n14 | \\n15 | var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ Object(function webpackMissingModule() { var e = new Error(\\\"Cannot find module '../assets/fonts/ubuntu-regular.woff2'\\\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), __webpack_require__.b);\\n16 | var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ Object(function webpackMissingModule() { var e = new Error(\\\"Cannot find module '../assets/fonts/ubuntu-regular.woff'\\\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), __webpack_require__.b);\\n17 | var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\\n18 | ___CSS_LOADER_EXPORT___.push([module.id, \\\"@import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500);\\\"]);\\n19 | var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\\n20 | var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\\n21 | // Module\\n22 | ___CSS_LOADER_EXPORT___.push([module.id, \\\"@font-face {\\\\n  font-family: 'Ubuntu';\\\\n  src: url(\\\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \\\") format('woff2'), url(\\\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \\\") format('woff');\\\\n  font-weight: 400;\\\\n  font-style: normal;\\\\n}\\\\nhtml {\\\\n  font-family: sans-serif;\\\\n  -ms-text-size-adjust: 100%;\\\\n  -webkit-text-size-adjust: 100%;\\\\n}\\\\nbody {\\\\n  margin: 0;\\\\n}\\\\narticle,\\\\naside,\\\\ndetails,\\\\nfigcaption,\\\\nfigure,\\\\nfooter,\\\\nheader,\\\\nhgroup,\\\\nmain,\\\\nnav,\\\\nsection,\\\\nsummary {\\\\n  display: block;\\\\n}\\\\naudio,\\\\ncanvas,\\\\nprogress,\\\\nvideo {\\\\n  display: inline-block;\\\\n  vertical-align: baseline;\\\\n}\\\\naudio:not([controls]) {\\\\n  display: none;\\\\n  height: 0;\\\\n}\\\\n[hidden],\\\\ntemplate {\\\\n  display: none;\\\\n}\\\\na {\\\\n  background: 0 0;\\\\n}\\\\na:active,\\\\na:hover {\\\\n  outline: 0;\\\\n}\\\\nabbr[title] {\\\\n  border-bottom: 1px dotted;\\\\n}\\\\nb,\\\\nstrong {\\\\n  font-weight: 700;\\\\n}\\\\ndfn {\\\\n  font-style: italic;\\\\n}\\\\nh1 {\\\\n  font-size: 2em;\\\\n  margin: 0.67em 0;\\\\n}\\\\nmark {\\\\n  background: #ff0;\\\\n  color: #000;\\\\n}\\\\nsmall {\\\\n  font-size: 80%;\\\\n}\\\\nsub,\\\\nsup {\\\\n  font-size: 75%;\\\\n  line-height: 0;\\\\n  position: relative;\\\\n  vertical-align: baseline;\\\\n}\\\\nsup {\\\\n  top: -0.5em;\\\\n}\\\\nsub {\\\\n  bottom: -0.25em;\\\\n}\\\\nimg {\\\\n  border: 0;\\\\n}\\\\nsvg:not(:root) {\\\\n  overflow: hidden;\\\\n}\\\\nfigure {\\\\n  margin: 1em 40px;\\\\n}\\\\nhr {\\\\n  box-sizing: content-box;\\\\n  height: 0;\\\\n}\\\\npre {\\\\n  overflow: auto;\\\\n}\\\\ncode,\\\\nkbd,\\\\npre,\\\\nsamp {\\\\n  font-family: monospace, monospace;\\\\n  font-size: 1em;\\\\n}\\\\nbutton,\\\\ninput,\\\\noptgroup,\\\\nselect,\\\\ntextarea {\\\\n  color: inherit;\\\\n  font: inherit;\\\\n  margin: 0;\\\\n}\\\\nbutton {\\\\n  overflow: visible;\\\\n}\\\\nbutton,\\\\nselect {\\\\n  text-transform: none;\\\\n}\\\\nbutton,\\\\nhtml input[type=button],\\\\ninput[type=reset],\\\\ninput[type=submit] {\\\\n  -webkit-appearance: button;\\\\n  cursor: pointer;\\\\n}\\\\nbutton[disabled],\\\\nhtml input[disabled] {\\\\n  cursor: default;\\\\n}\\\\nbutton::-moz-focus-inner,\\\\ninput::-moz-focus-inner {\\\\n  border: 0;\\\\n  padding: 0;\\\\n}\\\\ninput {\\\\n  line-height: normal;\\\\n}\\\\ninput[type=checkbox],\\\\ninput[type=radio] {\\\\n  box-sizing: border-box;\\\\n  padding: 0;\\\\n}\\\\ninput[type=number]::-webkit-inner-spin-button,\\\\ninput[type=number]::-webkit-outer-spin-button {\\\\n  height: auto;\\\\n}\\\\ninput[type=search] {\\\\n  -webkit-appearance: textfield;\\\\n  box-sizing: content-box;\\\\n}\\\\ninput[type=search]::-webkit-search-cancel-button,\\\\ninput[type=search]::-webkit-search-decoration {\\\\n  -webkit-appearance: none;\\\\n}\\\\nfieldset {\\\\n  border: 1px solid #c0c0c0;\\\\n  margin: 0 2px;\\\\n  padding: 0.35em 0.625em 0.75em;\\\\n}\\\\nlegend {\\\\n  border: 0;\\\\n  padding: 0;\\\\n}\\\\ntextarea {\\\\n  overflow: auto;\\\\n}\\\\noptgroup {\\\\n  font-weight: 700;\\\\n}\\\\ntable {\\\\n  border-collapse: collapse;\\\\n  border-spacing: 0;\\\\n}\\\\ntd,\\\\nth {\\\\n  padding: 0;\\\\n}\\\\nbody {\\\\n  background-color: #f9f9f9;\\\\n  font-family: Ubuntu, sans-serif;\\\\n}\\\\n.center {\\\\n  position: relative;\\\\n  left: 50%;\\\\n  transform: translateX(-50%);\\\\n}\\\\n.About {\\\\n  align-items: center;\\\\n  display: grid;\\\\n  grid-template-columns: minmax(auto, 1024px);\\\\n  justify-content: center;\\\\n  padding: 4em 0;\\\\n}\\\\n.card {\\\\n  position: relative;\\\\n  padding: 20px 0;\\\\n  width: 100%;\\\\n  background: #fff;\\\\n  border-radius: 3px;\\\\n  box-shadow: 0 0 1px rgba(0,0,0,0.5);\\\\n  overflow: hidden;\\\\n  text-align: center;\\\\n  z-index: 5;\\\\n}\\\\n.card:after {\\\\n  content: \\\\\\\"\\\\\\\";\\\\n  display: block;\\\\n  position: absolute;\\\\n  width: 100%;\\\\n  height: 130px;\\\\n  top: 0;\\\\n  background: #f9f9f9;\\\\n  border-bottom: 1px solid rgba(0,0,0,0.15);\\\\n  z-index: -1;\\\\n}\\\\n.card_photo {\\\\n  position: relative;\\\\n  background: #fff;\\\\n  padding: 5px;\\\\n  width: 190px;\\\\n  height: 190px;\\\\n  border-radius: 50%;\\\\n  margin-bottom: 30px;\\\\n  border: 1px solid rgba(0,0,0,0.25);\\\\n}\\\\n.card_photo img {\\\\n  width: 150px;\\\\n  border-radius: 50%;\\\\n}\\\\n.card_title {\\\\n  color: #999;\\\\n  font-size: 18px;\\\\n  margin: 0;\\\\n}\\\\n.card_value {\\\\n  color: #2c2e31;\\\\n  font-size: 38px;\\\\n  margin: 5px;\\\\n  text-transform: capitalize;\\\\n}\\\\n.card ul {\\\\n  list-style-type: none;\\\\n}\\\\n.card li {\\\\n  display: inline-block;\\\\n  margin: 0 1em 0 0;\\\\n}\\\\n.card_social {\\\\n  width: 400px;\\\\n  display: flex;\\\\n  justify-content: space-between;\\\\n  align-items: center;\\\\n  margin: 0 auto;\\\\n  padding: 1em 0;\\\\n}\\\\n.card_social img {\\\\n  width: 32px;\\\\n  height: 32px;\\\\n}\\\\n.card_social a {\\\\n  text-decoration: none;\\\\n}\\\\n.circle {\\\\n  position: relative;\\\\n}\\\\n.circle svg {\\\\n  fill: none;\\\\n  stroke: #8a3ab9;\\\\n  stroke-linecap: round;\\\\n  stroke-width: 3;\\\\n  stroke-dasharray: 1;\\\\n  stroke-dashoffset: 0;\\\\n  animation: stroke-draw 6s ease-out infinite alternate;\\\\n}\\\\n.circle img {\\\\n  position: absolute;\\\\n  left: 50%;\\\\n  top: 50%;\\\\n  transform: translate(-50%, -50%);\\\\n}\\\\n@-moz-keyframes stroke-draw {\\\\n  from {\\\\n    stroke: #8a3ab9;\\\\n    stroke-dasharray: 1;\\\\n  }\\\\n  to {\\\\n    stroke: #cd486b;\\\\n    transform: rotate(180deg);\\\\n    stroke-dasharray: 8;\\\\n  }\\\\n}\\\\n@-webkit-keyframes stroke-draw {\\\\n  from {\\\\n    stroke: #8a3ab9;\\\\n    stroke-dasharray: 1;\\\\n  }\\\\n  to {\\\\n    stroke: #cd486b;\\\\n    transform: rotate(180deg);\\\\n    stroke-dasharray: 8;\\\\n  }\\\\n}\\\\n@-o-keyframes stroke-draw {\\\\n  from {\\\\n    stroke: #8a3ab9;\\\\n    stroke-dasharray: 1;\\\\n  }\\\\n  to {\\\\n    stroke: #cd486b;\\\\n    transform: rotate(180deg);\\\\n    stroke-dasharray: 8;\\\\n  }\\\\n}\\\\n@keyframes stroke-draw {\\\\n  from {\\\\n    stroke: #8a3ab9;\\\\n    stroke-dasharray: 1;\\\\n  }\\\\n  to {\\\\n    stroke: #cd486b;\\\\n    transform: rotate(180deg);\\\\n    stroke-dasharray: 8;\\\\n  }\\\\n}\\\\n\\\", \\\"\\\"]);\\n23 | // Exports\\n24 | /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\\n25 | \");\n\n//# sourceURL=webpack://js-portfolio/./src/styles/main.css?");

/***/ }),

/***/ "./src/styles/vars.styl":
/*!******************************!*\
  !*** ./src/styles/vars.styl ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://js-portfolio/./src/styles/vars.styl?");

/***/ }),

/***/ "./src/assets/images/github.png":
/*!**************************************!*\
  !*** ./src/assets/images/github.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/9c4faee7513f87e9b3b3.png\";\n\n//# sourceURL=webpack://js-portfolio/./src/assets/images/github.png?");

/***/ }),

/***/ "./src/assets/images/instagram.png":
/*!*****************************************!*\
  !*** ./src/assets/images/instagram.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/8932205d8701217166c9.png\";\n\n//# sourceURL=webpack://js-portfolio/./src/assets/images/instagram.png?");

/***/ }),

/***/ "./src/assets/images/twitter.png":
/*!***************************************!*\
  !*** ./src/assets/images/twitter.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/a4a49dfe20c4a1a2c681.png\";\n\n//# sourceURL=webpack://js-portfolio/./src/assets/images/twitter.png?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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