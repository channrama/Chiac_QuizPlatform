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

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fquiz%2Fgenerate-ai%2Froute&page=%2Fapi%2Fquiz%2Fgenerate-ai%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fquiz%2Fgenerate-ai%2Froute.js&appDir=D%3A%5Cchaic_quiz%5CChiac_QuizPlatform%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cchaic_quiz%5CChiac_QuizPlatform&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fquiz%2Fgenerate-ai%2Froute&page=%2Fapi%2Fquiz%2Fgenerate-ai%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fquiz%2Fgenerate-ai%2Froute.js&appDir=D%3A%5Cchaic_quiz%5CChiac_QuizPlatform%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cchaic_quiz%5CChiac_QuizPlatform&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_chaic_quiz_Chiac_QuizPlatform_app_api_quiz_generate_ai_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/quiz/generate-ai/route.js */ \"(rsc)/./app/api/quiz/generate-ai/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/quiz/generate-ai/route\",\n        pathname: \"/api/quiz/generate-ai\",\n        filename: \"route\",\n        bundlePath: \"app/api/quiz/generate-ai/route\"\n    },\n    resolvedPagePath: \"D:\\\\chaic_quiz\\\\Chiac_QuizPlatform\\\\app\\\\api\\\\quiz\\\\generate-ai\\\\route.js\",\n    nextConfigOutput,\n    userland: D_chaic_quiz_Chiac_QuizPlatform_app_api_quiz_generate_ai_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/quiz/generate-ai/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZxdWl6JTJGZ2VuZXJhdGUtYWklMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnF1aXolMkZnZW5lcmF0ZS1haSUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnF1aXolMkZnZW5lcmF0ZS1haSUyRnJvdXRlLmpzJmFwcERpcj1EJTNBJTVDY2hhaWNfcXVpeiU1Q0NoaWFjX1F1aXpQbGF0Zm9ybSU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9RCUzQSU1Q2NoYWljX3F1aXolNUNDaGlhY19RdWl6UGxhdGZvcm0maXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ3lCO0FBQ3RHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb25saW5lLXF1aXotYXNzZXNzbWVudC8/MmU2MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJEOlxcXFxjaGFpY19xdWl6XFxcXENoaWFjX1F1aXpQbGF0Zm9ybVxcXFxhcHBcXFxcYXBpXFxcXHF1aXpcXFxcZ2VuZXJhdGUtYWlcXFxccm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3F1aXovZ2VuZXJhdGUtYWkvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9xdWl6L2dlbmVyYXRlLWFpXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9xdWl6L2dlbmVyYXRlLWFpL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiRDpcXFxcY2hhaWNfcXVpelxcXFxDaGlhY19RdWl6UGxhdGZvcm1cXFxcYXBwXFxcXGFwaVxcXFxxdWl6XFxcXGdlbmVyYXRlLWFpXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9xdWl6L2dlbmVyYXRlLWFpL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fquiz%2Fgenerate-ai%2Froute&page=%2Fapi%2Fquiz%2Fgenerate-ai%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fquiz%2Fgenerate-ai%2Froute.js&appDir=D%3A%5Cchaic_quiz%5CChiac_QuizPlatform%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cchaic_quiz%5CChiac_QuizPlatform&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/quiz/generate-ai/route.js":
/*!*******************************************!*\
  !*** ./app/api/quiz/generate-ai/route.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../lib/db */ \"(rsc)/./lib/db.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lib_db__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _models_Quiz__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/Quiz */ \"(rsc)/./models/Quiz.js\");\n/* harmony import */ var _models_Quiz__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_models_Quiz__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_middleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../lib/middleware */ \"(rsc)/./lib/middleware.js\");\n/* harmony import */ var _lib_middleware__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lib_middleware__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_aiQuiz__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../lib/aiQuiz */ \"(rsc)/./lib/aiQuiz.js\");\n/* harmony import */ var _lib_openai__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../lib/openai */ \"(rsc)/./lib/openai.js\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\nasync function POST(req) {\n    const user = await (0,_lib_middleware__WEBPACK_IMPORTED_MODULE_4__.getUserFromRequest)(req);\n    if (!user) return new Response(JSON.stringify({\n        error: \"Unauthorized\"\n    }), {\n        status: 401\n    });\n    if (!(0,_lib_middleware__WEBPACK_IMPORTED_MODULE_4__.requireRole)(user, \"teacher\")) return new Response(JSON.stringify({\n        error: \"Forbidden\"\n    }), {\n        status: 403\n    });\n    try {\n        const formData = await req.formData();\n        const pdfFile = formData.get(\"pdf\");\n        const title = formData.get(\"title\");\n        const difficulty = formData.get(\"difficulty\") || \"medium\";\n        const numberOfQuestions = parseInt(formData.get(\"numberOfQuestions\")) || 5;\n        const duration = parseInt(formData.get(\"duration\")) || 10;\n        const description = formData.get(\"description\") || \"\";\n        const accessPassword = formData.get(\"accessPassword\") || \"\";\n        if (!pdfFile) return new Response(JSON.stringify({\n            error: \"PDF file required\"\n        }), {\n            status: 400\n        });\n        if (!title || title.trim().length < 3) return new Response(JSON.stringify({\n            error: \"Quiz title required\"\n        }), {\n            status: 400\n        });\n        if (numberOfQuestions < 1 || numberOfQuestions > 50) return new Response(JSON.stringify({\n            error: \"Questions must be 1-50\"\n        }), {\n            status: 400\n        });\n        // convert file to buffer\n        const buffer = Buffer.from(await pdfFile.arrayBuffer());\n        // extract text\n        const extractedText = await (0,_lib_aiQuiz__WEBPACK_IMPORTED_MODULE_5__.extractTextFromPDF)(buffer);\n        if (!extractedText || extractedText.trim().length === 0) {\n            return new Response(JSON.stringify({\n                error: \"No text extracted from PDF\"\n            }), {\n                status: 400\n            });\n        }\n        // generate questions via AI\n        const questions = await (0,_lib_openai__WEBPACK_IMPORTED_MODULE_6__.generateQuizQuestions)(extractedText, numberOfQuestions, difficulty);\n        // validate\n        (0,_lib_aiQuiz__WEBPACK_IMPORTED_MODULE_5__.validateQuizJSON)(questions);\n        // save to db\n        await _lib_db__WEBPACK_IMPORTED_MODULE_2___default()();\n        // Generate unique 6-digit numeric join code and formal Quiz ID\n        let joinCode, quizId;\n        let isUnique = false;\n        while(!isUnique){\n            joinCode = Math.floor(100000 + Math.random() * 900000).toString();\n            quizId = `QZ-${Math.floor(100000 + Math.random() * 900000)}`;\n            const existing = await _models_Quiz__WEBPACK_IMPORTED_MODULE_3___default().findOne({\n                $or: [\n                    {\n                        joinCode\n                    },\n                    {\n                        quizId\n                    }\n                ]\n            });\n            if (!existing) isUnique = true;\n        }\n        const publicUrl = `quiz-${Math.floor(Math.random() * 10000000)}`;\n        const quizData = {\n            title,\n            description,\n            duration,\n            questions,\n            publicUrl,\n            joinCode,\n            quizId,\n            createdBy: user._id\n        };\n        if (accessPassword) {\n            const bcrypt = await __webpack_require__.e(/*! import() */ \"vendor-chunks/bcryptjs\").then(__webpack_require__.t.bind(__webpack_require__, /*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\", 23));\n            const hashed = await bcrypt.default.hash(String(accessPassword), 10);\n            quizData.accessPassword = hashed;\n        }\n        const quiz = await _models_Quiz__WEBPACK_IMPORTED_MODULE_3___default().create(quizData);\n        return new Response(JSON.stringify({\n            quiz,\n            message: \"Quiz generated successfully\"\n        }), {\n            status: 201\n        });\n    } catch (err) {\n        return new Response(JSON.stringify({\n            error: err.message\n        }), {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3F1aXovZ2VuZXJhdGUtYWkvcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ1o7QUFDZTtBQUNBO0FBQ2tDO0FBQ0M7QUFDZjtBQUNuQztBQUVyQixlQUFlVSxLQUFLQyxHQUFHO0lBQzVCLE1BQU1DLE9BQU8sTUFBTVIsbUVBQWtCQSxDQUFDTztJQUN0QyxJQUFJLENBQUNDLE1BQU0sT0FBTyxJQUFJQyxTQUFTQyxLQUFLQyxTQUFTLENBQUM7UUFBRUMsT0FBTztJQUFlLElBQUk7UUFBRUMsUUFBUTtJQUFJO0lBQ3hGLElBQUksQ0FBQ1osNERBQVdBLENBQUNPLE1BQU0sWUFBWSxPQUFPLElBQUlDLFNBQVNDLEtBQUtDLFNBQVMsQ0FBQztRQUFFQyxPQUFPO0lBQVksSUFBSTtRQUFFQyxRQUFRO0lBQUk7SUFFN0csSUFBSTtRQUNGLE1BQU1DLFdBQVcsTUFBTVAsSUFBSU8sUUFBUTtRQUNuQyxNQUFNQyxVQUFVRCxTQUFTRSxHQUFHLENBQUM7UUFDN0IsTUFBTUMsUUFBUUgsU0FBU0UsR0FBRyxDQUFDO1FBQzNCLE1BQU1FLGFBQWFKLFNBQVNFLEdBQUcsQ0FBQyxpQkFBaUI7UUFDakQsTUFBTUcsb0JBQW9CQyxTQUFTTixTQUFTRSxHQUFHLENBQUMseUJBQXlCO1FBQ3pFLE1BQU1LLFdBQVdELFNBQVNOLFNBQVNFLEdBQUcsQ0FBQyxnQkFBZ0I7UUFDdkQsTUFBTU0sY0FBY1IsU0FBU0UsR0FBRyxDQUFDLGtCQUFrQjtRQUNuRCxNQUFNTyxpQkFBaUJULFNBQVNFLEdBQUcsQ0FBQyxxQkFBcUI7UUFFekQsSUFBSSxDQUFDRCxTQUFTLE9BQU8sSUFBSU4sU0FBU0MsS0FBS0MsU0FBUyxDQUFDO1lBQUVDLE9BQU87UUFBb0IsSUFBSTtZQUFFQyxRQUFRO1FBQUk7UUFDaEcsSUFBSSxDQUFDSSxTQUFTQSxNQUFNTyxJQUFJLEdBQUdDLE1BQU0sR0FBRyxHQUFHLE9BQU8sSUFBSWhCLFNBQVNDLEtBQUtDLFNBQVMsQ0FBQztZQUFFQyxPQUFPO1FBQXNCLElBQUk7WUFBRUMsUUFBUTtRQUFJO1FBQzNILElBQUlNLG9CQUFvQixLQUFLQSxvQkFBb0IsSUFBSSxPQUFPLElBQUlWLFNBQVNDLEtBQUtDLFNBQVMsQ0FBQztZQUFFQyxPQUFPO1FBQXlCLElBQUk7WUFBRUMsUUFBUTtRQUFJO1FBRTVJLHlCQUF5QjtRQUN6QixNQUFNYSxTQUFTQyxPQUFPQyxJQUFJLENBQUMsTUFBTWIsUUFBUWMsV0FBVztRQUVwRCxlQUFlO1FBQ2YsTUFBTUMsZ0JBQWdCLE1BQU01QiwrREFBa0JBLENBQUN3QjtRQUMvQyxJQUFJLENBQUNJLGlCQUFpQkEsY0FBY04sSUFBSSxHQUFHQyxNQUFNLEtBQUssR0FBRztZQUN2RCxPQUFPLElBQUloQixTQUFTQyxLQUFLQyxTQUFTLENBQUM7Z0JBQUVDLE9BQU87WUFBNkIsSUFBSTtnQkFBRUMsUUFBUTtZQUFJO1FBQzdGO1FBRUEsNEJBQTRCO1FBQzVCLE1BQU1rQixZQUFZLE1BQU0zQixrRUFBcUJBLENBQUMwQixlQUFlWCxtQkFBbUJEO1FBRWhGLFdBQVc7UUFDWGYsNkRBQWdCQSxDQUFDNEI7UUFFakIsYUFBYTtRQUNiLE1BQU1qQyw4Q0FBU0E7UUFFZiwrREFBK0Q7UUFDL0QsSUFBSWtDLFVBQVVDO1FBQ2QsSUFBSUMsV0FBVztRQUNmLE1BQU8sQ0FBQ0EsU0FBVTtZQUNoQkYsV0FBV0csS0FBS0MsS0FBSyxDQUFDLFNBQVNELEtBQUtFLE1BQU0sS0FBSyxRQUFRQyxRQUFRO1lBQy9ETCxTQUFTLENBQUMsR0FBRyxFQUFFRSxLQUFLQyxLQUFLLENBQUMsU0FBU0QsS0FBS0UsTUFBTSxLQUFLLFFBQVEsQ0FBQztZQUM1RCxNQUFNRSxXQUFXLE1BQU14QywyREFBWSxDQUFDO2dCQUFFMEMsS0FBSztvQkFBQzt3QkFBRVQ7b0JBQVM7b0JBQUc7d0JBQUVDO29CQUFPO2lCQUFFO1lBQUM7WUFDdEUsSUFBSSxDQUFDTSxVQUFVTCxXQUFXO1FBQzVCO1FBRUEsTUFBTVEsWUFBWSxDQUFDLEtBQUssRUFBRVAsS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxNQUFNLEtBQUssVUFBVSxDQUFDO1FBQ2hFLE1BQU1NLFdBQVc7WUFBRTFCO1lBQU9LO1lBQWFEO1lBQVVVO1lBQVdXO1lBQVdWO1lBQVVDO1lBQVFXLFdBQVdwQyxLQUFLcUMsR0FBRztRQUFDO1FBRTdHLElBQUl0QixnQkFBZ0I7WUFDbEIsTUFBTXVCLFNBQVMsTUFBTSxtTEFBTztZQUM1QixNQUFNQyxTQUFTLE1BQU1ELE9BQU9FLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPM0IsaUJBQWlCO1lBQ2pFb0IsU0FBU3BCLGNBQWMsR0FBR3dCO1FBQzVCO1FBRUEsTUFBTUksT0FBTyxNQUFNcEQsMERBQVcsQ0FBQzRDO1FBQy9CLE9BQU8sSUFBSWxDLFNBQVNDLEtBQUtDLFNBQVMsQ0FBQztZQUFFd0M7WUFBTUUsU0FBUztRQUE4QixJQUFJO1lBQUV4QyxRQUFRO1FBQUk7SUFDdEcsRUFBRSxPQUFPeUMsS0FBSztRQUNaLE9BQU8sSUFBSTdDLFNBQVNDLEtBQUtDLFNBQVMsQ0FBQztZQUFFQyxPQUFPMEMsSUFBSUQsT0FBTztRQUFDLElBQUk7WUFBRXhDLFFBQVE7UUFBSTtJQUM1RTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb25saW5lLXF1aXotYXNzZXNzbWVudC8uL2FwcC9hcGkvcXVpei9nZW5lcmF0ZS1haS9yb3V0ZS5qcz9lYzI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdyaXRlRmlsZSB9IGZyb20gJ2ZzL3Byb21pc2VzJztcclxuaW1wb3J0IHsgam9pbiB9IGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgY29ubmVjdERCIGZyb20gJy4uLy4uLy4uLy4uL2xpYi9kYic7XHJcbmltcG9ydCBRdWl6IGZyb20gJy4uLy4uLy4uLy4uL21vZGVscy9RdWl6JztcclxuaW1wb3J0IHsgZ2V0VXNlckZyb21SZXF1ZXN0LCByZXF1aXJlUm9sZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9taWRkbGV3YXJlJztcclxuaW1wb3J0IHsgZXh0cmFjdFRleHRGcm9tUERGLCB2YWxpZGF0ZVF1aXpKU09OIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2FpUXVpeic7XHJcbmltcG9ydCB7IGdlbmVyYXRlUXVpelF1ZXN0aW9ucyB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9vcGVuYWknO1xyXG5pbXBvcnQgY3J5cHRvIGZyb20gJ2NyeXB0byc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXEpIHtcclxuICBjb25zdCB1c2VyID0gYXdhaXQgZ2V0VXNlckZyb21SZXF1ZXN0KHJlcSk7XHJcbiAgaWYgKCF1c2VyKSByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgZXJyb3I6ICdVbmF1dGhvcml6ZWQnIH0pLCB7IHN0YXR1czogNDAxIH0pO1xyXG4gIGlmICghcmVxdWlyZVJvbGUodXNlciwgJ3RlYWNoZXInKSkgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeSh7IGVycm9yOiAnRm9yYmlkZGVuJyB9KSwgeyBzdGF0dXM6IDQwMyB9KTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxLmZvcm1EYXRhKCk7XHJcbiAgICBjb25zdCBwZGZGaWxlID0gZm9ybURhdGEuZ2V0KCdwZGYnKTtcclxuICAgIGNvbnN0IHRpdGxlID0gZm9ybURhdGEuZ2V0KCd0aXRsZScpO1xyXG4gICAgY29uc3QgZGlmZmljdWx0eSA9IGZvcm1EYXRhLmdldCgnZGlmZmljdWx0eScpIHx8ICdtZWRpdW0nO1xyXG4gICAgY29uc3QgbnVtYmVyT2ZRdWVzdGlvbnMgPSBwYXJzZUludChmb3JtRGF0YS5nZXQoJ251bWJlck9mUXVlc3Rpb25zJykpIHx8IDU7XHJcbiAgICBjb25zdCBkdXJhdGlvbiA9IHBhcnNlSW50KGZvcm1EYXRhLmdldCgnZHVyYXRpb24nKSkgfHwgMTA7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGZvcm1EYXRhLmdldCgnZGVzY3JpcHRpb24nKSB8fCAnJztcclxuICAgIGNvbnN0IGFjY2Vzc1Bhc3N3b3JkID0gZm9ybURhdGEuZ2V0KCdhY2Nlc3NQYXNzd29yZCcpIHx8ICcnO1xyXG5cclxuICAgIGlmICghcGRmRmlsZSkgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeSh7IGVycm9yOiAnUERGIGZpbGUgcmVxdWlyZWQnIH0pLCB7IHN0YXR1czogNDAwIH0pO1xyXG4gICAgaWYgKCF0aXRsZSB8fCB0aXRsZS50cmltKCkubGVuZ3RoIDwgMykgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeSh7IGVycm9yOiAnUXVpeiB0aXRsZSByZXF1aXJlZCcgfSksIHsgc3RhdHVzOiA0MDAgfSk7XHJcbiAgICBpZiAobnVtYmVyT2ZRdWVzdGlvbnMgPCAxIHx8IG51bWJlck9mUXVlc3Rpb25zID4gNTApIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBlcnJvcjogJ1F1ZXN0aW9ucyBtdXN0IGJlIDEtNTAnIH0pLCB7IHN0YXR1czogNDAwIH0pO1xyXG5cclxuICAgIC8vIGNvbnZlcnQgZmlsZSB0byBidWZmZXJcclxuICAgIGNvbnN0IGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGF3YWl0IHBkZkZpbGUuYXJyYXlCdWZmZXIoKSk7XHJcblxyXG4gICAgLy8gZXh0cmFjdCB0ZXh0XHJcbiAgICBjb25zdCBleHRyYWN0ZWRUZXh0ID0gYXdhaXQgZXh0cmFjdFRleHRGcm9tUERGKGJ1ZmZlcik7XHJcbiAgICBpZiAoIWV4dHJhY3RlZFRleHQgfHwgZXh0cmFjdGVkVGV4dC50cmltKCkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBlcnJvcjogJ05vIHRleHQgZXh0cmFjdGVkIGZyb20gUERGJyB9KSwgeyBzdGF0dXM6IDQwMCB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBnZW5lcmF0ZSBxdWVzdGlvbnMgdmlhIEFJXHJcbiAgICBjb25zdCBxdWVzdGlvbnMgPSBhd2FpdCBnZW5lcmF0ZVF1aXpRdWVzdGlvbnMoZXh0cmFjdGVkVGV4dCwgbnVtYmVyT2ZRdWVzdGlvbnMsIGRpZmZpY3VsdHkpO1xyXG5cclxuICAgIC8vIHZhbGlkYXRlXHJcbiAgICB2YWxpZGF0ZVF1aXpKU09OKHF1ZXN0aW9ucyk7XHJcblxyXG4gICAgLy8gc2F2ZSB0byBkYlxyXG4gICAgYXdhaXQgY29ubmVjdERCKCk7XHJcblxyXG4gICAgLy8gR2VuZXJhdGUgdW5pcXVlIDYtZGlnaXQgbnVtZXJpYyBqb2luIGNvZGUgYW5kIGZvcm1hbCBRdWl6IElEXHJcbiAgICBsZXQgam9pbkNvZGUsIHF1aXpJZDtcclxuICAgIGxldCBpc1VuaXF1ZSA9IGZhbHNlO1xyXG4gICAgd2hpbGUgKCFpc1VuaXF1ZSkge1xyXG4gICAgICBqb2luQ29kZSA9IE1hdGguZmxvb3IoMTAwMDAwICsgTWF0aC5yYW5kb20oKSAqIDkwMDAwMCkudG9TdHJpbmcoKTtcclxuICAgICAgcXVpeklkID0gYFFaLSR7TWF0aC5mbG9vcigxMDAwMDAgKyBNYXRoLnJhbmRvbSgpICogOTAwMDAwKX1gO1xyXG4gICAgICBjb25zdCBleGlzdGluZyA9IGF3YWl0IFF1aXouZmluZE9uZSh7ICRvcjogW3sgam9pbkNvZGUgfSwgeyBxdWl6SWQgfV0gfSk7XHJcbiAgICAgIGlmICghZXhpc3RpbmcpIGlzVW5pcXVlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwdWJsaWNVcmwgPSBgcXVpei0ke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwKX1gO1xyXG4gICAgY29uc3QgcXVpekRhdGEgPSB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVyYXRpb24sIHF1ZXN0aW9ucywgcHVibGljVXJsLCBqb2luQ29kZSwgcXVpeklkLCBjcmVhdGVkQnk6IHVzZXIuX2lkIH07XHJcblxyXG4gICAgaWYgKGFjY2Vzc1Bhc3N3b3JkKSB7XHJcbiAgICAgIGNvbnN0IGJjcnlwdCA9IGF3YWl0IGltcG9ydCgnYmNyeXB0anMnKTtcclxuICAgICAgY29uc3QgaGFzaGVkID0gYXdhaXQgYmNyeXB0LmRlZmF1bHQuaGFzaChTdHJpbmcoYWNjZXNzUGFzc3dvcmQpLCAxMCk7XHJcbiAgICAgIHF1aXpEYXRhLmFjY2Vzc1Bhc3N3b3JkID0gaGFzaGVkO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHF1aXogPSBhd2FpdCBRdWl6LmNyZWF0ZShxdWl6RGF0YSk7XHJcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgcXVpeiwgbWVzc2FnZTogJ1F1aXogZ2VuZXJhdGVkIHN1Y2Nlc3NmdWxseScgfSksIHsgc3RhdHVzOiAyMDEgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgZXJyb3I6IGVyci5tZXNzYWdlIH0pLCB7IHN0YXR1czogNTAwIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsid3JpdGVGaWxlIiwiam9pbiIsImNvbm5lY3REQiIsIlF1aXoiLCJnZXRVc2VyRnJvbVJlcXVlc3QiLCJyZXF1aXJlUm9sZSIsImV4dHJhY3RUZXh0RnJvbVBERiIsInZhbGlkYXRlUXVpekpTT04iLCJnZW5lcmF0ZVF1aXpRdWVzdGlvbnMiLCJjcnlwdG8iLCJQT1NUIiwicmVxIiwidXNlciIsIlJlc3BvbnNlIiwiSlNPTiIsInN0cmluZ2lmeSIsImVycm9yIiwic3RhdHVzIiwiZm9ybURhdGEiLCJwZGZGaWxlIiwiZ2V0IiwidGl0bGUiLCJkaWZmaWN1bHR5IiwibnVtYmVyT2ZRdWVzdGlvbnMiLCJwYXJzZUludCIsImR1cmF0aW9uIiwiZGVzY3JpcHRpb24iLCJhY2Nlc3NQYXNzd29yZCIsInRyaW0iLCJsZW5ndGgiLCJidWZmZXIiLCJCdWZmZXIiLCJmcm9tIiwiYXJyYXlCdWZmZXIiLCJleHRyYWN0ZWRUZXh0IiwicXVlc3Rpb25zIiwiam9pbkNvZGUiLCJxdWl6SWQiLCJpc1VuaXF1ZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwiZXhpc3RpbmciLCJmaW5kT25lIiwiJG9yIiwicHVibGljVXJsIiwicXVpekRhdGEiLCJjcmVhdGVkQnkiLCJfaWQiLCJiY3J5cHQiLCJoYXNoZWQiLCJkZWZhdWx0IiwiaGFzaCIsIlN0cmluZyIsInF1aXoiLCJjcmVhdGUiLCJtZXNzYWdlIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/quiz/generate-ai/route.js\n");

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
eval("\nconst { verifyToken } = __webpack_require__(/*! ./auth */ \"(rsc)/./lib/auth.js\");\nconst connectDB = __webpack_require__(/*! ./db */ \"(rsc)/./lib/db.js\");\nconst User = __webpack_require__(/*! ../models/User */ \"(rsc)/./models/User.js\");\nasync function getUserFromRequest(req) {\n    let token = null;\n    // 1. Try Authorization header\n    const auth = req.headers.get ? req.headers.get(\"authorization\") : req.headers.authorization;\n    if (auth && auth.startsWith(\"Bearer \")) {\n        token = auth.split(\" \")[1];\n    }\n    // 2. Try Cookies (if no header token found)\n    if (!token) {\n        const { cookies } = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n        token = cookies().get(\"token\")?.value;\n    }\n    if (!token) return null;\n    try {\n        const payload = verifyToken(token);\n        await connectDB();\n        const user = await User.findById(payload.id).select(\"-password\");\n        return user;\n    } catch (err) {\n        return null;\n    }\n}\nfunction requireRole(user, role) {\n    return user && user.role === role;\n}\nmodule.exports = {\n    getUserFromRequest,\n    requireRole\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbWlkZGxld2FyZS5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTSxFQUFFQSxXQUFXLEVBQUUsR0FBR0MsbUJBQU9BLENBQUM7QUFDaEMsTUFBTUMsWUFBWUQsbUJBQU9BLENBQUM7QUFDMUIsTUFBTUUsT0FBT0YsbUJBQU9BLENBQUM7QUFFckIsZUFBZUcsbUJBQW1CQyxHQUFHO0lBQ25DLElBQUlDLFFBQVE7SUFFWiw4QkFBOEI7SUFDOUIsTUFBTUMsT0FBT0YsSUFBSUcsT0FBTyxDQUFDQyxHQUFHLEdBQUdKLElBQUlHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG1CQUFtQkosSUFBSUcsT0FBTyxDQUFDRSxhQUFhO0lBQzNGLElBQUlILFFBQVFBLEtBQUtJLFVBQVUsQ0FBQyxZQUFZO1FBQ3RDTCxRQUFRQyxLQUFLSyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7SUFDNUI7SUFFQSw0Q0FBNEM7SUFDNUMsSUFBSSxDQUFDTixPQUFPO1FBQ1YsTUFBTSxFQUFFTyxPQUFPLEVBQUUsR0FBR1osbUJBQU9BLENBQUM7UUFDNUJLLFFBQVFPLFVBQVVKLEdBQUcsQ0FBQyxVQUFVSztJQUNsQztJQUVBLElBQUksQ0FBQ1IsT0FBTyxPQUFPO0lBQ25CLElBQUk7UUFDRixNQUFNUyxVQUFVZixZQUFZTTtRQUM1QixNQUFNSjtRQUNOLE1BQU1jLE9BQU8sTUFBTWIsS0FBS2MsUUFBUSxDQUFDRixRQUFRRyxFQUFFLEVBQUVDLE1BQU0sQ0FBQztRQUNwRCxPQUFPSDtJQUNULEVBQUUsT0FBT0ksS0FBSztRQUNaLE9BQU87SUFDVDtBQUNGO0FBRUEsU0FBU0MsWUFBWUwsSUFBSSxFQUFFTSxJQUFJO0lBQzdCLE9BQU9OLFFBQVFBLEtBQUtNLElBQUksS0FBS0E7QUFDL0I7QUFFQUMsT0FBT0MsT0FBTyxHQUFHO0lBQUVwQjtJQUFvQmlCO0FBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vbmxpbmUtcXVpei1hc3Nlc3NtZW50Ly4vbGliL21pZGRsZXdhcmUuanM/YjE1OCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IHZlcmlmeVRva2VuIH0gPSByZXF1aXJlKCcuL2F1dGgnKTtcclxuY29uc3QgY29ubmVjdERCID0gcmVxdWlyZSgnLi9kYicpO1xyXG5jb25zdCBVc2VyID0gcmVxdWlyZSgnLi4vbW9kZWxzL1VzZXInKTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFVzZXJGcm9tUmVxdWVzdChyZXEpIHtcclxuICBsZXQgdG9rZW4gPSBudWxsO1xyXG5cclxuICAvLyAxLiBUcnkgQXV0aG9yaXphdGlvbiBoZWFkZXJcclxuICBjb25zdCBhdXRoID0gcmVxLmhlYWRlcnMuZ2V0ID8gcmVxLmhlYWRlcnMuZ2V0KCdhdXRob3JpemF0aW9uJykgOiByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uO1xyXG4gIGlmIChhdXRoICYmIGF1dGguc3RhcnRzV2l0aCgnQmVhcmVyICcpKSB7XHJcbiAgICB0b2tlbiA9IGF1dGguc3BsaXQoJyAnKVsxXTtcclxuICB9XHJcblxyXG4gIC8vIDIuIFRyeSBDb29raWVzIChpZiBubyBoZWFkZXIgdG9rZW4gZm91bmQpXHJcbiAgaWYgKCF0b2tlbikge1xyXG4gICAgY29uc3QgeyBjb29raWVzIH0gPSByZXF1aXJlKCduZXh0L2hlYWRlcnMnKTtcclxuICAgIHRva2VuID0gY29va2llcygpLmdldCgndG9rZW4nKT8udmFsdWU7XHJcbiAgfVxyXG5cclxuICBpZiAoIXRva2VuKSByZXR1cm4gbnVsbDtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcGF5bG9hZCA9IHZlcmlmeVRva2VuKHRva2VuKTtcclxuICAgIGF3YWl0IGNvbm5lY3REQigpO1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZEJ5SWQocGF5bG9hZC5pZCkuc2VsZWN0KCctcGFzc3dvcmQnKTtcclxuICAgIHJldHVybiB1c2VyO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZXF1aXJlUm9sZSh1c2VyLCByb2xlKSB7XHJcbiAgcmV0dXJuIHVzZXIgJiYgdXNlci5yb2xlID09PSByb2xlO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHsgZ2V0VXNlckZyb21SZXF1ZXN0LCByZXF1aXJlUm9sZSB9O1xyXG4iXSwibmFtZXMiOlsidmVyaWZ5VG9rZW4iLCJyZXF1aXJlIiwiY29ubmVjdERCIiwiVXNlciIsImdldFVzZXJGcm9tUmVxdWVzdCIsInJlcSIsInRva2VuIiwiYXV0aCIsImhlYWRlcnMiLCJnZXQiLCJhdXRob3JpemF0aW9uIiwic3RhcnRzV2l0aCIsInNwbGl0IiwiY29va2llcyIsInZhbHVlIiwicGF5bG9hZCIsInVzZXIiLCJmaW5kQnlJZCIsImlkIiwic2VsZWN0IiwiZXJyIiwicmVxdWlyZVJvbGUiLCJyb2xlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/middleware.js\n");

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
eval("\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst QuestionSchema = new mongoose.Schema({\n    question: {\n        type: String,\n        required: true\n    },\n    options: [\n        {\n            type: String,\n            required: true\n        }\n    ],\n    correctAnswer: {\n        type: Number,\n        required: true\n    }\n});\nconst QuizSchema = new mongoose.Schema({\n    title: {\n        type: String,\n        required: true\n    },\n    description: {\n        type: String\n    },\n    duration: {\n        type: Number,\n        default: 0\n    },\n    accessPassword: {\n        type: String\n    },\n    quizId: {\n        type: String,\n        unique: true,\n        sparse: true\n    },\n    joinCode: {\n        type: String,\n        unique: true,\n        sparse: true\n    },\n    publicUrl: {\n        type: String,\n        unique: true,\n        sparse: true\n    },\n    createdBy: {\n        type: mongoose.Schema.Types.ObjectId,\n        ref: \"User\",\n        required: true\n    },\n    questions: [\n        QuestionSchema\n    ],\n    createdAt: {\n        type: Date,\n        default: Date.now\n    }\n});\nmodule.exports = mongoose.models.Quiz || mongoose.model(\"Quiz\", QuizSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvUXVpei5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsV0FBV0MsbUJBQU9BLENBQUM7QUFFekIsTUFBTUMsaUJBQWlCLElBQUlGLFNBQVNHLE1BQU0sQ0FBQztJQUN6Q0MsVUFBVTtRQUFFQyxNQUFNQztRQUFRQyxVQUFVO0lBQUs7SUFDekNDLFNBQVM7UUFBQztZQUFFSCxNQUFNQztZQUFRQyxVQUFVO1FBQUs7S0FBRTtJQUMzQ0UsZUFBZTtRQUFFSixNQUFNSztRQUFRSCxVQUFVO0lBQUs7QUFDaEQ7QUFFQSxNQUFNSSxhQUFhLElBQUlYLFNBQVNHLE1BQU0sQ0FBQztJQUNyQ1MsT0FBTztRQUFFUCxNQUFNQztRQUFRQyxVQUFVO0lBQUs7SUFDdENNLGFBQWE7UUFBRVIsTUFBTUM7SUFBTztJQUM1QlEsVUFBVTtRQUFFVCxNQUFNSztRQUFRSyxTQUFTO0lBQUU7SUFDckNDLGdCQUFnQjtRQUFFWCxNQUFNQztJQUFPO0lBQy9CVyxRQUFRO1FBQUVaLE1BQU1DO1FBQVFZLFFBQVE7UUFBTUMsUUFBUTtJQUFLO0lBQ25EQyxVQUFVO1FBQUVmLE1BQU1DO1FBQVFZLFFBQVE7UUFBTUMsUUFBUTtJQUFLO0lBQ3JERSxXQUFXO1FBQUVoQixNQUFNQztRQUFRWSxRQUFRO1FBQU1DLFFBQVE7SUFBSztJQUN0REcsV0FBVztRQUFFakIsTUFBTUwsU0FBU0csTUFBTSxDQUFDb0IsS0FBSyxDQUFDQyxRQUFRO1FBQUVDLEtBQUs7UUFBUWxCLFVBQVU7SUFBSztJQUMvRW1CLFdBQVc7UUFBQ3hCO0tBQWU7SUFDM0J5QixXQUFXO1FBQUV0QixNQUFNdUI7UUFBTWIsU0FBU2EsS0FBS0MsR0FBRztJQUFDO0FBQzdDO0FBRUFDLE9BQU9DLE9BQU8sR0FBRy9CLFNBQVNnQyxNQUFNLENBQUNDLElBQUksSUFBSWpDLFNBQVNrQyxLQUFLLENBQUMsUUFBUXZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb25saW5lLXF1aXotYXNzZXNzbWVudC8uL21vZGVscy9RdWl6LmpzPzZkODMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpO1xyXG5cclxuY29uc3QgUXVlc3Rpb25TY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICBxdWVzdGlvbjogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgb3B0aW9uczogW3sgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9XSxcclxuICBjb3JyZWN0QW5zd2VyOiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUgfVxyXG59KTtcclxuXHJcbmNvbnN0IFF1aXpTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICB0aXRsZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgZGVzY3JpcHRpb246IHsgdHlwZTogU3RyaW5nIH0sXHJcbiAgZHVyYXRpb246IHsgdHlwZTogTnVtYmVyLCBkZWZhdWx0OiAwIH0sXHJcbiAgYWNjZXNzUGFzc3dvcmQ6IHsgdHlwZTogU3RyaW5nIH0sIC8vIE9wdGlvbmFsIGhhc2hlZCBwYXNzd29yZFxyXG4gIHF1aXpJZDogeyB0eXBlOiBTdHJpbmcsIHVuaXF1ZTogdHJ1ZSwgc3BhcnNlOiB0cnVlIH0sIC8vIEZvcm1hbCBVbmlxdWUgSUQgKGUuZy4gUVotQUJDRDEyKVxyXG4gIGpvaW5Db2RlOiB7IHR5cGU6IFN0cmluZywgdW5pcXVlOiB0cnVlLCBzcGFyc2U6IHRydWUgfSwgLy8gQWxwaGFudW1lcmljIEpvaW4gQ29kZVxyXG4gIHB1YmxpY1VybDogeyB0eXBlOiBTdHJpbmcsIHVuaXF1ZTogdHJ1ZSwgc3BhcnNlOiB0cnVlIH0sXHJcbiAgY3JlYXRlZEJ5OiB7IHR5cGU6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCwgcmVmOiAnVXNlcicsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgcXVlc3Rpb25zOiBbUXVlc3Rpb25TY2hlbWFdLFxyXG4gIGNyZWF0ZWRBdDogeyB0eXBlOiBEYXRlLCBkZWZhdWx0OiBEYXRlLm5vdyB9XHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBtb25nb29zZS5tb2RlbHMuUXVpeiB8fCBtb25nb29zZS5tb2RlbCgnUXVpeicsIFF1aXpTY2hlbWEpO1xyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJyZXF1aXJlIiwiUXVlc3Rpb25TY2hlbWEiLCJTY2hlbWEiLCJxdWVzdGlvbiIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsIm9wdGlvbnMiLCJjb3JyZWN0QW5zd2VyIiwiTnVtYmVyIiwiUXVpelNjaGVtYSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkdXJhdGlvbiIsImRlZmF1bHQiLCJhY2Nlc3NQYXNzd29yZCIsInF1aXpJZCIsInVuaXF1ZSIsInNwYXJzZSIsImpvaW5Db2RlIiwicHVibGljVXJsIiwiY3JlYXRlZEJ5IiwiVHlwZXMiLCJPYmplY3RJZCIsInJlZiIsInF1ZXN0aW9ucyIsImNyZWF0ZWRBdCIsIkRhdGUiLCJub3ciLCJtb2R1bGUiLCJleHBvcnRzIiwibW9kZWxzIiwiUXVpeiIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./models/Quiz.js\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/pdf-parse","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/jws","vendor-chunks/lodash.once","vendor-chunks/jwa","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/lodash.isplainobject","vendor-chunks/ms","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time","vendor-chunks/google-auth-library","vendor-chunks/ws","vendor-chunks/gaxios","vendor-chunks/json-bigint","vendor-chunks/google-logging-utils","vendor-chunks/gcp-metadata","vendor-chunks/@google","vendor-chunks/gtoken","vendor-chunks/extend","vendor-chunks/bignumber.js","vendor-chunks/base64-js"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fquiz%2Fgenerate-ai%2Froute&page=%2Fapi%2Fquiz%2Fgenerate-ai%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fquiz%2Fgenerate-ai%2Froute.js&appDir=D%3A%5Cchaic_quiz%5CChiac_QuizPlatform%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cchaic_quiz%5CChiac_QuizPlatform&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();