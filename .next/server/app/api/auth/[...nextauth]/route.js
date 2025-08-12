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
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist\\client\\components\\action-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist\\client\\components\\request-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!*********************************************************************************************!*\
  !*** external "next/dist\\client\\components\\static-generation-async-storage.external.js" ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\static-generation-async-storage.external.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

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

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5Cdemon%5COneDrive%5CDocuments%5CJerming%20projects%5CSAF%5CFOXTROT-WEBSITE%5CFoxtrot-site%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cdemon%5COneDrive%5CDocuments%5CJerming%20projects%5CSAF%5CFOXTROT-WEBSITE%5CFoxtrot-site&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5Cdemon%5COneDrive%5CDocuments%5CJerming%20projects%5CSAF%5CFOXTROT-WEBSITE%5CFoxtrot-site%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cdemon%5COneDrive%5CDocuments%5CJerming%20projects%5CSAF%5CFOXTROT-WEBSITE%5CFoxtrot-site&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_demon_OneDrive_Documents_Jerming_projects_SAF_FOXTROT_WEBSITE_Foxtrot_site_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\demon\\\\OneDrive\\\\Documents\\\\Jerming projects\\\\SAF\\\\FOXTROT-WEBSITE\\\\Foxtrot-site\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_demon_OneDrive_Documents_Jerming_projects_SAF_FOXTROT_WEBSITE_Foxtrot_site_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNkZW1vbiU1Q09uZURyaXZlJTVDRG9jdW1lbnRzJTVDSmVybWluZyUyMHByb2plY3RzJTVDU0FGJTVDRk9YVFJPVC1XRUJTSVRFJTVDRm94dHJvdC1zaXRlJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNkZW1vbiU1Q09uZURyaXZlJTVDRG9jdW1lbnRzJTVDSmVybWluZyUyMHByb2plY3RzJTVDU0FGJTVDRk9YVFJPVC1XRUJTSVRFJTVDRm94dHJvdC1zaXRlJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ29GO0FBQ2pLO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDNko7O0FBRTdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vMTBjNGktZm94dHJvdC1tZWdhc2l0ZS8/ZjIwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxkZW1vblxcXFxPbmVEcml2ZVxcXFxEb2N1bWVudHNcXFxcSmVybWluZyBwcm9qZWN0c1xcXFxTQUZcXFxcRk9YVFJPVC1XRUJTSVRFXFxcXEZveHRyb3Qtc2l0ZVxcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcWy4uLm5leHRhdXRoXVxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxkZW1vblxcXFxPbmVEcml2ZVxcXFxEb2N1bWVudHNcXFxcSmVybWluZyBwcm9qZWN0c1xcXFxTQUZcXFxcRk9YVFJPVC1XRUJTSVRFXFxcXEZveHRyb3Qtc2l0ZVxcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcWy4uLm5leHRhdXRoXVxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5Cdemon%5COneDrive%5CDocuments%5CJerming%20projects%5CSAF%5CFOXTROT-WEBSITE%5CFoxtrot-site%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cdemon%5COneDrive%5CDocuments%5CJerming%20projects%5CSAF%5CFOXTROT-WEBSITE%5CFoxtrot-site&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.ts":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* reexport safe */ _lib_auth__WEBPACK_IMPORTED_MODULE_0__.handlers),\n/* harmony export */   POST: () => (/* reexport safe */ _lib_auth__WEBPACK_IMPORTED_MODULE_0__.handlers)\n/* harmony export */ });\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./lib/auth.ts\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8xMGM0aS1mb3h0cm90LW1lZ2FzaXRlLy4vYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHM/YzhhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBoYW5kbGVycyBhcyBHRVQsIGhhbmRsZXJzIGFzIFBPU1QgfSBmcm9tIFwiQC9saWIvYXV0aFwiXHJcbiJdLCJuYW1lcyI6WyJoYW5kbGVycyIsIkdFVCIsIlBPU1QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   handlers: () => (/* binding */ handlers),\n/* harmony export */   signIn: () => (/* binding */ signIn),\n/* harmony export */   signOut: () => (/* binding */ signOut)\n/* harmony export */ });\n/* harmony import */ var _auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth/prisma-adapter */ \"(rsc)/./node_modules/@auth/prisma-adapter/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _prisma__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./prisma */ \"(rsc)/./lib/prisma.ts\");\n\n\n\n\n\nconst { handlers, auth, signIn, signOut } = next_auth__WEBPACK_IMPORTED_MODULE_1___default()({\n    adapter: (0,_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__.PrismaAdapter)(_prisma__WEBPACK_IMPORTED_MODULE_4__.prisma),\n    session: {\n        strategy: \"jwt\"\n    },\n    pages: {\n        signIn: \"/login\",\n        error: \"/login\"\n    },\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            name: \"credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) {\n                    return null;\n                }\n                try {\n                    const user = await _prisma__WEBPACK_IMPORTED_MODULE_4__.prisma.user.findUnique({\n                        where: {\n                            email: credentials.email\n                        },\n                        select: {\n                            id: true,\n                            email: true,\n                            name: true,\n                            password: true,\n                            role: true,\n                            rank: true,\n                            unit: true,\n                            isActive: true\n                        }\n                    });\n                    if (!user || !user.isActive) {\n                        return null;\n                    }\n                    const isValidPassword = await (0,bcrypt__WEBPACK_IMPORTED_MODULE_3__.compare)(credentials.password, user.password);\n                    if (!isValidPassword) {\n                        // Log failed login attempt\n                        await _prisma__WEBPACK_IMPORTED_MODULE_4__.prisma.failedLogin.create({\n                            data: {\n                                email: credentials.email,\n                                ipAddress: \"unknown\" // Will be updated in middleware\n                            }\n                        });\n                        return null;\n                    }\n                    // Update last login\n                    await _prisma__WEBPACK_IMPORTED_MODULE_4__.prisma.user.update({\n                        where: {\n                            id: user.id\n                        },\n                        data: {\n                            lastLogin: new Date()\n                        }\n                    });\n                    // Log successful login\n                    await _prisma__WEBPACK_IMPORTED_MODULE_4__.prisma.accessLog.create({\n                        data: {\n                            userId: user.id,\n                            action: \"LOGIN\",\n                            pageAccessed: \"login\",\n                            ipAddress: \"unknown\",\n                            userAgent: \"unknown\"\n                        }\n                    });\n                    return {\n                        id: user.id,\n                        email: user.email,\n                        name: user.name,\n                        role: user.role,\n                        rank: user.rank,\n                        unit: user.unit\n                    };\n                } catch (error) {\n                    console.error(\"Auth error:\", error);\n                    return null;\n                }\n            }\n        })\n    ],\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                token.role = user.role;\n                token.rank = user.rank;\n                token.unit = user.unit;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (token) {\n                session.user.role = token.role;\n                session.user.rank = token.rank;\n                session.user.unit = token.unit;\n            }\n            return session;\n        }\n    },\n    events: {\n        async signOut ({ token }) {\n            if (token.sub) {\n                await _prisma__WEBPACK_IMPORTED_MODULE_4__.prisma.accessLog.create({\n                    data: {\n                        userId: token.sub,\n                        action: \"LOGOUT\",\n                        pageAccessed: \"logout\",\n                        ipAddress: \"unknown\",\n                        userAgent: \"unknown\"\n                    }\n                });\n            }\n        }\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFDQSxPQUFPa0I7UUFDVDtRQUNBLE1BQU1yQyxTQUFRLEVBQUVBLE9BQU8sRUFBRXFDLEtBQUssRUFBRTtZQUM5QixJQUFJQSxPQUFPO2dCQUNUckMsUUFBUVksSUFBSSxDQUFDSyxJQUFJLEdBQUdvQixNQUFNcEIsSUFBSTtnQkFDOUJqQixRQUFRWSxJQUFJLENBQUNNLElBQUksR0FBR21CLE1BQU1uQixJQUFJO2dCQUM5QmxCLFFBQVFZLElBQUksQ0FBQ08sSUFBSSxHQUFHa0IsTUFBTWxCLElBQUk7WUFDaEM7WUFDQSxPQUFPbkI7UUFDVDtJQUNGO0lBQ0FzQyxRQUFRO1FBQ04sTUFBTXhDLFNBQVEsRUFBRXVDLEtBQUssRUFBRTtZQUNyQixJQUFJQSxNQUFNRSxHQUFHLEVBQUU7Z0JBQ2IsTUFBTTdDLDJDQUFNQSxDQUFDbUMsU0FBUyxDQUFDTixNQUFNLENBQUM7b0JBQzVCQyxNQUFNO3dCQUNKTSxRQUFRTyxNQUFNRSxHQUFHO3dCQUNqQlIsUUFBUTt3QkFDUkMsY0FBYzt3QkFDZFAsV0FBVzt3QkFDWFEsV0FBVztvQkFDYjtnQkFDRjtZQUNGO1FBQ0Y7SUFDRjtBQUNGLEdBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8xMGM0aS1mb3h0cm90LW1lZ2FzaXRlLy4vbGliL2F1dGgudHM/YmY3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFBZGFwdGVyIH0gZnJvbSBcIkBhdXRoL3ByaXNtYS1hZGFwdGVyXCJcclxuaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIlxyXG5pbXBvcnQgQ3JlZGVudGlhbHMgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIlxyXG5pbXBvcnQgeyBjb21wYXJlIH0gZnJvbSBcImJjcnlwdFwiXHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCIuL3ByaXNtYVwiXHJcblxyXG5leHBvcnQgY29uc3QgeyBoYW5kbGVycywgYXV0aCwgc2lnbkluLCBzaWduT3V0IH0gPSBOZXh0QXV0aCh7XHJcbiAgYWRhcHRlcjogUHJpc21hQWRhcHRlcihwcmlzbWEpLFxyXG4gIHNlc3Npb246IHsgc3RyYXRlZ3k6IFwiand0XCIgfSxcclxuICBwYWdlczoge1xyXG4gICAgc2lnbkluOiAnL2xvZ2luJyxcclxuICAgIGVycm9yOiAnL2xvZ2luJyxcclxuICB9LFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgQ3JlZGVudGlhbHMoe1xyXG4gICAgICBuYW1lOiBcImNyZWRlbnRpYWxzXCIsXHJcbiAgICAgIGNyZWRlbnRpYWxzOiB7IFxyXG4gICAgICAgIGVtYWlsOiB7IGxhYmVsOiBcIkVtYWlsXCIsIHR5cGU6IFwiZW1haWxcIiB9LCBcclxuICAgICAgICBwYXNzd29yZDogeyBsYWJlbDogXCJQYXNzd29yZFwiLCB0eXBlOiBcInBhc3N3b3JkXCIgfSBcclxuICAgICAgfSxcclxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XHJcbiAgICAgICAgaWYgKCFjcmVkZW50aWFscz8uZW1haWwgfHwgIWNyZWRlbnRpYWxzPy5wYXNzd29yZCkge1xyXG4gICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7IFxyXG4gICAgICAgICAgICB3aGVyZTogeyBlbWFpbDogY3JlZGVudGlhbHMuZW1haWwgfSxcclxuICAgICAgICAgICAgc2VsZWN0OiB7XHJcbiAgICAgICAgICAgICAgaWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgZW1haWw6IHRydWUsXHJcbiAgICAgICAgICAgICAgbmFtZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBwYXNzd29yZDogdHJ1ZSxcclxuICAgICAgICAgICAgICByb2xlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIHJhbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgdW5pdDogdHJ1ZSxcclxuICAgICAgICAgICAgICBpc0FjdGl2ZTogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgIGlmICghdXNlciB8fCAhdXNlci5pc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGNvbnN0IGlzVmFsaWRQYXNzd29yZCA9IGF3YWl0IGNvbXBhcmUoY3JlZGVudGlhbHMucGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpXHJcbiAgICAgICAgICBpZiAoIWlzVmFsaWRQYXNzd29yZCkge1xyXG4gICAgICAgICAgICAvLyBMb2cgZmFpbGVkIGxvZ2luIGF0dGVtcHRcclxuICAgICAgICAgICAgYXdhaXQgcHJpc21hLmZhaWxlZExvZ2luLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgZW1haWw6IGNyZWRlbnRpYWxzLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgaXBBZGRyZXNzOiAndW5rbm93bicgLy8gV2lsbCBiZSB1cGRhdGVkIGluIG1pZGRsZXdhcmVcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gVXBkYXRlIGxhc3QgbG9naW5cclxuICAgICAgICAgIGF3YWl0IHByaXNtYS51c2VyLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiB1c2VyLmlkIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IHsgbGFzdExvZ2luOiBuZXcgRGF0ZSgpIH1cclxuICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgLy8gTG9nIHN1Y2Nlc3NmdWwgbG9naW5cclxuICAgICAgICAgIGF3YWl0IHByaXNtYS5hY2Nlc3NMb2cuY3JlYXRlKHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgIHVzZXJJZDogdXNlci5pZCxcclxuICAgICAgICAgICAgICBhY3Rpb246ICdMT0dJTicsXHJcbiAgICAgICAgICAgICAgcGFnZUFjY2Vzc2VkOiAnbG9naW4nLFxyXG4gICAgICAgICAgICAgIGlwQWRkcmVzczogJ3Vua25vd24nLCAvLyBXaWxsIGJlIHVwZGF0ZWQgaW4gbWlkZGxld2FyZVxyXG4gICAgICAgICAgICAgIHVzZXJBZ2VudDogJ3Vua25vd24nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IHVzZXIuaWQsXHJcbiAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgICAgICBuYW1lOiB1c2VyLm5hbWUsXHJcbiAgICAgICAgICAgIHJvbGU6IHVzZXIucm9sZSxcclxuICAgICAgICAgICAgcmFuazogdXNlci5yYW5rLFxyXG4gICAgICAgICAgICB1bml0OiB1c2VyLnVuaXRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignQXV0aCBlcnJvcjonLCBlcnJvcilcclxuICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIF0sXHJcbiAgY2FsbGJhY2tzOiB7XHJcbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciB9KSB7XHJcbiAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgdG9rZW4ucm9sZSA9IHVzZXIucm9sZVxyXG4gICAgICAgIHRva2VuLnJhbmsgPSB1c2VyLnJhbmtcclxuICAgICAgICB0b2tlbi51bml0ID0gdXNlci51bml0XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRva2VuXHJcbiAgICB9LFxyXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcclxuICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgc2Vzc2lvbi51c2VyLnJvbGUgPSB0b2tlbi5yb2xlIGFzIHN0cmluZ1xyXG4gICAgICAgIHNlc3Npb24udXNlci5yYW5rID0gdG9rZW4ucmFuayBhcyBzdHJpbmdcclxuICAgICAgICBzZXNzaW9uLnVzZXIudW5pdCA9IHRva2VuLnVuaXQgYXMgc3RyaW5nXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHNlc3Npb25cclxuICAgIH1cclxuICB9LFxyXG4gIGV2ZW50czoge1xyXG4gICAgYXN5bmMgc2lnbk91dCh7IHRva2VuIH0pIHtcclxuICAgICAgaWYgKHRva2VuLnN1Yikge1xyXG4gICAgICAgIGF3YWl0IHByaXNtYS5hY2Nlc3NMb2cuY3JlYXRlKHtcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgdXNlcklkOiB0b2tlbi5zdWIsXHJcbiAgICAgICAgICAgIGFjdGlvbjogJ0xPR09VVCcsXHJcbiAgICAgICAgICAgIHBhZ2VBY2Nlc3NlZDogJ2xvZ291dCcsXHJcbiAgICAgICAgICAgIGlwQWRkcmVzczogJ3Vua25vd24nLFxyXG4gICAgICAgICAgICB1c2VyQWdlbnQ6ICd1bmtub3duJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pXHJcbiJdLCJuYW1lcyI6WyJQcmlzbWFBZGFwdGVyIiwiTmV4dEF1dGgiLCJDcmVkZW50aWFscyIsImNvbXBhcmUiLCJwcmlzbWEiLCJoYW5kbGVycyIsImF1dGgiLCJzaWduSW4iLCJzaWduT3V0IiwiYWRhcHRlciIsInNlc3Npb24iLCJzdHJhdGVneSIsInBhZ2VzIiwiZXJyb3IiLCJwcm92aWRlcnMiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsImxhYmVsIiwidHlwZSIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsInNlbGVjdCIsImlkIiwicm9sZSIsInJhbmsiLCJ1bml0IiwiaXNBY3RpdmUiLCJpc1ZhbGlkUGFzc3dvcmQiLCJmYWlsZWRMb2dpbiIsImNyZWF0ZSIsImRhdGEiLCJpcEFkZHJlc3MiLCJ1cGRhdGUiLCJsYXN0TG9naW4iLCJEYXRlIiwiYWNjZXNzTG9nIiwidXNlcklkIiwiYWN0aW9uIiwicGFnZUFjY2Vzc2VkIiwidXNlckFnZW50IiwiY29uc29sZSIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwiZXZlbnRzIiwic3ViIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst globalForPrisma = globalThis;\nconst prisma = globalForPrisma.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalForPrisma.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvcHJpc21hLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QztBQUU3QyxNQUFNQyxrQkFBa0JDO0FBSWpCLE1BQU1DLFNBQVNGLGdCQUFnQkUsTUFBTSxJQUFJLElBQUlILHdEQUFZQSxHQUFFO0FBRWxFLElBQUlJLElBQXlCLEVBQWNILGdCQUFnQkUsTUFBTSxHQUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovLzEwYzRpLWZveHRyb3QtbWVnYXNpdGUvLi9saWIvcHJpc21hLnRzPzk4MjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXHJcblxyXG5jb25zdCBnbG9iYWxGb3JQcmlzbWEgPSBnbG9iYWxUaGlzIGFzIHVua25vd24gYXMge1xyXG4gIHByaXNtYTogUHJpc21hQ2xpZW50IHwgdW5kZWZpbmVkXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwcmlzbWEgPSBnbG9iYWxGb3JQcmlzbWEucHJpc21hID8/IG5ldyBQcmlzbWFDbGllbnQoKVxyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIGdsb2JhbEZvclByaXNtYS5wcmlzbWEgPSBwcmlzbWFcclxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImdsb2JhbEZvclByaXNtYSIsImdsb2JhbFRoaXMiLCJwcmlzbWEiLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/prisma.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/cookie","vendor-chunks/@auth","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5Cdemon%5COneDrive%5CDocuments%5CJerming%20projects%5CSAF%5CFOXTROT-WEBSITE%5CFoxtrot-site%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cdemon%5COneDrive%5CDocuments%5CJerming%20projects%5CSAF%5CFOXTROT-WEBSITE%5CFoxtrot-site&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();