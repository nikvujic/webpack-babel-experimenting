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

/***/ "./src/app/render.js"
/*!***************************!*\
  !*** ./src/app/render.js ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderApp: () => (/* binding */ renderApp)\n/* harmony export */ });\n/* harmony import */ var _ui_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/dom.js */ \"./src/ui/dom.js\");\n\n\n/**\n * Pure render: given state, return a DOM tree.\n * No side effects here besides building nodes.\n */\nfunction renderApp(state) {\n  return (0,_ui_dom_js__WEBPACK_IMPORTED_MODULE_0__.el)(\n    \"div\",\n    { className: \"app\" },\n    (0,_ui_dom_js__WEBPACK_IMPORTED_MODULE_0__.el)(\"h1\", {}, \"Mini Kanban\"),\n    (0,_ui_dom_js__WEBPACK_IMPORTED_MODULE_0__.el)(\n      \"div\",\n      { className: \"board\" },\n      state.columns.map((col) =>\n        (0,_ui_dom_js__WEBPACK_IMPORTED_MODULE_0__.el)(\n          \"section\",\n          { className: \"column\", \"data-col\": col.id },\n          (0,_ui_dom_js__WEBPACK_IMPORTED_MODULE_0__.el)(\"h2\", {}, col.title),\n          (0,_ui_dom_js__WEBPACK_IMPORTED_MODULE_0__.el)(\n            \"ul\",\n            { className: \"cards\" },\n            col.cards.map((text) => (0,_ui_dom_js__WEBPACK_IMPORTED_MODULE_0__.el)(\"li\", { className: \"card\" }, text))\n          )\n        )\n      )\n    )\n  );\n}\n\n//# sourceURL=webpack:///./src/app/render.js?\n}");

/***/ },

/***/ "./src/app/state.js"
/*!**************************!*\
  !*** ./src/app/state.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialState: () => (/* binding */ initialState)\n/* harmony export */ });\nconst initialState = {\n  columns: [\n    { id: \"todo\", title: \"Todo\", cards: [\"Learn bundlers\", \"Build Kanban\"] },\n    { id: \"doing\", title: \"Doing\", cards: [\"Write modules\"] },\n    { id: \"done\", title: \"Done\", cards: [] },\n  ],\n};\n\n\n//# sourceURL=webpack:///./src/app/state.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/state.js */ \"./src/app/state.js\");\n/* harmony import */ var _app_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/render.js */ \"./src/app/render.js\");\n/* harmony import */ var _ui_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/dom.js */ \"./src/ui/dom.js\");\n\n\n\n\nconst app = document.getElementById(\"app\");\n\n// A simple \"render once\" for now\n(0,_ui_dom_js__WEBPACK_IMPORTED_MODULE_2__.mount)(app, (0,_app_render_js__WEBPACK_IMPORTED_MODULE_1__.renderApp)(_app_state_js__WEBPACK_IMPORTED_MODULE_0__.initialState));\n\nconsole.log(\"App booted with\", _app_state_js__WEBPACK_IMPORTED_MODULE_0__.initialState);\n\n//# sourceURL=webpack:///./src/index.js?\n}");

/***/ },

/***/ "./src/ui/dom.js"
/*!***********************!*\
  !*** ./src/ui/dom.js ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   el: () => (/* binding */ el),\n/* harmony export */   mount: () => (/* binding */ mount)\n/* harmony export */ });\n/**\n * Tiny helper to create DOM elements declaratively.\n * This is NOT a framework. It's just a convenience function.\n */\nfunction el(tag, props = {}, ...children) {\n  const node = document.createElement(tag);\n\n  // Apply props (attributes + event listeners)\n  for (const [key, value] of Object.entries(props)) {\n    if (key.startsWith(\"on\") && typeof value === \"function\") {\n      // onClick -> click\n      node.addEventListener(key.slice(2).toLowerCase(), value);\n    } else if (key === \"className\") {\n      node.className = value;\n    } else if (value === false || value == null) {\n      // skip null/undefined/false attributes\n    } else {\n      node.setAttribute(key, String(value));\n    }\n  }\n\n  // Append children (strings become text nodes)\n  for (const child of children.flat()) {\n    if (child == null) continue;\n    node.appendChild(\n      child instanceof Node ? child : document.createTextNode(String(child))\n    );\n  }\n\n  return node;\n}\n\n/**\n * Replace contents of a container with a new node.\n * This is our \"render loop\" primitive.\n */\nfunction mount(container, node) {\n  container.replaceChildren(node);\n}\n\n\n//# sourceURL=webpack:///./src/ui/dom.js?\n}");

/***/ }

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
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