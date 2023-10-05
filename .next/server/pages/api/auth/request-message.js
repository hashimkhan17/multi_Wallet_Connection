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
exports.id = "pages/api/auth/request-message";
exports.ids = ["pages/api/auth/request-message"];
exports.modules = {

/***/ "moralis":
/*!**************************!*\
  !*** external "moralis" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("moralis");

/***/ }),

/***/ "(api)/./pages/api/auth/request-message.js":
/*!*******************************************!*\
  !*** ./pages/api/auth/request-message.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moralis */ \"moralis\");\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moralis__WEBPACK_IMPORTED_MODULE_0__);\n\nconst config = {\n    domain: process.env.APP_DOMAIN,\n    statement: \"Web Login.\",\n    uri: process.env.NEXTAUTH_URL,\n    timeout: 60\n};\nasync function handler(req, res) {\n    const { address , chain , network  } = req.body;\n    await moralis__WEBPACK_IMPORTED_MODULE_0___default().start({\n        apiKey: process.env.MORALIS_API_KEY\n    });\n    try {\n        const message = await moralis__WEBPACK_IMPORTED_MODULE_0___default().Auth.requestMessage({\n            address,\n            chain,\n            network,\n            ...config\n        });\n        // Create a new object with primitive data types for JSON response\n        const responseData = {\n            message: message\n        };\n        res.status(200).json(responseData);\n    } catch (error) {\n        res.status(400).json({\n            error\n        });\n        console.error(error);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9yZXF1ZXN0LW1lc3NhZ2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThCO0FBRTlCLE1BQU1DLE1BQU0sR0FBRztJQUNiQyxNQUFNLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxVQUFVO0lBQzlCQyxTQUFTLEVBQUUsWUFBWTtJQUN2QkMsR0FBRyxFQUFFSixPQUFPLENBQUNDLEdBQUcsQ0FBQ0ksWUFBWTtJQUM3QkMsT0FBTyxFQUFFLEVBQUU7Q0FDWjtBQUVjLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsTUFBTSxFQUFFQyxPQUFPLEdBQUVDLEtBQUssR0FBRUMsT0FBTyxHQUFFLEdBQUdKLEdBQUcsQ0FBQ0ssSUFBSTtJQUU1QyxNQUFNaEIsb0RBQWEsQ0FBQztRQUFFa0IsTUFBTSxFQUFFZixPQUFPLENBQUNDLEdBQUcsQ0FBQ2UsZUFBZTtLQUFFLENBQUMsQ0FBQztJQUU3RCxJQUFJO1FBQ0YsTUFBTUMsT0FBTyxHQUFHLE1BQU1wQixrRUFBMkIsQ0FBQztZQUNoRGEsT0FBTztZQUNQQyxLQUFLO1lBQ0xDLE9BQU87WUFDUCxHQUFHZCxNQUFNO1NBQ1YsQ0FBQztRQUVGLGtFQUFrRTtRQUNsRSxNQUFNc0IsWUFBWSxHQUFHO1lBQ25CSCxPQUFPLEVBQUVBLE9BQU87U0FFakI7UUFFRFIsR0FBRyxDQUFDWSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0YsWUFBWSxDQUFDLENBQUM7S0FDcEMsQ0FBQyxPQUFPRyxLQUFLLEVBQUU7UUFDZGQsR0FBRyxDQUFDWSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxLQUFLO1NBQUUsQ0FBQyxDQUFDO1FBQ2hDQyxPQUFPLENBQUNELEtBQUssQ0FBQ0EsS0FBSyxDQUFDLENBQUM7S0FDdEI7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYjNhdXRoLy4vcGFnZXMvYXBpL2F1dGgvcmVxdWVzdC1tZXNzYWdlLmpzPzJlZWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vcmFsaXMgZnJvbSAnbW9yYWxpcyc7XG5cbmNvbnN0IGNvbmZpZyA9IHtcbiAgZG9tYWluOiBwcm9jZXNzLmVudi5BUFBfRE9NQUlOLFxuICBzdGF0ZW1lbnQ6ICdXZWIgTG9naW4uJyxcbiAgdXJpOiBwcm9jZXNzLmVudi5ORVhUQVVUSF9VUkwsXG4gIHRpbWVvdXQ6IDYwLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zdCB7IGFkZHJlc3MsIGNoYWluLCBuZXR3b3JrIH0gPSByZXEuYm9keTtcblxuICBhd2FpdCBNb3JhbGlzLnN0YXJ0KHsgYXBpS2V5OiBwcm9jZXNzLmVudi5NT1JBTElTX0FQSV9LRVkgfSk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgTW9yYWxpcy5BdXRoLnJlcXVlc3RNZXNzYWdlKHtcbiAgICAgIGFkZHJlc3MsXG4gICAgICBjaGFpbixcbiAgICAgIG5ldHdvcmssXG4gICAgICAuLi5jb25maWcsXG4gICAgfSk7XG5cbiAgICAvLyBDcmVhdGUgYSBuZXcgb2JqZWN0IHdpdGggcHJpbWl0aXZlIGRhdGEgdHlwZXMgZm9yIEpTT04gcmVzcG9uc2VcbiAgICBjb25zdCByZXNwb25zZURhdGEgPSB7XG4gICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgLy8gQWRkIG90aGVyIHByb3BlcnRpZXMgaGVyZSBpZiBuZWVkZWRcbiAgICB9O1xuXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24ocmVzcG9uc2VEYXRhKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yIH0pO1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTW9yYWxpcyIsImNvbmZpZyIsImRvbWFpbiIsInByb2Nlc3MiLCJlbnYiLCJBUFBfRE9NQUlOIiwic3RhdGVtZW50IiwidXJpIiwiTkVYVEFVVEhfVVJMIiwidGltZW91dCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJhZGRyZXNzIiwiY2hhaW4iLCJuZXR3b3JrIiwiYm9keSIsInN0YXJ0IiwiYXBpS2V5IiwiTU9SQUxJU19BUElfS0VZIiwibWVzc2FnZSIsIkF1dGgiLCJyZXF1ZXN0TWVzc2FnZSIsInJlc3BvbnNlRGF0YSIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/request-message.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/request-message.js"));
module.exports = __webpack_exports__;

})();