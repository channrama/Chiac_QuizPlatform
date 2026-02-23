"use strict";
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
exports.id = "app/api/attempt/my/route";
exports.ids = ["app/api/attempt/my/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fattempt%2Fmy%2Froute&page=%2Fapi%2Fattempt%2Fmy%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fattempt%2Fmy%2Froute.js&appDir=D%3A%5Cchaic_quiz%5CChiac_QuizPlatform%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cchaic_quiz%5CChiac_QuizPlatform&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fattempt%2Fmy%2Froute&page=%2Fapi%2Fattempt%2Fmy%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fattempt%2Fmy%2Froute.js&appDir=D%3A%5Cchaic_quiz%5CChiac_QuizPlatform%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cchaic_quiz%5CChiac_QuizPlatform&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_chaic_quiz_Chiac_QuizPlatform_app_api_attempt_my_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/attempt/my/route.js */ \"(rsc)/./app/api/attempt/my/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/attempt/my/route\",\n        pathname: \"/api/attempt/my\",\n        filename: \"route\",\n        bundlePath: \"app/api/attempt/my/route\"\n    },\n    resolvedPagePath: \"D:\\\\chaic_quiz\\\\Chiac_QuizPlatform\\\\app\\\\api\\\\attempt\\\\my\\\\route.js\",\n    nextConfigOutput,\n    userland: D_chaic_quiz_Chiac_QuizPlatform_app_api_attempt_my_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/attempt/my/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdHRlbXB0JTJGbXklMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF0dGVtcHQlMkZteSUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF0dGVtcHQlMkZteSUyRnJvdXRlLmpzJmFwcERpcj1EJTNBJTVDY2hhaWNfcXVpeiU1Q0NoaWFjX1F1aXpQbGF0Zm9ybSU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9RCUzQSU1Q2NoYWljX3F1aXolNUNDaGlhY19RdWl6UGxhdGZvcm0maXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ21CO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb25saW5lLXF1aXotYXNzZXNzbWVudC8/NGMzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJEOlxcXFxjaGFpY19xdWl6XFxcXENoaWFjX1F1aXpQbGF0Zm9ybVxcXFxhcHBcXFxcYXBpXFxcXGF0dGVtcHRcXFxcbXlcXFxccm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F0dGVtcHQvbXkvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdHRlbXB0L215XCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdHRlbXB0L215L3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiRDpcXFxcY2hhaWNfcXVpelxcXFxDaGlhY19RdWl6UGxhdGZvcm1cXFxcYXBwXFxcXGFwaVxcXFxhdHRlbXB0XFxcXG15XFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9hdHRlbXB0L215L3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fattempt%2Fmy%2Froute&page=%2Fapi%2Fattempt%2Fmy%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fattempt%2Fmy%2Froute.js&appDir=D%3A%5Cchaic_quiz%5CChiac_QuizPlatform%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cchaic_quiz%5CChiac_QuizPlatform&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/attempt/my/route.js":
/*!*************************************!*\
  !*** ./app/api/attempt/my/route.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/db */ \"(rsc)/./lib/db.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_db__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_Attempt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models/Attempt */ \"(rsc)/./models/Attempt.js\");\n/* harmony import */ var _models_Attempt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_Attempt__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../lib/middleware */ \"(rsc)/./lib/middleware.js\");\n/* harmony import */ var _lib_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lib_middleware__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nasync function GET(req) {\n    const user = await (0,_lib_middleware__WEBPACK_IMPORTED_MODULE_2__.getUserFromRequest)(req);\n    if (!user) return new Response(JSON.stringify({\n        error: \"Unauthorized\"\n    }), {\n        status: 401\n    });\n    if (!(0,_lib_middleware__WEBPACK_IMPORTED_MODULE_2__.requireRole)(user, \"student\")) return new Response(JSON.stringify({\n        error: \"Forbidden\"\n    }), {\n        status: 403\n    });\n    try {\n        await _lib_db__WEBPACK_IMPORTED_MODULE_0___default()();\n        const attempts = await _models_Attempt__WEBPACK_IMPORTED_MODULE_1___default().find({\n            studentId: user._id\n        }).populate(\"quizId\", \"title\").lean();\n        return new Response(JSON.stringify(attempts), {\n            status: 200\n        });\n    } catch (err) {\n        return new Response(JSON.stringify({\n            error: err.message\n        }), {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F0dGVtcHQvbXkvcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEyQztBQUNNO0FBQzRCO0FBRXRFLGVBQWVJLElBQUlDLEdBQUc7SUFDM0IsTUFBTUMsT0FBTyxNQUFNSixtRUFBa0JBLENBQUNHO0lBQ3RDLElBQUksQ0FBQ0MsTUFBTSxPQUFPLElBQUlDLFNBQVNDLEtBQUtDLFNBQVMsQ0FBQztRQUFFQyxPQUFPO0lBQWUsSUFBSTtRQUFFQyxRQUFRO0lBQUk7SUFDeEYsSUFBSSxDQUFDUiw0REFBV0EsQ0FBQ0csTUFBTSxZQUFZLE9BQU8sSUFBSUMsU0FBU0MsS0FBS0MsU0FBUyxDQUFDO1FBQUVDLE9BQU87SUFBWSxJQUFJO1FBQUVDLFFBQVE7SUFBSTtJQUM3RyxJQUFJO1FBQ0YsTUFBTVgsOENBQVNBO1FBQ2YsTUFBTVksV0FBVyxNQUFNWCwyREFBWSxDQUFDO1lBQUVhLFdBQVdSLEtBQUtTLEdBQUc7UUFBQyxHQUFHQyxRQUFRLENBQUMsVUFBVSxTQUFTQyxJQUFJO1FBQzdGLE9BQU8sSUFBSVYsU0FBU0MsS0FBS0MsU0FBUyxDQUFDRyxXQUFXO1lBQUVELFFBQVE7UUFBSTtJQUM5RCxFQUFFLE9BQU9PLEtBQUs7UUFDWixPQUFPLElBQUlYLFNBQVNDLEtBQUtDLFNBQVMsQ0FBQztZQUFFQyxPQUFPUSxJQUFJQyxPQUFPO1FBQUMsSUFBSTtZQUFFUixRQUFRO1FBQUk7SUFDNUU7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL29ubGluZS1xdWl6LWFzc2Vzc21lbnQvLi9hcHAvYXBpL2F0dGVtcHQvbXkvcm91dGUuanM/NjM4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29ubmVjdERCIGZyb20gJy4uLy4uLy4uLy4uL2xpYi9kYic7XHJcbmltcG9ydCBBdHRlbXB0IGZyb20gJy4uLy4uLy4uLy4uL21vZGVscy9BdHRlbXB0JztcclxuaW1wb3J0IHsgZ2V0VXNlckZyb21SZXF1ZXN0LCByZXF1aXJlUm9sZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9taWRkbGV3YXJlJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxKSB7XHJcbiAgY29uc3QgdXNlciA9IGF3YWl0IGdldFVzZXJGcm9tUmVxdWVzdChyZXEpO1xyXG4gIGlmICghdXNlcikgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeSh7IGVycm9yOiAnVW5hdXRob3JpemVkJyB9KSwgeyBzdGF0dXM6IDQwMSB9KTtcclxuICBpZiAoIXJlcXVpcmVSb2xlKHVzZXIsICdzdHVkZW50JykpIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBlcnJvcjogJ0ZvcmJpZGRlbicgfSksIHsgc3RhdHVzOiA0MDMgfSk7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IGNvbm5lY3REQigpO1xyXG4gICAgY29uc3QgYXR0ZW1wdHMgPSBhd2FpdCBBdHRlbXB0LmZpbmQoeyBzdHVkZW50SWQ6IHVzZXIuX2lkIH0pLnBvcHVsYXRlKCdxdWl6SWQnLCAndGl0bGUnKS5sZWFuKCk7XHJcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KGF0dGVtcHRzKSwgeyBzdGF0dXM6IDIwMCB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBlcnJvcjogZXJyLm1lc3NhZ2UgfSksIHsgc3RhdHVzOiA1MDAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJjb25uZWN0REIiLCJBdHRlbXB0IiwiZ2V0VXNlckZyb21SZXF1ZXN0IiwicmVxdWlyZVJvbGUiLCJHRVQiLCJyZXEiLCJ1c2VyIiwiUmVzcG9uc2UiLCJKU09OIiwic3RyaW5naWZ5IiwiZXJyb3IiLCJzdGF0dXMiLCJhdHRlbXB0cyIsImZpbmQiLCJzdHVkZW50SWQiLCJfaWQiLCJwb3B1bGF0ZSIsImxlYW4iLCJlcnIiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/attempt/my/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/auth.js":
/*!*********************!*\
  !*** ./lib/auth.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\nconst JWT_SECRET = process.env.JWT_SECRET || \"change-this-secret\";\nfunction signToken(payload, opts = {\n    expiresIn: \"7d\"\n}) {\n    return jwt.sign(payload, JWT_SECRET, opts);\n}\nfunction verifyToken(token) {\n    return jwt.verify(token, JWT_SECRET);\n}\nmodule.exports = {\n    signToken,\n    verifyToken\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXV0aC5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsTUFBTUMsbUJBQU9BLENBQUM7QUFDcEIsTUFBTUMsYUFBYUMsUUFBUUMsR0FBRyxDQUFDRixVQUFVLElBQUk7QUFFN0MsU0FBU0csVUFBVUMsT0FBTyxFQUFFQyxPQUFPO0lBQUVDLFdBQVc7QUFBSyxDQUFDO0lBQ3BELE9BQU9SLElBQUlTLElBQUksQ0FBQ0gsU0FBU0osWUFBWUs7QUFDdkM7QUFFQSxTQUFTRyxZQUFZQyxLQUFLO0lBQ3hCLE9BQU9YLElBQUlZLE1BQU0sQ0FBQ0QsT0FBT1Q7QUFDM0I7QUFFQVcsT0FBT0MsT0FBTyxHQUFHO0lBQUVUO0lBQVdLO0FBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vbmxpbmUtcXVpei1hc3Nlc3NtZW50Ly4vbGliL2F1dGguanM/Mjg3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBqd3QgPSByZXF1aXJlKCdqc29ud2VidG9rZW4nKTtcclxuY29uc3QgSldUX1NFQ1JFVCA9IHByb2Nlc3MuZW52LkpXVF9TRUNSRVQgfHwgJ2NoYW5nZS10aGlzLXNlY3JldCc7XHJcblxyXG5mdW5jdGlvbiBzaWduVG9rZW4ocGF5bG9hZCwgb3B0cyA9IHsgZXhwaXJlc0luOiAnN2QnIH0pIHtcclxuICByZXR1cm4gand0LnNpZ24ocGF5bG9hZCwgSldUX1NFQ1JFVCwgb3B0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZlcmlmeVRva2VuKHRva2VuKSB7XHJcbiAgcmV0dXJuIGp3dC52ZXJpZnkodG9rZW4sIEpXVF9TRUNSRVQpO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHsgc2lnblRva2VuLCB2ZXJpZnlUb2tlbiB9O1xyXG4iXSwibmFtZXMiOlsiand0IiwicmVxdWlyZSIsIkpXVF9TRUNSRVQiLCJwcm9jZXNzIiwiZW52Iiwic2lnblRva2VuIiwicGF5bG9hZCIsIm9wdHMiLCJleHBpcmVzSW4iLCJzaWduIiwidmVyaWZ5VG9rZW4iLCJ0b2tlbiIsInZlcmlmeSIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth.js\n");

/***/ }),

/***/ "(rsc)/./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nlet cached = global.mongoose;\nif (!cached) cached = global.mongoose = {\n    conn: null,\n    promise: null\n};\nasync function connectDB() {\n    if (cached.conn) return cached.conn;\n    if (!process.env.MONGODB_URI) throw new Error(\"MONGODB_URI not set\");\n    if (!cached.promise) {\n        cached.promise = mongoose.connect(process.env.MONGODB_URI, {\n            dbName: process.env.MONGODB_DB || undefined,\n            useNewUrlParser: true,\n            useUnifiedTopology: true\n        }).then((m)=>m.connection);\n    }\n    cached.conn = await cached.promise;\n    return cached.conn;\n}\nmodule.exports = connectDB;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZGIuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLFdBQVdDLG1CQUFPQSxDQUFDO0FBRXpCLElBQUlDLFNBQVNDLE9BQU9ILFFBQVE7QUFDNUIsSUFBSSxDQUFDRSxRQUFRQSxTQUFTQyxPQUFPSCxRQUFRLEdBQUc7SUFBRUksTUFBTTtJQUFNQyxTQUFTO0FBQUs7QUFFcEUsZUFBZUM7SUFDYixJQUFJSixPQUFPRSxJQUFJLEVBQUUsT0FBT0YsT0FBT0UsSUFBSTtJQUNuQyxJQUFJLENBQUNHLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVyxFQUFFLE1BQU0sSUFBSUMsTUFBTTtJQUU5QyxJQUFJLENBQUNSLE9BQU9HLE9BQU8sRUFBRTtRQUNuQkgsT0FBT0csT0FBTyxHQUFHTCxTQUFTVyxPQUFPLENBQUNKLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVyxFQUFFO1lBQ3pERyxRQUFRTCxRQUFRQyxHQUFHLENBQUNLLFVBQVUsSUFBSUM7WUFDbENDLGlCQUFpQjtZQUNqQkMsb0JBQW9CO1FBQ3RCLEdBQUdDLElBQUksQ0FBQyxDQUFDQyxJQUFNQSxFQUFFQyxVQUFVO0lBQzdCO0lBQ0FqQixPQUFPRSxJQUFJLEdBQUcsTUFBTUYsT0FBT0csT0FBTztJQUNsQyxPQUFPSCxPQUFPRSxJQUFJO0FBQ3BCO0FBRUFnQixPQUFPQyxPQUFPLEdBQUdmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb25saW5lLXF1aXotYXNzZXNzbWVudC8uL2xpYi9kYi5qcz8zZGM5Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcclxuXHJcbmxldCBjYWNoZWQgPSBnbG9iYWwubW9uZ29vc2U7XHJcbmlmICghY2FjaGVkKSBjYWNoZWQgPSBnbG9iYWwubW9uZ29vc2UgPSB7IGNvbm46IG51bGwsIHByb21pc2U6IG51bGwgfTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGNvbm5lY3REQigpIHtcclxuICBpZiAoY2FjaGVkLmNvbm4pIHJldHVybiBjYWNoZWQuY29ubjtcclxuICBpZiAoIXByb2Nlc3MuZW52Lk1PTkdPREJfVVJJKSB0aHJvdyBuZXcgRXJyb3IoJ01PTkdPREJfVVJJIG5vdCBzZXQnKTtcclxuXHJcbiAgaWYgKCFjYWNoZWQucHJvbWlzZSkge1xyXG4gICAgY2FjaGVkLnByb21pc2UgPSBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJLCB7XHJcbiAgICAgIGRiTmFtZTogcHJvY2Vzcy5lbnYuTU9OR09EQl9EQiB8fCB1bmRlZmluZWQsXHJcbiAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxuICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxyXG4gICAgfSkudGhlbigobSkgPT4gbS5jb25uZWN0aW9uKTtcclxuICB9XHJcbiAgY2FjaGVkLmNvbm4gPSBhd2FpdCBjYWNoZWQucHJvbWlzZTtcclxuICByZXR1cm4gY2FjaGVkLmNvbm47XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gY29ubmVjdERCO1xyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJyZXF1aXJlIiwiY2FjaGVkIiwiZ2xvYmFsIiwiY29ubiIsInByb21pc2UiLCJjb25uZWN0REIiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJFcnJvciIsImNvbm5lY3QiLCJkYk5hbWUiLCJNT05HT0RCX0RCIiwidW5kZWZpbmVkIiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwidGhlbiIsIm0iLCJjb25uZWN0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/db.js\n");

/***/ }),

/***/ "(rsc)/./lib/middleware.js":
/*!***************************!*\
  !*** ./lib/middleware.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst { verifyToken } = __webpack_require__(/*! ./auth */ \"(rsc)/./lib/auth.js\");\nconst connectDB = __webpack_require__(/*! ./db */ \"(rsc)/./lib/db.js\");\nconst User = __webpack_require__(/*! ../models/User */ \"(rsc)/./models/User.js\");\nasync function getUserFromRequest(req) {\n    let token = null;\n    // 1. Try Authorization header\n    const auth = req.headers.get ? req.headers.get(\"authorization\") : req.headers.authorization;\n    if (auth && auth.startsWith(\"Bearer \")) {\n        token = auth.split(\" \")[1];\n    }\n    // 2. Try Cookies (if no header token found)\n    if (!token) {\n        const { cookies } = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n        token = cookies().get(\"token\")?.value;\n    }\n    if (!token) return null;\n    try {\n        const payload = verifyToken(token);\n        await connectDB();\n        const user = await User.findById(payload.id).select(\"-password\");\n        return user;\n    } catch (err) {\n        return null;\n    }\n}\nfunction requireRole(user, role) {\n    return user && user.role === role;\n}\nmodule.exports = {\n    getUserFromRequest,\n    requireRole\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbWlkZGxld2FyZS5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTSxFQUFFQSxXQUFXLEVBQUUsR0FBR0MsbUJBQU9BLENBQUM7QUFDaEMsTUFBTUMsWUFBWUQsbUJBQU9BLENBQUM7QUFDMUIsTUFBTUUsT0FBT0YsbUJBQU9BLENBQUM7QUFFckIsZUFBZUcsbUJBQW1CQyxHQUFHO0lBQ25DLElBQUlDLFFBQVE7SUFFWiw4QkFBOEI7SUFDOUIsTUFBTUMsT0FBT0YsSUFBSUcsT0FBTyxDQUFDQyxHQUFHLEdBQUdKLElBQUlHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG1CQUFtQkosSUFBSUcsT0FBTyxDQUFDRSxhQUFhO0lBQzNGLElBQUlILFFBQVFBLEtBQUtJLFVBQVUsQ0FBQyxZQUFZO1FBQ3RDTCxRQUFRQyxLQUFLSyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7SUFDNUI7SUFFQSw0Q0FBNEM7SUFDNUMsSUFBSSxDQUFDTixPQUFPO1FBQ1YsTUFBTSxFQUFFTyxPQUFPLEVBQUUsR0FBR1osbUJBQU9BLENBQUM7UUFDNUJLLFFBQVFPLFVBQVVKLEdBQUcsQ0FBQyxVQUFVSztJQUNsQztJQUVBLElBQUksQ0FBQ1IsT0FBTyxPQUFPO0lBQ25CLElBQUk7UUFDRixNQUFNUyxVQUFVZixZQUFZTTtRQUM1QixNQUFNSjtRQUNOLE1BQU1jLE9BQU8sTUFBTWIsS0FBS2MsUUFBUSxDQUFDRixRQUFRRyxFQUFFLEVBQUVDLE1BQU0sQ0FBQztRQUNwRCxPQUFPSDtJQUNULEVBQUUsT0FBT0ksS0FBSztRQUNaLE9BQU87SUFDVDtBQUNGO0FBRUEsU0FBU0MsWUFBWUwsSUFBSSxFQUFFTSxJQUFJO0lBQzdCLE9BQU9OLFFBQVFBLEtBQUtNLElBQUksS0FBS0E7QUFDL0I7QUFFQUMsT0FBT0MsT0FBTyxHQUFHO0lBQUVwQjtJQUFvQmlCO0FBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vbmxpbmUtcXVpei1hc3Nlc3NtZW50Ly4vbGliL21pZGRsZXdhcmUuanM/YjE1OCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IHZlcmlmeVRva2VuIH0gPSByZXF1aXJlKCcuL2F1dGgnKTtcclxuY29uc3QgY29ubmVjdERCID0gcmVxdWlyZSgnLi9kYicpO1xyXG5jb25zdCBVc2VyID0gcmVxdWlyZSgnLi4vbW9kZWxzL1VzZXInKTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFVzZXJGcm9tUmVxdWVzdChyZXEpIHtcclxuICBsZXQgdG9rZW4gPSBudWxsO1xyXG5cclxuICAvLyAxLiBUcnkgQXV0aG9yaXphdGlvbiBoZWFkZXJcclxuICBjb25zdCBhdXRoID0gcmVxLmhlYWRlcnMuZ2V0ID8gcmVxLmhlYWRlcnMuZ2V0KCdhdXRob3JpemF0aW9uJykgOiByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uO1xyXG4gIGlmIChhdXRoICYmIGF1dGguc3RhcnRzV2l0aCgnQmVhcmVyICcpKSB7XHJcbiAgICB0b2tlbiA9IGF1dGguc3BsaXQoJyAnKVsxXTtcclxuICB9XHJcblxyXG4gIC8vIDIuIFRyeSBDb29raWVzIChpZiBubyBoZWFkZXIgdG9rZW4gZm91bmQpXHJcbiAgaWYgKCF0b2tlbikge1xyXG4gICAgY29uc3QgeyBjb29raWVzIH0gPSByZXF1aXJlKCduZXh0L2hlYWRlcnMnKTtcclxuICAgIHRva2VuID0gY29va2llcygpLmdldCgndG9rZW4nKT8udmFsdWU7XHJcbiAgfVxyXG5cclxuICBpZiAoIXRva2VuKSByZXR1cm4gbnVsbDtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcGF5bG9hZCA9IHZlcmlmeVRva2VuKHRva2VuKTtcclxuICAgIGF3YWl0IGNvbm5lY3REQigpO1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZEJ5SWQocGF5bG9hZC5pZCkuc2VsZWN0KCctcGFzc3dvcmQnKTtcclxuICAgIHJldHVybiB1c2VyO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZXF1aXJlUm9sZSh1c2VyLCByb2xlKSB7XHJcbiAgcmV0dXJuIHVzZXIgJiYgdXNlci5yb2xlID09PSByb2xlO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHsgZ2V0VXNlckZyb21SZXF1ZXN0LCByZXF1aXJlUm9sZSB9O1xyXG4iXSwibmFtZXMiOlsidmVyaWZ5VG9rZW4iLCJyZXF1aXJlIiwiY29ubmVjdERCIiwiVXNlciIsImdldFVzZXJGcm9tUmVxdWVzdCIsInJlcSIsInRva2VuIiwiYXV0aCIsImhlYWRlcnMiLCJnZXQiLCJhdXRob3JpemF0aW9uIiwic3RhcnRzV2l0aCIsInNwbGl0IiwiY29va2llcyIsInZhbHVlIiwicGF5bG9hZCIsInVzZXIiLCJmaW5kQnlJZCIsImlkIiwic2VsZWN0IiwiZXJyIiwicmVxdWlyZVJvbGUiLCJyb2xlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/middleware.js\n");

/***/ }),

/***/ "(rsc)/./models/Attempt.js":
/*!***************************!*\
  !*** ./models/Attempt.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst AttemptSchema = new mongoose.Schema({\n    studentId: {\n        type: mongoose.Schema.Types.ObjectId,\n        ref: \"User\",\n        required: true\n    },\n    quizId: {\n        type: mongoose.Schema.Types.ObjectId,\n        ref: \"Quiz\",\n        required: true\n    },\n    score: {\n        type: Number,\n        required: true\n    },\n    totalQuestions: {\n        type: Number,\n        required: true\n    },\n    answers: {\n        type: Array,\n        default: []\n    },\n    attemptedAt: {\n        type: Date,\n        default: Date.now\n    }\n});\n// Force deletion of model in development to ensure schema changes are picked up\nif (true) {\n    delete mongoose.models.Attempt;\n}\nmodule.exports = mongoose.models.Attempt || mongoose.model(\"Attempt\", AttemptSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvQXR0ZW1wdC5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsV0FBV0MsbUJBQU9BLENBQUM7QUFFekIsTUFBTUMsZ0JBQWdCLElBQUlGLFNBQVNHLE1BQU0sQ0FBQztJQUN4Q0MsV0FBVztRQUFFQyxNQUFNTCxTQUFTRyxNQUFNLENBQUNHLEtBQUssQ0FBQ0MsUUFBUTtRQUFFQyxLQUFLO1FBQVFDLFVBQVU7SUFBSztJQUMvRUMsUUFBUTtRQUFFTCxNQUFNTCxTQUFTRyxNQUFNLENBQUNHLEtBQUssQ0FBQ0MsUUFBUTtRQUFFQyxLQUFLO1FBQVFDLFVBQVU7SUFBSztJQUM1RUUsT0FBTztRQUFFTixNQUFNTztRQUFRSCxVQUFVO0lBQUs7SUFDdENJLGdCQUFnQjtRQUFFUixNQUFNTztRQUFRSCxVQUFVO0lBQUs7SUFDL0NLLFNBQVM7UUFBRVQsTUFBTVU7UUFBT0MsU0FBUyxFQUFFO0lBQUM7SUFDcENDLGFBQWE7UUFBRVosTUFBTWE7UUFBTUYsU0FBU0UsS0FBS0MsR0FBRztJQUFDO0FBQy9DO0FBRUEsZ0ZBQWdGO0FBQ2hGLElBQUlDLElBQXlCLEVBQWU7SUFDMUMsT0FBT3BCLFNBQVNxQixNQUFNLENBQUNDLE9BQU87QUFDaEM7QUFFQUMsT0FBT0MsT0FBTyxHQUFHeEIsU0FBU3FCLE1BQU0sQ0FBQ0MsT0FBTyxJQUFJdEIsU0FBU3lCLEtBQUssQ0FBQyxXQUFXdkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vbmxpbmUtcXVpei1hc3Nlc3NtZW50Ly4vbW9kZWxzL0F0dGVtcHQuanM/OTNjMyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJyk7XHJcblxyXG5jb25zdCBBdHRlbXB0U2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgc3R1ZGVudElkOiB7IHR5cGU6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCwgcmVmOiAnVXNlcicsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgcXVpeklkOiB7IHR5cGU6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCwgcmVmOiAnUXVpeicsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgc2NvcmU6IHsgdHlwZTogTnVtYmVyLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gIHRvdGFsUXVlc3Rpb25zOiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUgfSxcclxuICBhbnN3ZXJzOiB7IHR5cGU6IEFycmF5LCBkZWZhdWx0OiBbXSB9LCAvLyBVc2UgQXJyYXkgdG8gYmUgbW9yZSBmbGV4aWJsZVxyXG4gIGF0dGVtcHRlZEF0OiB7IHR5cGU6IERhdGUsIGRlZmF1bHQ6IERhdGUubm93IH1cclxufSk7XHJcblxyXG4vLyBGb3JjZSBkZWxldGlvbiBvZiBtb2RlbCBpbiBkZXZlbG9wbWVudCB0byBlbnN1cmUgc2NoZW1hIGNoYW5nZXMgYXJlIHBpY2tlZCB1cFxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICBkZWxldGUgbW9uZ29vc2UubW9kZWxzLkF0dGVtcHQ7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbW9uZ29vc2UubW9kZWxzLkF0dGVtcHQgfHwgbW9uZ29vc2UubW9kZWwoJ0F0dGVtcHQnLCBBdHRlbXB0U2NoZW1hKTtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsIkF0dGVtcHRTY2hlbWEiLCJTY2hlbWEiLCJzdHVkZW50SWQiLCJ0eXBlIiwiVHlwZXMiLCJPYmplY3RJZCIsInJlZiIsInJlcXVpcmVkIiwicXVpeklkIiwic2NvcmUiLCJOdW1iZXIiLCJ0b3RhbFF1ZXN0aW9ucyIsImFuc3dlcnMiLCJBcnJheSIsImRlZmF1bHQiLCJhdHRlbXB0ZWRBdCIsIkRhdGUiLCJub3ciLCJwcm9jZXNzIiwibW9kZWxzIiwiQXR0ZW1wdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./models/Attempt.js\n");

/***/ }),

/***/ "(rsc)/./models/User.js":
/*!************************!*\
  !*** ./models/User.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst UserSchema = new mongoose.Schema({\n    name: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String,\n        required: true\n    },\n    role: {\n        type: String,\n        enum: [\n            \"teacher\",\n            \"student\"\n        ],\n        required: true\n    },\n    createdAt: {\n        type: Date,\n        default: Date.now\n    }\n});\nmodule.exports = mongoose.models.User || mongoose.model(\"User\", UserSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvVXNlci5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsV0FBV0MsbUJBQU9BLENBQUM7QUFFekIsTUFBTUMsYUFBYSxJQUFJRixTQUFTRyxNQUFNLENBQUM7SUFDckNDLE1BQU07UUFBRUMsTUFBTUM7UUFBUUMsVUFBVTtJQUFLO0lBQ3JDQyxPQUFPO1FBQUVILE1BQU1DO1FBQVFDLFVBQVU7UUFBTUUsUUFBUTtJQUFLO0lBQ3BEQyxVQUFVO1FBQUVMLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUN6Q0ksTUFBTTtRQUFFTixNQUFNQztRQUFRTSxNQUFNO1lBQUM7WUFBVztTQUFVO1FBQUVMLFVBQVU7SUFBSztJQUNuRU0sV0FBVztRQUFFUixNQUFNUztRQUFNQyxTQUFTRCxLQUFLRSxHQUFHO0lBQUM7QUFDN0M7QUFFQUMsT0FBT0MsT0FBTyxHQUFHbEIsU0FBU21CLE1BQU0sQ0FBQ0MsSUFBSSxJQUFJcEIsU0FBU3FCLEtBQUssQ0FBQyxRQUFRbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vbmxpbmUtcXVpei1hc3Nlc3NtZW50Ly4vbW9kZWxzL1VzZXIuanM/NzM2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJyk7XHJcblxyXG5jb25zdCBVc2VyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgbmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgZW1haWw6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgdW5pcXVlOiB0cnVlIH0sXHJcbiAgcGFzc3dvcmQ6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gIHJvbGU6IHsgdHlwZTogU3RyaW5nLCBlbnVtOiBbJ3RlYWNoZXInLCAnc3R1ZGVudCddLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gIGNyZWF0ZWRBdDogeyB0eXBlOiBEYXRlLCBkZWZhdWx0OiBEYXRlLm5vdyB9XHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBtb25nb29zZS5tb2RlbHMuVXNlciB8fCBtb25nb29zZS5tb2RlbCgnVXNlcicsIFVzZXJTY2hlbWEpO1xyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJyZXF1aXJlIiwiVXNlclNjaGVtYSIsIlNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJlbWFpbCIsInVuaXF1ZSIsInBhc3N3b3JkIiwicm9sZSIsImVudW0iLCJjcmVhdGVkQXQiLCJEYXRlIiwiZGVmYXVsdCIsIm5vdyIsIm1vZHVsZSIsImV4cG9ydHMiLCJtb2RlbHMiLCJVc2VyIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./models/User.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/jws","vendor-chunks/lodash.once","vendor-chunks/jwa","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/lodash.isplainobject","vendor-chunks/ms","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fattempt%2Fmy%2Froute&page=%2Fapi%2Fattempt%2Fmy%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fattempt%2Fmy%2Froute.js&appDir=D%3A%5Cchaic_quiz%5CChiac_QuizPlatform%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cchaic_quiz%5CChiac_QuizPlatform&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();