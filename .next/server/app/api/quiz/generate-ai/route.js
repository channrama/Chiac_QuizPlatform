/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/quiz/generate-ai/route";
exports.ids = ["app/api/quiz/generate-ai/route"];
exports.modules = {

/***/ "(rsc)/./node_modules/pdf-parse/lib/pdf.js sync recursive ^\\.\\/.*\\/build\\/pdf\\.js$":
/*!**************************************************************************!*\
  !*** ./node_modules/pdf-parse/lib/pdf.js/ sync ^\.\/.*\/build\/pdf\.js$ ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./v1.10.100/build/pdf.js": "(rsc)/./node_modules/pdf-parse/lib/pdf.js/v1.10.100/build/pdf.js",
	"./v1.10.88/build/pdf.js": "(rsc)/./node_modules/pdf-parse/lib/pdf.js/v1.10.88/build/pdf.js",
	"./v1.9.426/build/pdf.js": "(rsc)/./node_modules/pdf-parse/lib/pdf.js/v1.9.426/build/pdf.js",
	"./v2.0.550/build/pdf.js": "(rsc)/./node_modules/pdf-parse/lib/pdf.js/v2.0.550/build/pdf.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "(rsc)/./node_modules/pdf-parse/lib/pdf.js sync recursive ^\\.\\/.*\\/build\\/pdf\\.js$";

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "fs/promises":
/*!******************************!*\
  !*** external "fs/promises" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("fs/promises");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "process":
/*!**************************!*\
  !*** external "process" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("process");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "worker_threads":
/*!*********************************!*\
  !*** external "worker_threads" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("worker_threads");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ }),

/***/ "node:buffer":
/*!******************************!*\
  !*** external "node:buffer" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:buffer");

/***/ }),

/***/ "node:fs":
/*!**************************!*\
  !*** external "node:fs" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:fs");

/***/ }),

/***/ "node:http":
/*!****************************!*\
  !*** external "node:http" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:http");

/***/ }),

/***/ "node:https":
/*!*****************************!*\
  !*** external "node:https" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:https");

/***/ }),

/***/ "node:net":
/*!***************************!*\
  !*** external "node:net" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:net");

/***/ }),

/***/ "node:path":
/*!****************************!*\
  !*** external "node:path" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:path");

/***/ }),

/***/ "node:process":
/*!*******************************!*\
  !*** external "node:process" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:process");

/***/ }),

/***/ "node:stream":
/*!******************************!*\
  !*** external "node:stream" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:stream");

/***/ }),

/***/ "node:stream/promises":
/*!***************************************!*\
  !*** external "node:stream/promises" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:stream/promises");

/***/ }),

/***/ "node:stream/web":
/*!**********************************!*\
  !*** external "node:stream/web" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:stream/web");

/***/ }),

/***/ "node:url":
/*!***************************!*\
  !*** external "node:url" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:url");

/***/ }),

/***/ "node:util":
/*!****************************!*\
  !*** external "node:util" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:util");

/***/ }),

/***/ "node:zlib":
/*!****************************!*\
  !*** external "node:zlib" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:zlib");

/***/ }),

/***/ "?32c4":
/*!****************************!*\
  !*** bufferutil (ignored) ***!
  \****************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?66e9":
/*!********************************!*\
  !*** utf-8-validate (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fquiz%2Fgenerate-ai%2Froute&page=%2Fapi%2Fquiz%2Fgenerate-ai%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fquiz%2Fgenerate-ai%2Froute.js&appDir=D%3A%5Cquiz%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cquiz&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fquiz%2Fgenerate-ai%2Froute&page=%2Fapi%2Fquiz%2Fgenerate-ai%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fquiz%2Fgenerate-ai%2Froute.js&appDir=D%3A%5Cquiz%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cquiz&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_quiz_app_api_quiz_generate_ai_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/quiz/generate-ai/route.js */ \"(rsc)/./app/api/quiz/generate-ai/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/quiz/generate-ai/route\",\n        pathname: \"/api/quiz/generate-ai\",\n        filename: \"route\",\n        bundlePath: \"app/api/quiz/generate-ai/route\"\n    },\n    resolvedPagePath: \"D:\\\\quiz\\\\app\\\\api\\\\quiz\\\\generate-ai\\\\route.js\",\n    nextConfigOutput,\n    userland: D_quiz_app_api_quiz_generate_ai_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/quiz/generate-ai/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZxdWl6JTJGZ2VuZXJhdGUtYWklMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnF1aXolMkZnZW5lcmF0ZS1haSUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnF1aXolMkZnZW5lcmF0ZS1haSUyRnJvdXRlLmpzJmFwcERpcj1EJTNBJTVDcXVpeiU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9RCUzQSU1Q3F1aXomaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ0Q7QUFDNUU7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vbmxpbmUtcXVpei1hc3Nlc3NtZW50Lz8yZTNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkQ6XFxcXHF1aXpcXFxcYXBwXFxcXGFwaVxcXFxxdWl6XFxcXGdlbmVyYXRlLWFpXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9xdWl6L2dlbmVyYXRlLWFpL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvcXVpei9nZW5lcmF0ZS1haVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvcXVpei9nZW5lcmF0ZS1haS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkQ6XFxcXHF1aXpcXFxcYXBwXFxcXGFwaVxcXFxxdWl6XFxcXGdlbmVyYXRlLWFpXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9xdWl6L2dlbmVyYXRlLWFpL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fquiz%2Fgenerate-ai%2Froute&page=%2Fapi%2Fquiz%2Fgenerate-ai%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fquiz%2Fgenerate-ai%2Froute.js&appDir=D%3A%5Cquiz%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cquiz&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/quiz/generate-ai/route.js":
/*!*******************************************!*\
  !*** ./app/api/quiz/generate-ai/route.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../lib/db */ \"(rsc)/./lib/db.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lib_db__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _models_Quiz__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/Quiz */ \"(rsc)/./models/Quiz.js\");\n/* harmony import */ var _models_Quiz__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_models_Quiz__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_middleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../lib/middleware */ \"(rsc)/./lib/middleware.js\");\n/* harmony import */ var _lib_middleware__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lib_middleware__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_aiQuiz__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../lib/aiQuiz */ \"(rsc)/./lib/aiQuiz.js\");\n/* harmony import */ var _lib_openai__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../lib/openai */ \"(rsc)/./lib/openai.js\");\n\n\n\n\n\n\n\nasync function POST(req) {\n    const user = await (0,_lib_middleware__WEBPACK_IMPORTED_MODULE_4__.getUserFromRequest)(req);\n    if (!user) return new Response(JSON.stringify({\n        error: \"Unauthorized\"\n    }), {\n        status: 401\n    });\n    if (!(0,_lib_middleware__WEBPACK_IMPORTED_MODULE_4__.requireRole)(user, \"teacher\")) return new Response(JSON.stringify({\n        error: \"Forbidden\"\n    }), {\n        status: 403\n    });\n    try {\n        const formData = await req.formData();\n        const pdfFile = formData.get(\"pdf\");\n        const title = formData.get(\"title\");\n        const difficulty = formData.get(\"difficulty\") || \"medium\";\n        const numberOfQuestions = parseInt(formData.get(\"numberOfQuestions\")) || 5;\n        const duration = parseInt(formData.get(\"duration\")) || 10;\n        const description = formData.get(\"description\") || \"\";\n        const accessPassword = formData.get(\"accessPassword\") || \"\";\n        if (!pdfFile) return new Response(JSON.stringify({\n            error: \"PDF file required\"\n        }), {\n            status: 400\n        });\n        if (!title || title.trim().length < 3) return new Response(JSON.stringify({\n            error: \"Quiz title required\"\n        }), {\n            status: 400\n        });\n        if (numberOfQuestions < 1 || numberOfQuestions > 50) return new Response(JSON.stringify({\n            error: \"Questions must be 1-50\"\n        }), {\n            status: 400\n        });\n        // convert file to buffer\n        const buffer = Buffer.from(await pdfFile.arrayBuffer());\n        // extract text\n        const extractedText = await (0,_lib_aiQuiz__WEBPACK_IMPORTED_MODULE_5__.extractTextFromPDF)(buffer);\n        if (!extractedText || extractedText.trim().length === 0) {\n            return new Response(JSON.stringify({\n                error: \"No text extracted from PDF\"\n            }), {\n                status: 400\n            });\n        }\n        // generate questions via AI\n        const questions = await (0,_lib_openai__WEBPACK_IMPORTED_MODULE_6__.generateQuizQuestions)(extractedText, numberOfQuestions, difficulty);\n        // validate\n        (0,_lib_aiQuiz__WEBPACK_IMPORTED_MODULE_5__.validateQuizJSON)(questions);\n        // save to db\n        await _lib_db__WEBPACK_IMPORTED_MODULE_2___default()();\n        const quizData = {\n            title,\n            description,\n            duration,\n            questions,\n            createdBy: user._id\n        };\n        if (accessPassword) {\n            const bcrypt = await __webpack_require__.e(/*! import() */ \"vendor-chunks/bcryptjs\").then(__webpack_require__.t.bind(__webpack_require__, /*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\", 23));\n            const hashed = await bcrypt.default.hash(String(accessPassword), 10);\n            quizData.accessPassword = hashed;\n        }\n        const quiz = await _models_Quiz__WEBPACK_IMPORTED_MODULE_3___default().create(quizData);\n        return new Response(JSON.stringify({\n            quiz,\n            message: \"Quiz generated successfully\"\n        }), {\n            status: 201\n        });\n    } catch (err) {\n        return new Response(JSON.stringify({\n            error: err.message\n        }), {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3F1aXovZ2VuZXJhdGUtYWkvcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNaO0FBQ2U7QUFDQTtBQUNrQztBQUNDO0FBQ2Y7QUFFeEQsZUFBZVMsS0FBS0MsR0FBRztJQUM1QixNQUFNQyxPQUFPLE1BQU1QLG1FQUFrQkEsQ0FBQ007SUFDdEMsSUFBSSxDQUFDQyxNQUFNLE9BQU8sSUFBSUMsU0FBU0MsS0FBS0MsU0FBUyxDQUFDO1FBQUVDLE9BQU87SUFBZSxJQUFJO1FBQUVDLFFBQVE7SUFBSTtJQUN4RixJQUFJLENBQUNYLDREQUFXQSxDQUFDTSxNQUFNLFlBQVksT0FBTyxJQUFJQyxTQUFTQyxLQUFLQyxTQUFTLENBQUM7UUFBRUMsT0FBTztJQUFZLElBQUk7UUFBRUMsUUFBUTtJQUFJO0lBRTdHLElBQUk7UUFDRixNQUFNQyxXQUFXLE1BQU1QLElBQUlPLFFBQVE7UUFDbkMsTUFBTUMsVUFBVUQsU0FBU0UsR0FBRyxDQUFDO1FBQzdCLE1BQU1DLFFBQVFILFNBQVNFLEdBQUcsQ0FBQztRQUMzQixNQUFNRSxhQUFhSixTQUFTRSxHQUFHLENBQUMsaUJBQWlCO1FBQ2pELE1BQU1HLG9CQUFvQkMsU0FBU04sU0FBU0UsR0FBRyxDQUFDLHlCQUF5QjtRQUN6RSxNQUFNSyxXQUFXRCxTQUFTTixTQUFTRSxHQUFHLENBQUMsZ0JBQWdCO1FBQ3ZELE1BQU1NLGNBQWNSLFNBQVNFLEdBQUcsQ0FBQyxrQkFBa0I7UUFDbkQsTUFBTU8saUJBQWlCVCxTQUFTRSxHQUFHLENBQUMscUJBQXFCO1FBRXpELElBQUksQ0FBQ0QsU0FBUyxPQUFPLElBQUlOLFNBQVNDLEtBQUtDLFNBQVMsQ0FBQztZQUFFQyxPQUFPO1FBQW9CLElBQUk7WUFBRUMsUUFBUTtRQUFJO1FBQ2hHLElBQUksQ0FBQ0ksU0FBU0EsTUFBTU8sSUFBSSxHQUFHQyxNQUFNLEdBQUcsR0FBRyxPQUFPLElBQUloQixTQUFTQyxLQUFLQyxTQUFTLENBQUM7WUFBRUMsT0FBTztRQUFzQixJQUFJO1lBQUVDLFFBQVE7UUFBSTtRQUMzSCxJQUFJTSxvQkFBb0IsS0FBS0Esb0JBQW9CLElBQUksT0FBTyxJQUFJVixTQUFTQyxLQUFLQyxTQUFTLENBQUM7WUFBRUMsT0FBTztRQUF5QixJQUFJO1lBQUVDLFFBQVE7UUFBSTtRQUU1SSx5QkFBeUI7UUFDekIsTUFBTWEsU0FBU0MsT0FBT0MsSUFBSSxDQUFDLE1BQU1iLFFBQVFjLFdBQVc7UUFFcEQsZUFBZTtRQUNmLE1BQU1DLGdCQUFnQixNQUFNM0IsK0RBQWtCQSxDQUFDdUI7UUFDL0MsSUFBSSxDQUFDSSxpQkFBaUJBLGNBQWNOLElBQUksR0FBR0MsTUFBTSxLQUFLLEdBQUc7WUFDdkQsT0FBTyxJQUFJaEIsU0FBU0MsS0FBS0MsU0FBUyxDQUFDO2dCQUFFQyxPQUFPO1lBQTZCLElBQUk7Z0JBQUVDLFFBQVE7WUFBSTtRQUM3RjtRQUVBLDRCQUE0QjtRQUM1QixNQUFNa0IsWUFBWSxNQUFNMUIsa0VBQXFCQSxDQUFDeUIsZUFBZVgsbUJBQW1CRDtRQUVoRixXQUFXO1FBQ1hkLDZEQUFnQkEsQ0FBQzJCO1FBRWpCLGFBQWE7UUFDYixNQUFNaEMsOENBQVNBO1FBQ2YsTUFBTWlDLFdBQVc7WUFBRWY7WUFBT0s7WUFBYUQ7WUFBVVU7WUFBV0UsV0FBV3pCLEtBQUswQixHQUFHO1FBQUM7UUFFaEYsSUFBSVgsZ0JBQWdCO1lBQ2xCLE1BQU1ZLFNBQVMsTUFBTSxtTEFBTztZQUM1QixNQUFNQyxTQUFTLE1BQU1ELE9BQU9FLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPaEIsaUJBQWlCO1lBQ2pFUyxTQUFTVCxjQUFjLEdBQUdhO1FBQzVCO1FBRUEsTUFBTUksT0FBTyxNQUFNeEMsMERBQVcsQ0FBQ2dDO1FBQy9CLE9BQU8sSUFBSXZCLFNBQVNDLEtBQUtDLFNBQVMsQ0FBQztZQUFFNkI7WUFBTUUsU0FBUztRQUE4QixJQUFJO1lBQUU3QixRQUFRO1FBQUk7SUFDdEcsRUFBRSxPQUFPOEIsS0FBSztRQUNaLE9BQU8sSUFBSWxDLFNBQVNDLEtBQUtDLFNBQVMsQ0FBQztZQUFFQyxPQUFPK0IsSUFBSUQsT0FBTztRQUFDLElBQUk7WUFBRTdCLFFBQVE7UUFBSTtJQUM1RTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb25saW5lLXF1aXotYXNzZXNzbWVudC8uL2FwcC9hcGkvcXVpei9nZW5lcmF0ZS1haS9yb3V0ZS5qcz9lYzI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdyaXRlRmlsZSB9IGZyb20gJ2ZzL3Byb21pc2VzJztcclxuaW1wb3J0IHsgam9pbiB9IGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgY29ubmVjdERCIGZyb20gJy4uLy4uLy4uLy4uL2xpYi9kYic7XHJcbmltcG9ydCBRdWl6IGZyb20gJy4uLy4uLy4uLy4uL21vZGVscy9RdWl6JztcclxuaW1wb3J0IHsgZ2V0VXNlckZyb21SZXF1ZXN0LCByZXF1aXJlUm9sZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9taWRkbGV3YXJlJztcclxuaW1wb3J0IHsgZXh0cmFjdFRleHRGcm9tUERGLCB2YWxpZGF0ZVF1aXpKU09OIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2FpUXVpeic7XHJcbmltcG9ydCB7IGdlbmVyYXRlUXVpelF1ZXN0aW9ucyB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9vcGVuYWknO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxKSB7XHJcbiAgY29uc3QgdXNlciA9IGF3YWl0IGdldFVzZXJGcm9tUmVxdWVzdChyZXEpO1xyXG4gIGlmICghdXNlcikgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeSh7IGVycm9yOiAnVW5hdXRob3JpemVkJyB9KSwgeyBzdGF0dXM6IDQwMSB9KTtcclxuICBpZiAoIXJlcXVpcmVSb2xlKHVzZXIsICd0ZWFjaGVyJykpIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBlcnJvcjogJ0ZvcmJpZGRlbicgfSksIHsgc3RhdHVzOiA0MDMgfSk7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcS5mb3JtRGF0YSgpO1xyXG4gICAgY29uc3QgcGRmRmlsZSA9IGZvcm1EYXRhLmdldCgncGRmJyk7XHJcbiAgICBjb25zdCB0aXRsZSA9IGZvcm1EYXRhLmdldCgndGl0bGUnKTtcclxuICAgIGNvbnN0IGRpZmZpY3VsdHkgPSBmb3JtRGF0YS5nZXQoJ2RpZmZpY3VsdHknKSB8fCAnbWVkaXVtJztcclxuICAgIGNvbnN0IG51bWJlck9mUXVlc3Rpb25zID0gcGFyc2VJbnQoZm9ybURhdGEuZ2V0KCdudW1iZXJPZlF1ZXN0aW9ucycpKSB8fCA1O1xyXG4gICAgY29uc3QgZHVyYXRpb24gPSBwYXJzZUludChmb3JtRGF0YS5nZXQoJ2R1cmF0aW9uJykpIHx8IDEwO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBmb3JtRGF0YS5nZXQoJ2Rlc2NyaXB0aW9uJykgfHwgJyc7XHJcbiAgICBjb25zdCBhY2Nlc3NQYXNzd29yZCA9IGZvcm1EYXRhLmdldCgnYWNjZXNzUGFzc3dvcmQnKSB8fCAnJztcclxuXHJcbiAgICBpZiAoIXBkZkZpbGUpIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBlcnJvcjogJ1BERiBmaWxlIHJlcXVpcmVkJyB9KSwgeyBzdGF0dXM6IDQwMCB9KTtcclxuICAgIGlmICghdGl0bGUgfHwgdGl0bGUudHJpbSgpLmxlbmd0aCA8IDMpIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBlcnJvcjogJ1F1aXogdGl0bGUgcmVxdWlyZWQnIH0pLCB7IHN0YXR1czogNDAwIH0pO1xyXG4gICAgaWYgKG51bWJlck9mUXVlc3Rpb25zIDwgMSB8fCBudW1iZXJPZlF1ZXN0aW9ucyA+IDUwKSByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgZXJyb3I6ICdRdWVzdGlvbnMgbXVzdCBiZSAxLTUwJyB9KSwgeyBzdGF0dXM6IDQwMCB9KTtcclxuXHJcbiAgICAvLyBjb252ZXJ0IGZpbGUgdG8gYnVmZmVyXHJcbiAgICBjb25zdCBidWZmZXIgPSBCdWZmZXIuZnJvbShhd2FpdCBwZGZGaWxlLmFycmF5QnVmZmVyKCkpO1xyXG5cclxuICAgIC8vIGV4dHJhY3QgdGV4dFxyXG4gICAgY29uc3QgZXh0cmFjdGVkVGV4dCA9IGF3YWl0IGV4dHJhY3RUZXh0RnJvbVBERihidWZmZXIpO1xyXG4gICAgaWYgKCFleHRyYWN0ZWRUZXh0IHx8IGV4dHJhY3RlZFRleHQudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgZXJyb3I6ICdObyB0ZXh0IGV4dHJhY3RlZCBmcm9tIFBERicgfSksIHsgc3RhdHVzOiA0MDAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZ2VuZXJhdGUgcXVlc3Rpb25zIHZpYSBBSVxyXG4gICAgY29uc3QgcXVlc3Rpb25zID0gYXdhaXQgZ2VuZXJhdGVRdWl6UXVlc3Rpb25zKGV4dHJhY3RlZFRleHQsIG51bWJlck9mUXVlc3Rpb25zLCBkaWZmaWN1bHR5KTtcclxuXHJcbiAgICAvLyB2YWxpZGF0ZVxyXG4gICAgdmFsaWRhdGVRdWl6SlNPTihxdWVzdGlvbnMpO1xyXG5cclxuICAgIC8vIHNhdmUgdG8gZGJcclxuICAgIGF3YWl0IGNvbm5lY3REQigpO1xyXG4gICAgY29uc3QgcXVpekRhdGEgPSB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVyYXRpb24sIHF1ZXN0aW9ucywgY3JlYXRlZEJ5OiB1c2VyLl9pZCB9O1xyXG4gICAgXHJcbiAgICBpZiAoYWNjZXNzUGFzc3dvcmQpIHtcclxuICAgICAgY29uc3QgYmNyeXB0ID0gYXdhaXQgaW1wb3J0KCdiY3J5cHRqcycpO1xyXG4gICAgICBjb25zdCBoYXNoZWQgPSBhd2FpdCBiY3J5cHQuZGVmYXVsdC5oYXNoKFN0cmluZyhhY2Nlc3NQYXNzd29yZCksIDEwKTtcclxuICAgICAgcXVpekRhdGEuYWNjZXNzUGFzc3dvcmQgPSBoYXNoZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcXVpeiA9IGF3YWl0IFF1aXouY3JlYXRlKHF1aXpEYXRhKTtcclxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBxdWl6LCBtZXNzYWdlOiAnUXVpeiBnZW5lcmF0ZWQgc3VjY2Vzc2Z1bGx5JyB9KSwgeyBzdGF0dXM6IDIwMSB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBlcnJvcjogZXJyLm1lc3NhZ2UgfSksIHsgc3RhdHVzOiA1MDAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ3cml0ZUZpbGUiLCJqb2luIiwiY29ubmVjdERCIiwiUXVpeiIsImdldFVzZXJGcm9tUmVxdWVzdCIsInJlcXVpcmVSb2xlIiwiZXh0cmFjdFRleHRGcm9tUERGIiwidmFsaWRhdGVRdWl6SlNPTiIsImdlbmVyYXRlUXVpelF1ZXN0aW9ucyIsIlBPU1QiLCJyZXEiLCJ1c2VyIiwiUmVzcG9uc2UiLCJKU09OIiwic3RyaW5naWZ5IiwiZXJyb3IiLCJzdGF0dXMiLCJmb3JtRGF0YSIsInBkZkZpbGUiLCJnZXQiLCJ0aXRsZSIsImRpZmZpY3VsdHkiLCJudW1iZXJPZlF1ZXN0aW9ucyIsInBhcnNlSW50IiwiZHVyYXRpb24iLCJkZXNjcmlwdGlvbiIsImFjY2Vzc1Bhc3N3b3JkIiwidHJpbSIsImxlbmd0aCIsImJ1ZmZlciIsIkJ1ZmZlciIsImZyb20iLCJhcnJheUJ1ZmZlciIsImV4dHJhY3RlZFRleHQiLCJxdWVzdGlvbnMiLCJxdWl6RGF0YSIsImNyZWF0ZWRCeSIsIl9pZCIsImJjcnlwdCIsImhhc2hlZCIsImRlZmF1bHQiLCJoYXNoIiwiU3RyaW5nIiwicXVpeiIsImNyZWF0ZSIsIm1lc3NhZ2UiLCJlcnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/quiz/generate-ai/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/aiQuiz.js":
/*!***********************!*\
  !*** ./lib/aiQuiz.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   extractTextFromPDF: () => (/* binding */ extractTextFromPDF),\n/* harmony export */   validateQuizJSON: () => (/* binding */ validateQuizJSON)\n/* harmony export */ });\n/* harmony import */ var pdf_parse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pdf-parse */ \"(rsc)/./node_modules/pdf-parse/index.js\");\n/* harmony import */ var pdf_parse__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pdf_parse__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function extractTextFromPDF(buffer) {\n    try {\n        const data = await pdf_parse__WEBPACK_IMPORTED_MODULE_0___default()(buffer);\n        const text = data.text || \"\";\n        // limit to first 10000 chars to avoid token bloat\n        return text.substring(0, 10000);\n    } catch (err) {\n        throw new Error(`PDF extraction failed: ${err.message}`);\n    }\n}\nfunction validateQuizJSON(data) {\n    if (!Array.isArray(data)) throw new Error(\"Response must be an array\");\n    if (data.length === 0) throw new Error(\"No questions generated\");\n    const errors = [];\n    data.forEach((q, idx)=>{\n        if (!q.question || typeof q.question !== \"string\") errors.push(`Q${idx + 1}: missing question text`);\n        if (!Array.isArray(q.options) || q.options.length !== 4) errors.push(`Q${idx + 1}: must have 4 options`);\n        else q.options.forEach((o, j)=>{\n            if (!o || typeof o !== \"string\") errors.push(`Q${idx + 1} opt${j + 1}: invalid`);\n        });\n        if (typeof q.correctAnswer !== \"number\" || q.correctAnswer < 0 || q.correctAnswer > 3) errors.push(`Q${idx + 1}: correctAnswer must be 0-3`);\n    });\n    if (errors.length) throw new Error(errors.join(\"; \"));\n    return data;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYWlRdWl6LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBaUM7QUFFMUIsZUFBZUMsbUJBQW1CQyxNQUFNO0lBQzdDLElBQUk7UUFDRixNQUFNQyxPQUFPLE1BQU1ILGdEQUFRQSxDQUFDRTtRQUM1QixNQUFNRSxPQUFPRCxLQUFLQyxJQUFJLElBQUk7UUFDMUIsa0RBQWtEO1FBQ2xELE9BQU9BLEtBQUtDLFNBQVMsQ0FBQyxHQUFHO0lBQzNCLEVBQUUsT0FBT0MsS0FBSztRQUNaLE1BQU0sSUFBSUMsTUFBTSxDQUFDLHVCQUF1QixFQUFFRCxJQUFJRSxPQUFPLENBQUMsQ0FBQztJQUN6RDtBQUNGO0FBRU8sU0FBU0MsaUJBQWlCTixJQUFJO0lBQ25DLElBQUksQ0FBQ08sTUFBTUMsT0FBTyxDQUFDUixPQUFPLE1BQU0sSUFBSUksTUFBTTtJQUMxQyxJQUFJSixLQUFLUyxNQUFNLEtBQUssR0FBRyxNQUFNLElBQUlMLE1BQU07SUFFdkMsTUFBTU0sU0FBUyxFQUFFO0lBQ2pCVixLQUFLVyxPQUFPLENBQUMsQ0FBQ0MsR0FBR0M7UUFDZixJQUFJLENBQUNELEVBQUVFLFFBQVEsSUFBSSxPQUFPRixFQUFFRSxRQUFRLEtBQUssVUFBVUosT0FBT0ssSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFRixNQUFNLEVBQUUsdUJBQXVCLENBQUM7UUFDbkcsSUFBSSxDQUFDTixNQUFNQyxPQUFPLENBQUNJLEVBQUVJLE9BQU8sS0FBS0osRUFBRUksT0FBTyxDQUFDUCxNQUFNLEtBQUssR0FBR0MsT0FBT0ssSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFRixNQUFNLEVBQUUscUJBQXFCLENBQUM7YUFDbEdELEVBQUVJLE9BQU8sQ0FBQ0wsT0FBTyxDQUFDLENBQUNNLEdBQUdDO1lBQVEsSUFBSSxDQUFDRCxLQUFLLE9BQU9BLE1BQU0sVUFBVVAsT0FBT0ssSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFRixNQUFNLEVBQUUsSUFBSSxFQUFFSyxJQUFJLEVBQUUsU0FBUyxDQUFDO1FBQUc7UUFDckgsSUFBSSxPQUFPTixFQUFFTyxhQUFhLEtBQUssWUFBWVAsRUFBRU8sYUFBYSxHQUFHLEtBQUtQLEVBQUVPLGFBQWEsR0FBRyxHQUFHVCxPQUFPSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUVGLE1BQU0sRUFBRSwyQkFBMkIsQ0FBQztJQUM3STtJQUVBLElBQUlILE9BQU9ELE1BQU0sRUFBRSxNQUFNLElBQUlMLE1BQU1NLE9BQU9VLElBQUksQ0FBQztJQUMvQyxPQUFPcEI7QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL29ubGluZS1xdWl6LWFzc2Vzc21lbnQvLi9saWIvYWlRdWl6LmpzPzU0YzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBkZlBhcnNlIGZyb20gJ3BkZi1wYXJzZSc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZXh0cmFjdFRleHRGcm9tUERGKGJ1ZmZlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcGRmUGFyc2UoYnVmZmVyKTtcclxuICAgIGNvbnN0IHRleHQgPSBkYXRhLnRleHQgfHwgJyc7XHJcbiAgICAvLyBsaW1pdCB0byBmaXJzdCAxMDAwMCBjaGFycyB0byBhdm9pZCB0b2tlbiBibG9hdFxyXG4gICAgcmV0dXJuIHRleHQuc3Vic3RyaW5nKDAsIDEwMDAwKTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihgUERGIGV4dHJhY3Rpb24gZmFpbGVkOiAke2Vyci5tZXNzYWdlfWApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlUXVpekpTT04oZGF0YSkge1xyXG4gIGlmICghQXJyYXkuaXNBcnJheShkYXRhKSkgdGhyb3cgbmV3IEVycm9yKCdSZXNwb25zZSBtdXN0IGJlIGFuIGFycmF5Jyk7XHJcbiAgaWYgKGRhdGEubGVuZ3RoID09PSAwKSB0aHJvdyBuZXcgRXJyb3IoJ05vIHF1ZXN0aW9ucyBnZW5lcmF0ZWQnKTtcclxuICBcclxuICBjb25zdCBlcnJvcnMgPSBbXTtcclxuICBkYXRhLmZvckVhY2goKHEsIGlkeCkgPT4ge1xyXG4gICAgaWYgKCFxLnF1ZXN0aW9uIHx8IHR5cGVvZiBxLnF1ZXN0aW9uICE9PSAnc3RyaW5nJykgZXJyb3JzLnB1c2goYFEke2lkeCArIDF9OiBtaXNzaW5nIHF1ZXN0aW9uIHRleHRgKTtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShxLm9wdGlvbnMpIHx8IHEub3B0aW9ucy5sZW5ndGggIT09IDQpIGVycm9ycy5wdXNoKGBRJHtpZHggKyAxfTogbXVzdCBoYXZlIDQgb3B0aW9uc2ApO1xyXG4gICAgZWxzZSBxLm9wdGlvbnMuZm9yRWFjaCgobywgaikgPT4geyBpZiAoIW8gfHwgdHlwZW9mIG8gIT09ICdzdHJpbmcnKSBlcnJvcnMucHVzaChgUSR7aWR4ICsgMX0gb3B0JHtqICsgMX06IGludmFsaWRgKTsgfSk7XHJcbiAgICBpZiAodHlwZW9mIHEuY29ycmVjdEFuc3dlciAhPT0gJ251bWJlcicgfHwgcS5jb3JyZWN0QW5zd2VyIDwgMCB8fCBxLmNvcnJlY3RBbnN3ZXIgPiAzKSBlcnJvcnMucHVzaChgUSR7aWR4ICsgMX06IGNvcnJlY3RBbnN3ZXIgbXVzdCBiZSAwLTNgKTtcclxuICB9KTtcclxuICBcclxuICBpZiAoZXJyb3JzLmxlbmd0aCkgdGhyb3cgbmV3IEVycm9yKGVycm9ycy5qb2luKCc7ICcpKTtcclxuICByZXR1cm4gZGF0YTtcclxufVxyXG4iXSwibmFtZXMiOlsicGRmUGFyc2UiLCJleHRyYWN0VGV4dEZyb21QREYiLCJidWZmZXIiLCJkYXRhIiwidGV4dCIsInN1YnN0cmluZyIsImVyciIsIkVycm9yIiwibWVzc2FnZSIsInZhbGlkYXRlUXVpekpTT04iLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJlcnJvcnMiLCJmb3JFYWNoIiwicSIsImlkeCIsInF1ZXN0aW9uIiwicHVzaCIsIm9wdGlvbnMiLCJvIiwiaiIsImNvcnJlY3RBbnN3ZXIiLCJqb2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/aiQuiz.js\n");

/***/ }),

/***/ "(rsc)/./lib/auth.js":
/*!*********************!*\
  !*** ./lib/auth.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\nconst JWT_SECRET = process.env.JWT_SECRET || \"change-this-secret\";\nfunction signToken(payload, opts = {\n    expiresIn: \"7d\"\n}) {\n    return jwt.sign(payload, JWT_SECRET, opts);\n}\nfunction verifyToken(token) {\n    return jwt.verify(token, JWT_SECRET);\n}\nmodule.exports = {\n    signToken,\n    verifyToken\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXV0aC5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsTUFBTUMsbUJBQU9BLENBQUM7QUFDcEIsTUFBTUMsYUFBYUMsUUFBUUMsR0FBRyxDQUFDRixVQUFVLElBQUk7QUFFN0MsU0FBU0csVUFBVUMsT0FBTyxFQUFFQyxPQUFPO0lBQUVDLFdBQVc7QUFBSyxDQUFDO0lBQ3BELE9BQU9SLElBQUlTLElBQUksQ0FBQ0gsU0FBU0osWUFBWUs7QUFDdkM7QUFFQSxTQUFTRyxZQUFZQyxLQUFLO0lBQ3hCLE9BQU9YLElBQUlZLE1BQU0sQ0FBQ0QsT0FBT1Q7QUFDM0I7QUFFQVcsT0FBT0MsT0FBTyxHQUFHO0lBQUVUO0lBQVdLO0FBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vbmxpbmUtcXVpei1hc3Nlc3NtZW50Ly4vbGliL2F1dGguanM/Mjg3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBqd3QgPSByZXF1aXJlKCdqc29ud2VidG9rZW4nKTtcclxuY29uc3QgSldUX1NFQ1JFVCA9IHByb2Nlc3MuZW52LkpXVF9TRUNSRVQgfHwgJ2NoYW5nZS10aGlzLXNlY3JldCc7XHJcblxyXG5mdW5jdGlvbiBzaWduVG9rZW4ocGF5bG9hZCwgb3B0cyA9IHsgZXhwaXJlc0luOiAnN2QnIH0pIHtcclxuICByZXR1cm4gand0LnNpZ24ocGF5bG9hZCwgSldUX1NFQ1JFVCwgb3B0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZlcmlmeVRva2VuKHRva2VuKSB7XHJcbiAgcmV0dXJuIGp3dC52ZXJpZnkodG9rZW4sIEpXVF9TRUNSRVQpO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHsgc2lnblRva2VuLCB2ZXJpZnlUb2tlbiB9O1xyXG4iXSwibmFtZXMiOlsiand0IiwicmVxdWlyZSIsIkpXVF9TRUNSRVQiLCJwcm9jZXNzIiwiZW52Iiwic2lnblRva2VuIiwicGF5bG9hZCIsIm9wdHMiLCJleHBpcmVzSW4iLCJzaWduIiwidmVyaWZ5VG9rZW4iLCJ0b2tlbiIsInZlcmlmeSIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth.js\n");

/***/ }),

/***/ "(rsc)/./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nlet cached = global.mongoose;\nif (!cached) cached = global.mongoose = {\n    conn: null,\n    promise: null\n};\nasync function connectDB() {\n    if (cached.conn) return cached.conn;\n    if (!process.env.MONGODB_URI) throw new Error(\"MONGODB_URI not set\");\n    if (!cached.promise) {\n        cached.promise = mongoose.connect(process.env.MONGODB_URI, {\n            dbName: process.env.MONGODB_DB || undefined,\n            useNewUrlParser: true,\n            useUnifiedTopology: true\n        }).then((m)=>m.connection);\n    }\n    cached.conn = await cached.promise;\n    return cached.conn;\n}\nmodule.exports = connectDB;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZGIuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLFdBQVdDLG1CQUFPQSxDQUFDO0FBRXpCLElBQUlDLFNBQVNDLE9BQU9ILFFBQVE7QUFDNUIsSUFBSSxDQUFDRSxRQUFRQSxTQUFTQyxPQUFPSCxRQUFRLEdBQUc7SUFBRUksTUFBTTtJQUFNQyxTQUFTO0FBQUs7QUFFcEUsZUFBZUM7SUFDYixJQUFJSixPQUFPRSxJQUFJLEVBQUUsT0FBT0YsT0FBT0UsSUFBSTtJQUNuQyxJQUFJLENBQUNHLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVyxFQUFFLE1BQU0sSUFBSUMsTUFBTTtJQUU5QyxJQUFJLENBQUNSLE9BQU9HLE9BQU8sRUFBRTtRQUNuQkgsT0FBT0csT0FBTyxHQUFHTCxTQUFTVyxPQUFPLENBQUNKLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVyxFQUFFO1lBQ3pERyxRQUFRTCxRQUFRQyxHQUFHLENBQUNLLFVBQVUsSUFBSUM7WUFDbENDLGlCQUFpQjtZQUNqQkMsb0JBQW9CO1FBQ3RCLEdBQUdDLElBQUksQ0FBQyxDQUFDQyxJQUFNQSxFQUFFQyxVQUFVO0lBQzdCO0lBQ0FqQixPQUFPRSxJQUFJLEdBQUcsTUFBTUYsT0FBT0csT0FBTztJQUNsQyxPQUFPSCxPQUFPRSxJQUFJO0FBQ3BCO0FBRUFnQixPQUFPQyxPQUFPLEdBQUdmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb25saW5lLXF1aXotYXNzZXNzbWVudC8uL2xpYi9kYi5qcz8zZGM5Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcclxuXHJcbmxldCBjYWNoZWQgPSBnbG9iYWwubW9uZ29vc2U7XHJcbmlmICghY2FjaGVkKSBjYWNoZWQgPSBnbG9iYWwubW9uZ29vc2UgPSB7IGNvbm46IG51bGwsIHByb21pc2U6IG51bGwgfTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGNvbm5lY3REQigpIHtcclxuICBpZiAoY2FjaGVkLmNvbm4pIHJldHVybiBjYWNoZWQuY29ubjtcclxuICBpZiAoIXByb2Nlc3MuZW52Lk1PTkdPREJfVVJJKSB0aHJvdyBuZXcgRXJyb3IoJ01PTkdPREJfVVJJIG5vdCBzZXQnKTtcclxuXHJcbiAgaWYgKCFjYWNoZWQucHJvbWlzZSkge1xyXG4gICAgY2FjaGVkLnByb21pc2UgPSBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJLCB7XHJcbiAgICAgIGRiTmFtZTogcHJvY2Vzcy5lbnYuTU9OR09EQl9EQiB8fCB1bmRlZmluZWQsXHJcbiAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxuICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxyXG4gICAgfSkudGhlbigobSkgPT4gbS5jb25uZWN0aW9uKTtcclxuICB9XHJcbiAgY2FjaGVkLmNvbm4gPSBhd2FpdCBjYWNoZWQucHJvbWlzZTtcclxuICByZXR1cm4gY2FjaGVkLmNvbm47XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gY29ubmVjdERCO1xyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJyZXF1aXJlIiwiY2FjaGVkIiwiZ2xvYmFsIiwiY29ubiIsInByb21pc2UiLCJjb25uZWN0REIiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJFcnJvciIsImNvbm5lY3QiLCJkYk5hbWUiLCJNT05HT0RCX0RCIiwidW5kZWZpbmVkIiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwidGhlbiIsIm0iLCJjb25uZWN0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/db.js\n");

/***/ }),

/***/ "(rsc)/./lib/middleware.js":
/*!***************************!*\
  !*** ./lib/middleware.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nconst { verifyToken } = __webpack_require__(/*! ./auth */ \"(rsc)/./lib/auth.js\");\nconst connectDB = __webpack_require__(/*! ./db */ \"(rsc)/./lib/db.js\");\nconst User = __webpack_require__(/*! ../models/User */ \"(rsc)/./models/User.js\");\nasync function getUserFromRequest(req) {\n    const auth = req.headers.get ? req.headers.get(\"authorization\") : req.headers.authorization;\n    if (!auth) return null;\n    const parts = auth.split(\" \");\n    if (parts.length !== 2) return null;\n    const token = parts[1];\n    try {\n        const payload = verifyToken(token);\n        await connectDB();\n        const user = await User.findById(payload.id).select(\"-password\");\n        return user;\n    } catch (err) {\n        return null;\n    }\n}\nfunction requireRole(user, role) {\n    return user && user.role === role;\n}\nmodule.exports = {\n    getUserFromRequest,\n    requireRole\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbWlkZGxld2FyZS5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTSxFQUFFQSxXQUFXLEVBQUUsR0FBR0MsbUJBQU9BLENBQUM7QUFDaEMsTUFBTUMsWUFBWUQsbUJBQU9BLENBQUM7QUFDMUIsTUFBTUUsT0FBT0YsbUJBQU9BLENBQUM7QUFFckIsZUFBZUcsbUJBQW1CQyxHQUFHO0lBQ25DLE1BQU1DLE9BQU9ELElBQUlFLE9BQU8sQ0FBQ0MsR0FBRyxHQUFHSCxJQUFJRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUJILElBQUlFLE9BQU8sQ0FBQ0UsYUFBYTtJQUMzRixJQUFJLENBQUNILE1BQU0sT0FBTztJQUNsQixNQUFNSSxRQUFRSixLQUFLSyxLQUFLLENBQUM7SUFDekIsSUFBSUQsTUFBTUUsTUFBTSxLQUFLLEdBQUcsT0FBTztJQUMvQixNQUFNQyxRQUFRSCxLQUFLLENBQUMsRUFBRTtJQUN0QixJQUFJO1FBQ0YsTUFBTUksVUFBVWQsWUFBWWE7UUFDNUIsTUFBTVg7UUFDTixNQUFNYSxPQUFPLE1BQU1aLEtBQUthLFFBQVEsQ0FBQ0YsUUFBUUcsRUFBRSxFQUFFQyxNQUFNLENBQUM7UUFDcEQsT0FBT0g7SUFDVCxFQUFFLE9BQU9JLEtBQUs7UUFDWixPQUFPO0lBQ1Q7QUFDRjtBQUVBLFNBQVNDLFlBQVlMLElBQUksRUFBRU0sSUFBSTtJQUM3QixPQUFPTixRQUFRQSxLQUFLTSxJQUFJLEtBQUtBO0FBQy9CO0FBRUFDLE9BQU9DLE9BQU8sR0FBRztJQUFFbkI7SUFBb0JnQjtBQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb25saW5lLXF1aXotYXNzZXNzbWVudC8uL2xpYi9taWRkbGV3YXJlLmpzP2IxNTgiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyB2ZXJpZnlUb2tlbiB9ID0gcmVxdWlyZSgnLi9hdXRoJyk7XHJcbmNvbnN0IGNvbm5lY3REQiA9IHJlcXVpcmUoJy4vZGInKTtcclxuY29uc3QgVXNlciA9IHJlcXVpcmUoJy4uL21vZGVscy9Vc2VyJyk7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRVc2VyRnJvbVJlcXVlc3QocmVxKSB7XHJcbiAgY29uc3QgYXV0aCA9IHJlcS5oZWFkZXJzLmdldCA/IHJlcS5oZWFkZXJzLmdldCgnYXV0aG9yaXphdGlvbicpIDogcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbjtcclxuICBpZiAoIWF1dGgpIHJldHVybiBudWxsO1xyXG4gIGNvbnN0IHBhcnRzID0gYXV0aC5zcGxpdCgnICcpO1xyXG4gIGlmIChwYXJ0cy5sZW5ndGggIT09IDIpIHJldHVybiBudWxsO1xyXG4gIGNvbnN0IHRva2VuID0gcGFydHNbMV07XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHBheWxvYWQgPSB2ZXJpZnlUb2tlbih0b2tlbik7XHJcbiAgICBhd2FpdCBjb25uZWN0REIoKTtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRCeUlkKHBheWxvYWQuaWQpLnNlbGVjdCgnLXBhc3N3b3JkJyk7XHJcbiAgICByZXR1cm4gdXNlcjtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVxdWlyZVJvbGUodXNlciwgcm9sZSkge1xyXG4gIHJldHVybiB1c2VyICYmIHVzZXIucm9sZSA9PT0gcm9sZTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7IGdldFVzZXJGcm9tUmVxdWVzdCwgcmVxdWlyZVJvbGUgfTtcclxuIl0sIm5hbWVzIjpbInZlcmlmeVRva2VuIiwicmVxdWlyZSIsImNvbm5lY3REQiIsIlVzZXIiLCJnZXRVc2VyRnJvbVJlcXVlc3QiLCJyZXEiLCJhdXRoIiwiaGVhZGVycyIsImdldCIsImF1dGhvcml6YXRpb24iLCJwYXJ0cyIsInNwbGl0IiwibGVuZ3RoIiwidG9rZW4iLCJwYXlsb2FkIiwidXNlciIsImZpbmRCeUlkIiwiaWQiLCJzZWxlY3QiLCJlcnIiLCJyZXF1aXJlUm9sZSIsInJvbGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/middleware.js\n");

/***/ }),

/***/ "(rsc)/./lib/openai.js":
/*!***********************!*\
  !*** ./lib/openai.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateQuizQuestions: () => (/* binding */ generateQuizQuestions)\n/* harmony export */ });\n/* harmony import */ var _google_genai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @google/genai */ \"(rsc)/./node_modules/@google/genai/dist/node/index.mjs\");\n\nconst ai = new _google_genai__WEBPACK_IMPORTED_MODULE_0__.GoogleGenAI({\n    apiKey: process.env.GEMINI_API_KEY\n});\nasync function generateQuizQuestions(extractedText, numberOfQuestions, difficulty) {\n    const prompt = `You are an expert educational assessment generator.\r\n\r\nGenerate exactly ${numberOfQuestions} multiple-choice questions from the study material below.\r\nDifficulty Level: ${difficulty}\r\n\r\nIMPORTANT RULES:\r\n- Each question must have exactly 4 options\r\n- Only one correct answer per question\r\n- Return ONLY a valid JSON array, no other text\r\n- Do NOT include markdown code blocks, explanations, or any extra text\r\n- Questions must test comprehension and logical understanding of the content\r\n- For HARD difficulty: use confusing distractors that are similar to the answer\r\n- For EASY difficulty: use clearly different distractors\r\n- For MEDIUM difficulty: use balanced distractors\r\n\r\nReturn ONLY this JSON format with no additional text:\r\n[\r\n{\"question\":\"What is...?\",\"options\":[\"Option A\",\"Option B\",\"Option C\",\"Option D\"],\"correctAnswer\":0},\r\n{\"question\":\"How does...?\",\"options\":[\"Option A\",\"Option B\",\"Option C\",\"Option D\"],\"correctAnswer\":1}\r\n]\r\n\r\nStudy Material:\r\n${extractedText}`;\n    try {\n        const response = await ai.models.generateContent({\n            model: \"gemini-3-flash-preview\",\n            contents: prompt\n        });\n        const content = response.text;\n        // Parse JSON from response\n        const jsonMatch = content.match(/\\[[\\s\\S]*\\]/);\n        if (!jsonMatch) {\n            throw new Error(\"No valid JSON found in response\");\n        }\n        const questions = JSON.parse(jsonMatch[0]);\n        // Validate\n        if (!Array.isArray(questions) || questions.length === 0) {\n            throw new Error(\"Invalid response format\");\n        }\n        return questions.slice(0, numberOfQuestions);\n    } catch (err) {\n        console.error(\"Gemini AI error:\", err.message);\n        throw new Error(`AI generation failed: ${err.message}`);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvb3BlbmFpLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTRDO0FBRTVDLE1BQU1DLEtBQUssSUFBSUQsc0RBQVdBLENBQUM7SUFBRUUsUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxjQUFjO0FBQUM7QUFFekQsZUFBZUMsc0JBQXNCQyxhQUFhLEVBQUVDLGlCQUFpQixFQUFFQyxVQUFVO0lBQ3RGLE1BQU1DLFNBQVMsQ0FBQzs7aUJBRUQsRUFBRUYsa0JBQWtCO2tCQUNuQixFQUFFQyxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUIvQixFQUFFRixjQUFjLENBQUM7SUFFZixJQUFJO1FBQ0YsTUFBTUksV0FBVyxNQUFNVixHQUFHVyxNQUFNLENBQUNDLGVBQWUsQ0FBQztZQUMvQ0MsT0FBTztZQUNQQyxVQUFVTDtRQUNaO1FBRUEsTUFBTU0sVUFBVUwsU0FBU00sSUFBSTtRQUU3QiwyQkFBMkI7UUFDM0IsTUFBTUMsWUFBWUYsUUFBUUcsS0FBSyxDQUFDO1FBQ2hDLElBQUksQ0FBQ0QsV0FBVztZQUNkLE1BQU0sSUFBSUUsTUFBTTtRQUNsQjtRQUVBLE1BQU1DLFlBQVlDLEtBQUtDLEtBQUssQ0FBQ0wsU0FBUyxDQUFDLEVBQUU7UUFFekMsV0FBVztRQUNYLElBQUksQ0FBQ00sTUFBTUMsT0FBTyxDQUFDSixjQUFjQSxVQUFVSyxNQUFNLEtBQUssR0FBRztZQUN2RCxNQUFNLElBQUlOLE1BQU07UUFDbEI7UUFFQSxPQUFPQyxVQUFVTSxLQUFLLENBQUMsR0FBR25CO0lBQzVCLEVBQUUsT0FBT29CLEtBQUs7UUFDWkMsUUFBUUMsS0FBSyxDQUFDLG9CQUFvQkYsSUFBSUcsT0FBTztRQUM3QyxNQUFNLElBQUlYLE1BQU0sQ0FBQyxzQkFBc0IsRUFBRVEsSUFBSUcsT0FBTyxDQUFDLENBQUM7SUFDeEQ7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL29ubGluZS1xdWl6LWFzc2Vzc21lbnQvLi9saWIvb3BlbmFpLmpzPzkyMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR29vZ2xlR2VuQUkgfSBmcm9tICdAZ29vZ2xlL2dlbmFpJztcclxuXHJcbmNvbnN0IGFpID0gbmV3IEdvb2dsZUdlbkFJKHsgYXBpS2V5OiBwcm9jZXNzLmVudi5HRU1JTklfQVBJX0tFWSB9KTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZW5lcmF0ZVF1aXpRdWVzdGlvbnMoZXh0cmFjdGVkVGV4dCwgbnVtYmVyT2ZRdWVzdGlvbnMsIGRpZmZpY3VsdHkpIHtcclxuICBjb25zdCBwcm9tcHQgPSBgWW91IGFyZSBhbiBleHBlcnQgZWR1Y2F0aW9uYWwgYXNzZXNzbWVudCBnZW5lcmF0b3IuXHJcblxyXG5HZW5lcmF0ZSBleGFjdGx5ICR7bnVtYmVyT2ZRdWVzdGlvbnN9IG11bHRpcGxlLWNob2ljZSBxdWVzdGlvbnMgZnJvbSB0aGUgc3R1ZHkgbWF0ZXJpYWwgYmVsb3cuXHJcbkRpZmZpY3VsdHkgTGV2ZWw6ICR7ZGlmZmljdWx0eX1cclxuXHJcbklNUE9SVEFOVCBSVUxFUzpcclxuLSBFYWNoIHF1ZXN0aW9uIG11c3QgaGF2ZSBleGFjdGx5IDQgb3B0aW9uc1xyXG4tIE9ubHkgb25lIGNvcnJlY3QgYW5zd2VyIHBlciBxdWVzdGlvblxyXG4tIFJldHVybiBPTkxZIGEgdmFsaWQgSlNPTiBhcnJheSwgbm8gb3RoZXIgdGV4dFxyXG4tIERvIE5PVCBpbmNsdWRlIG1hcmtkb3duIGNvZGUgYmxvY2tzLCBleHBsYW5hdGlvbnMsIG9yIGFueSBleHRyYSB0ZXh0XHJcbi0gUXVlc3Rpb25zIG11c3QgdGVzdCBjb21wcmVoZW5zaW9uIGFuZCBsb2dpY2FsIHVuZGVyc3RhbmRpbmcgb2YgdGhlIGNvbnRlbnRcclxuLSBGb3IgSEFSRCBkaWZmaWN1bHR5OiB1c2UgY29uZnVzaW5nIGRpc3RyYWN0b3JzIHRoYXQgYXJlIHNpbWlsYXIgdG8gdGhlIGFuc3dlclxyXG4tIEZvciBFQVNZIGRpZmZpY3VsdHk6IHVzZSBjbGVhcmx5IGRpZmZlcmVudCBkaXN0cmFjdG9yc1xyXG4tIEZvciBNRURJVU0gZGlmZmljdWx0eTogdXNlIGJhbGFuY2VkIGRpc3RyYWN0b3JzXHJcblxyXG5SZXR1cm4gT05MWSB0aGlzIEpTT04gZm9ybWF0IHdpdGggbm8gYWRkaXRpb25hbCB0ZXh0OlxyXG5bXHJcbntcInF1ZXN0aW9uXCI6XCJXaGF0IGlzLi4uP1wiLFwib3B0aW9uc1wiOltcIk9wdGlvbiBBXCIsXCJPcHRpb24gQlwiLFwiT3B0aW9uIENcIixcIk9wdGlvbiBEXCJdLFwiY29ycmVjdEFuc3dlclwiOjB9LFxyXG57XCJxdWVzdGlvblwiOlwiSG93IGRvZXMuLi4/XCIsXCJvcHRpb25zXCI6W1wiT3B0aW9uIEFcIixcIk9wdGlvbiBCXCIsXCJPcHRpb24gQ1wiLFwiT3B0aW9uIERcIl0sXCJjb3JyZWN0QW5zd2VyXCI6MX1cclxuXVxyXG5cclxuU3R1ZHkgTWF0ZXJpYWw6XHJcbiR7ZXh0cmFjdGVkVGV4dH1gO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhaS5tb2RlbHMuZ2VuZXJhdGVDb250ZW50KHtcclxuICAgICAgbW9kZWw6ICdnZW1pbmktMy1mbGFzaC1wcmV2aWV3JyxcclxuICAgICAgY29udGVudHM6IHByb21wdCxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGNvbnRlbnQgPSByZXNwb25zZS50ZXh0O1xyXG4gICAgXHJcbiAgICAvLyBQYXJzZSBKU09OIGZyb20gcmVzcG9uc2VcclxuICAgIGNvbnN0IGpzb25NYXRjaCA9IGNvbnRlbnQubWF0Y2goL1xcW1tcXHNcXFNdKlxcXS8pO1xyXG4gICAgaWYgKCFqc29uTWF0Y2gpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyB2YWxpZCBKU09OIGZvdW5kIGluIHJlc3BvbnNlJyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IHF1ZXN0aW9ucyA9IEpTT04ucGFyc2UoanNvbk1hdGNoWzBdKTtcclxuICAgIFxyXG4gICAgLy8gVmFsaWRhdGVcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShxdWVzdGlvbnMpIHx8IHF1ZXN0aW9ucy5sZW5ndGggPT09IDApIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHJlc3BvbnNlIGZvcm1hdCcpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gcXVlc3Rpb25zLnNsaWNlKDAsIG51bWJlck9mUXVlc3Rpb25zKTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0dlbWluaSBBSSBlcnJvcjonLCBlcnIubWVzc2FnZSk7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEFJIGdlbmVyYXRpb24gZmFpbGVkOiAke2Vyci5tZXNzYWdlfWApO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiR29vZ2xlR2VuQUkiLCJhaSIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJHRU1JTklfQVBJX0tFWSIsImdlbmVyYXRlUXVpelF1ZXN0aW9ucyIsImV4dHJhY3RlZFRleHQiLCJudW1iZXJPZlF1ZXN0aW9ucyIsImRpZmZpY3VsdHkiLCJwcm9tcHQiLCJyZXNwb25zZSIsIm1vZGVscyIsImdlbmVyYXRlQ29udGVudCIsIm1vZGVsIiwiY29udGVudHMiLCJjb250ZW50IiwidGV4dCIsImpzb25NYXRjaCIsIm1hdGNoIiwiRXJyb3IiLCJxdWVzdGlvbnMiLCJKU09OIiwicGFyc2UiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJzbGljZSIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/openai.js\n");

/***/ }),

/***/ "(rsc)/./models/Quiz.js":
/*!************************!*\
  !*** ./models/Quiz.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst QuestionSchema = new mongoose.Schema({\n    question: {\n        type: String,\n        required: true\n    },\n    options: [\n        {\n            type: String,\n            required: true\n        }\n    ],\n    correctAnswer: {\n        type: Number,\n        required: true\n    }\n});\nconst QuizSchema = new mongoose.Schema({\n    title: {\n        type: String,\n        required: true\n    },\n    description: {\n        type: String\n    },\n    duration: {\n        type: Number,\n        default: 0\n    },\n    accessPassword: {\n        type: String\n    },\n    createdBy: {\n        type: mongoose.Schema.Types.ObjectId,\n        ref: \"User\",\n        required: true\n    },\n    questions: [\n        QuestionSchema\n    ],\n    createdAt: {\n        type: Date,\n        default: Date.now\n    }\n});\nmodule.exports = mongoose.models.Quiz || mongoose.model(\"Quiz\", QuizSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvUXVpei5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsV0FBV0MsbUJBQU9BLENBQUM7QUFFekIsTUFBTUMsaUJBQWlCLElBQUlGLFNBQVNHLE1BQU0sQ0FBQztJQUN6Q0MsVUFBVTtRQUFFQyxNQUFNQztRQUFRQyxVQUFVO0lBQUs7SUFDekNDLFNBQVM7UUFBQztZQUFFSCxNQUFNQztZQUFRQyxVQUFVO1FBQUs7S0FBRTtJQUMzQ0UsZUFBZTtRQUFFSixNQUFNSztRQUFRSCxVQUFVO0lBQUs7QUFDaEQ7QUFFQSxNQUFNSSxhQUFhLElBQUlYLFNBQVNHLE1BQU0sQ0FBQztJQUNyQ1MsT0FBTztRQUFFUCxNQUFNQztRQUFRQyxVQUFVO0lBQUs7SUFDdENNLGFBQWE7UUFBRVIsTUFBTUM7SUFBTztJQUM1QlEsVUFBVTtRQUFFVCxNQUFNSztRQUFRSyxTQUFTO0lBQUU7SUFDckNDLGdCQUFnQjtRQUFFWCxNQUFNQztJQUFPO0lBQy9CVyxXQUFXO1FBQUVaLE1BQU1MLFNBQVNHLE1BQU0sQ0FBQ2UsS0FBSyxDQUFDQyxRQUFRO1FBQUVDLEtBQUs7UUFBUWIsVUFBVTtJQUFLO0lBQy9FYyxXQUFXO1FBQUNuQjtLQUFlO0lBQzNCb0IsV0FBVztRQUFFakIsTUFBTWtCO1FBQU1SLFNBQVNRLEtBQUtDLEdBQUc7SUFBQztBQUM3QztBQUVBQyxPQUFPQyxPQUFPLEdBQUcxQixTQUFTMkIsTUFBTSxDQUFDQyxJQUFJLElBQUk1QixTQUFTNkIsS0FBSyxDQUFDLFFBQVFsQiIsInNvdXJjZXMiOlsid2VicGFjazovL29ubGluZS1xdWl6LWFzc2Vzc21lbnQvLi9tb2RlbHMvUXVpei5qcz82ZDgzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcclxuXHJcbmNvbnN0IFF1ZXN0aW9uU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgcXVlc3Rpb246IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gIG9wdGlvbnM6IFt7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfV0sXHJcbiAgY29ycmVjdEFuc3dlcjogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlIH1cclxufSk7XHJcblxyXG5jb25zdCBRdWl6U2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgdGl0bGU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gIGRlc2NyaXB0aW9uOiB7IHR5cGU6IFN0cmluZyB9LFxyXG4gIGR1cmF0aW9uOiB7IHR5cGU6IE51bWJlciwgZGVmYXVsdDogMCB9LFxyXG4gIGFjY2Vzc1Bhc3N3b3JkOiB7IHR5cGU6IFN0cmluZyB9LFxyXG4gIGNyZWF0ZWRCeTogeyB0eXBlOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsIHJlZjogJ1VzZXInLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gIHF1ZXN0aW9uczogW1F1ZXN0aW9uU2NoZW1hXSxcclxuICBjcmVhdGVkQXQ6IHsgdHlwZTogRGF0ZSwgZGVmYXVsdDogRGF0ZS5ub3cgfVxyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbW9uZ29vc2UubW9kZWxzLlF1aXogfHwgbW9uZ29vc2UubW9kZWwoJ1F1aXonLCBRdWl6U2NoZW1hKTtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsIlF1ZXN0aW9uU2NoZW1hIiwiU2NoZW1hIiwicXVlc3Rpb24iLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJvcHRpb25zIiwiY29ycmVjdEFuc3dlciIsIk51bWJlciIsIlF1aXpTY2hlbWEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZHVyYXRpb24iLCJkZWZhdWx0IiwiYWNjZXNzUGFzc3dvcmQiLCJjcmVhdGVkQnkiLCJUeXBlcyIsIk9iamVjdElkIiwicmVmIiwicXVlc3Rpb25zIiwiY3JlYXRlZEF0IiwiRGF0ZSIsIm5vdyIsIm1vZHVsZSIsImV4cG9ydHMiLCJtb2RlbHMiLCJRdWl6IiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./models/Quiz.js\n");

/***/ }),

/***/ "(rsc)/./models/User.js":
/*!************************!*\
  !*** ./models/User.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst UserSchema = new mongoose.Schema({\n    name: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String,\n        required: true\n    },\n    role: {\n        type: String,\n        enum: [\n            \"teacher\",\n            \"student\"\n        ],\n        required: true\n    },\n    createdAt: {\n        type: Date,\n        default: Date.now\n    }\n});\nmodule.exports = mongoose.models.User || mongoose.model(\"User\", UserSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvVXNlci5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsV0FBV0MsbUJBQU9BLENBQUM7QUFFekIsTUFBTUMsYUFBYSxJQUFJRixTQUFTRyxNQUFNLENBQUM7SUFDckNDLE1BQU07UUFBRUMsTUFBTUM7UUFBUUMsVUFBVTtJQUFLO0lBQ3JDQyxPQUFPO1FBQUVILE1BQU1DO1FBQVFDLFVBQVU7UUFBTUUsUUFBUTtJQUFLO0lBQ3BEQyxVQUFVO1FBQUVMLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUN6Q0ksTUFBTTtRQUFFTixNQUFNQztRQUFRTSxNQUFNO1lBQUM7WUFBVztTQUFVO1FBQUVMLFVBQVU7SUFBSztJQUNuRU0sV0FBVztRQUFFUixNQUFNUztRQUFNQyxTQUFTRCxLQUFLRSxHQUFHO0lBQUM7QUFDN0M7QUFFQUMsT0FBT0MsT0FBTyxHQUFHbEIsU0FBU21CLE1BQU0sQ0FBQ0MsSUFBSSxJQUFJcEIsU0FBU3FCLEtBQUssQ0FBQyxRQUFRbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vbmxpbmUtcXVpei1hc3Nlc3NtZW50Ly4vbW9kZWxzL1VzZXIuanM/NzM2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJyk7XHJcblxyXG5jb25zdCBVc2VyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgbmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgZW1haWw6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgdW5pcXVlOiB0cnVlIH0sXHJcbiAgcGFzc3dvcmQ6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gIHJvbGU6IHsgdHlwZTogU3RyaW5nLCBlbnVtOiBbJ3RlYWNoZXInLCAnc3R1ZGVudCddLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gIGNyZWF0ZWRBdDogeyB0eXBlOiBEYXRlLCBkZWZhdWx0OiBEYXRlLm5vdyB9XHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBtb25nb29zZS5tb2RlbHMuVXNlciB8fCBtb25nb29zZS5tb2RlbCgnVXNlcicsIFVzZXJTY2hlbWEpO1xyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJyZXF1aXJlIiwiVXNlclNjaGVtYSIsIlNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJlbWFpbCIsInVuaXF1ZSIsInBhc3N3b3JkIiwicm9sZSIsImVudW0iLCJjcmVhdGVkQXQiLCJEYXRlIiwiZGVmYXVsdCIsIm5vdyIsIm1vZHVsZSIsImV4cG9ydHMiLCJtb2RlbHMiLCJVc2VyIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./models/User.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/pdf-parse","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/jws","vendor-chunks/lodash.once","vendor-chunks/jwa","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/lodash.isplainobject","vendor-chunks/ms","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time","vendor-chunks/google-auth-library","vendor-chunks/ws","vendor-chunks/gaxios","vendor-chunks/json-bigint","vendor-chunks/google-logging-utils","vendor-chunks/gcp-metadata","vendor-chunks/@google","vendor-chunks/gtoken","vendor-chunks/extend","vendor-chunks/bignumber.js","vendor-chunks/base64-js"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fquiz%2Fgenerate-ai%2Froute&page=%2Fapi%2Fquiz%2Fgenerate-ai%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fquiz%2Fgenerate-ai%2Froute.js&appDir=D%3A%5Cquiz%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cquiz&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();