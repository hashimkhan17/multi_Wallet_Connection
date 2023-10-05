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
exports.id = "pages/signin";
exports.ids = ["pages/signin"];
exports.modules = {

/***/ "./pages/signin.js":
/*!*************************!*\
  !*** ./pages/signin.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi/connectors/metaMask */ \"wagmi/connectors/metaMask\");\n/* harmony import */ var wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var wagmi_connectors_coinbaseWallet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/connectors/coinbaseWallet */ \"wagmi/connectors/coinbaseWallet\");\n/* harmony import */ var wagmi_connectors_coinbaseWallet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wagmi_connectors_coinbaseWallet__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var wagmi_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi/connectors/walletConnect */ \"wagmi/connectors/walletConnect\");\n/* harmony import */ var wagmi_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(wagmi_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\nfunction SignIn() {\n    const { connectAsync  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useConnect)();\n    const { disconnectAsync  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useDisconnect)();\n    const { isConnected  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useAccount)();\n    const { signMessageAsync  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useSignMessage)();\n    const { push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleAuth = async (wal)=>{\n        if (isConnected) {\n            await disconnectAsync();\n        }\n        console.log(\"Connect To Site Via Wallet\");\n        const userData = {\n            network: \"evm\"\n        };\n        if (wal === \"meta\") {\n            const { account , chain  } = await connectAsync({\n                connector: new wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_4__.MetaMaskConnector({})\n            });\n            userData.address = account;\n            userData.chain = chain.id;\n        }\n        console.log(userData);\n        if (wal === \"coin\") {\n            const { account: account1 , chain: chain1  } = await connectAsync({\n                connector: new wagmi_connectors_coinbaseWallet__WEBPACK_IMPORTED_MODULE_5__.CoinbaseWalletConnector({})\n            });\n            userData.address = account1;\n            userData.chain = chain1.id;\n        }\n        if (wal === \"wal\") {\n            const { account: account2 , chain: chain2  } = await connectAsync({\n                connector: new wagmi_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_6__.WalletConnectConnector({\n                    options: {\n                        qrcode: true\n                    }\n                })\n            });\n            userData.address = account2;\n            userData.chain = chain2.id;\n        }\n        console.log(\"Sending Connected Account and Chain ID to Moralis Auth API\");\n        const { data  } = await axios__WEBPACK_IMPORTED_MODULE_7___default().post(\"/api/auth/request-message\", userData, {\n            headers: {\n                \"content-type\": \"application/json\"\n            }\n        });\n        console.log(\"Received Signature Request From Moralis Auth API\");\n        const message = data.message;\n        const signature = await signMessageAsync({\n            message\n        });\n        console.log(\"Succesful Sign In, Redirecting to User Page\");\n        const { url  } = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(\"credentials\", {\n            message,\n            signature,\n            redirect: false,\n            callbackUrl: \"/user\"\n        });\n        push(url);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Web3 Authentication\"\n            }, void 0, false, {\n                fileName: \"D:\\\\check\\\\MultipleWalletAuthentication\\\\pages\\\\signin.js\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>handleAuth(\"meta\"),\n                children: \"Authenticate via Metamask\"\n            }, void 0, false, {\n                fileName: \"D:\\\\check\\\\MultipleWalletAuthentication\\\\pages\\\\signin.js\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\check\\\\MultipleWalletAuthentication\\\\pages\\\\signin.js\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>handleAuth(\"coin\"),\n                children: \"Authenticate via Coinbase\"\n            }, void 0, false, {\n                fileName: \"D:\\\\check\\\\MultipleWalletAuthentication\\\\pages\\\\signin.js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\check\\\\MultipleWalletAuthentication\\\\pages\\\\signin.js\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>handleAuth(\"wal\"),\n                children: \"Authenticate via Wallet Connect\"\n            }, void 0, false, {\n                fileName: \"D:\\\\check\\\\MultipleWalletAuthentication\\\\pages\\\\signin.js\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\check\\\\MultipleWalletAuthentication\\\\pages\\\\signin.js\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignIn);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU1sQyx1REFBTSxDQUFDLGFBQWEsRUFBRTtZQUMxQ2dDLE9BQU87WUFDUEMsU0FBUztZQUNURSxRQUFRLEVBQUUsS0FBSztZQUNmQyxXQUFXLEVBQUUsT0FBTztTQUNyQixDQUFDO1FBRUZyQixJQUFJLENBQUNtQixHQUFHLENBQUMsQ0FBQztLQUNYO0lBRUQscUJBQ0UsOERBQUNHLEtBQUc7OzBCQUNGLDhEQUFDQyxJQUFFOzBCQUFDLHFCQUFtQjs7Ozs7b0JBQUs7MEJBQzVCLDhEQUFDQyxRQUFNO2dCQUFDQyxPQUFPLEVBQUUsSUFBTXhCLFVBQVUsQ0FBQyxNQUFNLENBQUM7MEJBQUUsMkJBRTNDOzs7OztvQkFBUzswQkFDVCw4REFBQ3lCLElBQUU7Ozs7b0JBQUc7MEJBQ04sOERBQUNGLFFBQU07Z0JBQUNDLE9BQU8sRUFBRSxJQUFNeEIsVUFBVSxDQUFDLE1BQU0sQ0FBQzswQkFBRSwyQkFFM0M7Ozs7O29CQUFTOzBCQUNULDhEQUFDeUIsSUFBRTs7OztvQkFBRTswQkFDTCw4REFBQ0YsUUFBTTtnQkFBQ0MsT0FBTyxFQUFFLElBQU14QixVQUFVLENBQUMsS0FBSyxDQUFDOzBCQUFFLGlDQUUxQzs7Ozs7b0JBQVM7Ozs7OztZQUNMLENBQ047Q0FDSDtBQUVELGlFQUFlTixNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIzYXV0aC8uL3BhZ2VzL3NpZ25pbi5qcz83OGZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNpZ25JbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCB7IHVzZUFjY291bnQsIHVzZUNvbm5lY3QsIHVzZVNpZ25NZXNzYWdlLCB1c2VEaXNjb25uZWN0IH0gZnJvbSBcIndhZ21pXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IE1ldGFNYXNrQ29ubmVjdG9yIH0gZnJvbSBcIndhZ21pL2Nvbm5lY3RvcnMvbWV0YU1hc2tcIjtcbmltcG9ydCB7IENvaW5iYXNlV2FsbGV0Q29ubmVjdG9yIH0gZnJvbSBcIndhZ21pL2Nvbm5lY3RvcnMvY29pbmJhc2VXYWxsZXRcIjtcbmltcG9ydCB7IFdhbGxldENvbm5lY3RDb25uZWN0b3IgfSBmcm9tIFwid2FnbWkvY29ubmVjdG9ycy93YWxsZXRDb25uZWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmZ1bmN0aW9uIFNpZ25JbigpIHtcbiAgY29uc3QgeyBjb25uZWN0QXN5bmMgfSA9IHVzZUNvbm5lY3QoKTtcbiAgY29uc3QgeyBkaXNjb25uZWN0QXN5bmMgfSA9IHVzZURpc2Nvbm5lY3QoKTtcbiAgY29uc3QgeyBpc0Nvbm5lY3RlZCB9ID0gdXNlQWNjb3VudCgpO1xuICBjb25zdCB7IHNpZ25NZXNzYWdlQXN5bmMgfSA9IHVzZVNpZ25NZXNzYWdlKCk7XG4gIGNvbnN0IHsgcHVzaCB9ID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgaGFuZGxlQXV0aCA9IGFzeW5jICh3YWwpID0+IHtcbiAgICBpZiAoaXNDb25uZWN0ZWQpIHtcbiAgICAgIGF3YWl0IGRpc2Nvbm5lY3RBc3luYygpO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdCBUbyBTaXRlIFZpYSBXYWxsZXRcIik7XG5cbiAgICBjb25zdCB1c2VyRGF0YSA9IHsgbmV0d29yazogXCJldm1cIiB9O1xuXG4gICAgaWYgKHdhbCA9PT0gXCJtZXRhXCIpIHtcbiAgICAgIGNvbnN0IHsgYWNjb3VudCwgY2hhaW4gfSA9IGF3YWl0IGNvbm5lY3RBc3luYyh7XG4gICAgICAgIGNvbm5lY3RvcjogbmV3IE1ldGFNYXNrQ29ubmVjdG9yKHt9KSxcbiAgICAgIH0pO1xuICAgICAgdXNlckRhdGEuYWRkcmVzcyA9IGFjY291bnQ7XG4gICAgICB1c2VyRGF0YS5jaGFpbiA9IGNoYWluLmlkO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyh1c2VyRGF0YSlcblxuICAgIGlmICh3YWwgPT09IFwiY29pblwiKSB7XG4gICAgICBjb25zdCB7IGFjY291bnQsIGNoYWluIH0gPSBhd2FpdCBjb25uZWN0QXN5bmMoe1xuICAgICAgICBjb25uZWN0b3I6IG5ldyBDb2luYmFzZVdhbGxldENvbm5lY3Rvcih7fSksXG4gICAgICB9KTtcbiAgICAgIHVzZXJEYXRhLmFkZHJlc3MgPSBhY2NvdW50O1xuICAgICAgdXNlckRhdGEuY2hhaW4gPSBjaGFpbi5pZDtcbiAgICB9XG5cbiAgICBpZiAod2FsID09PSBcIndhbFwiKSB7XG4gICAgICBjb25zdCB7IGFjY291bnQsIGNoYWluIH0gPSBhd2FpdCBjb25uZWN0QXN5bmMoe1xuICAgICAgICBjb25uZWN0b3I6IG5ldyBXYWxsZXRDb25uZWN0Q29ubmVjdG9yKHsgb3B0aW9uczogeyBxcmNvZGU6IHRydWUgfSB9KSxcbiAgICAgIH0pO1xuICAgICAgdXNlckRhdGEuYWRkcmVzcyA9IGFjY291bnQ7XG4gICAgICB1c2VyRGF0YS5jaGFpbiA9IGNoYWluLmlkO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKFwiU2VuZGluZyBDb25uZWN0ZWQgQWNjb3VudCBhbmQgQ2hhaW4gSUQgdG8gTW9yYWxpcyBBdXRoIEFQSVwiKTtcblxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdChcIi9hcGkvYXV0aC9yZXF1ZXN0LW1lc3NhZ2VcIiwgdXNlckRhdGEsIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY29uc29sZS5sb2coXCJSZWNlaXZlZCBTaWduYXR1cmUgUmVxdWVzdCBGcm9tIE1vcmFsaXMgQXV0aCBBUElcIik7XG5cbiAgICBjb25zdCBtZXNzYWdlID0gZGF0YS5tZXNzYWdlO1xuXG4gICAgY29uc3Qgc2lnbmF0dXJlID0gYXdhaXQgc2lnbk1lc3NhZ2VBc3luYyh7IG1lc3NhZ2UgfSk7XG5cbiAgICBjb25zb2xlLmxvZyhcIlN1Y2Nlc2Z1bCBTaWduIEluLCBSZWRpcmVjdGluZyB0byBVc2VyIFBhZ2VcIik7XG5cbiAgICBjb25zdCB7IHVybCB9ID0gYXdhaXQgc2lnbkluKFwiY3JlZGVudGlhbHNcIiwge1xuICAgICAgbWVzc2FnZSxcbiAgICAgIHNpZ25hdHVyZSxcbiAgICAgIHJlZGlyZWN0OiBmYWxzZSxcbiAgICAgIGNhbGxiYWNrVXJsOiBcIi91c2VyXCIsXG4gICAgfSk7XG5cbiAgICBwdXNoKHVybCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgzPldlYjMgQXV0aGVudGljYXRpb248L2gzPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBdXRoKFwibWV0YVwiKX0+XG4gICAgICAgIEF1dGhlbnRpY2F0ZSB2aWEgTWV0YW1hc2tcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJyIC8+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUF1dGgoXCJjb2luXCIpfT5cbiAgICAgICAgQXV0aGVudGljYXRlIHZpYSBDb2luYmFzZVxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnIvPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBdXRoKFwid2FsXCIpfT5cbiAgICAgICAgQXV0aGVudGljYXRlIHZpYSBXYWxsZXQgQ29ubmVjdFxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25JbjtcbiJdLCJuYW1lcyI6WyJzaWduSW4iLCJ1c2VBY2NvdW50IiwidXNlQ29ubmVjdCIsInVzZVNpZ25NZXNzYWdlIiwidXNlRGlzY29ubmVjdCIsInVzZVJvdXRlciIsIk1ldGFNYXNrQ29ubmVjdG9yIiwiQ29pbmJhc2VXYWxsZXRDb25uZWN0b3IiLCJXYWxsZXRDb25uZWN0Q29ubmVjdG9yIiwiYXhpb3MiLCJTaWduSW4iLCJjb25uZWN0QXN5bmMiLCJkaXNjb25uZWN0QXN5bmMiLCJpc0Nvbm5lY3RlZCIsInNpZ25NZXNzYWdlQXN5bmMiLCJwdXNoIiwiaGFuZGxlQXV0aCIsIndhbCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyRGF0YSIsIm5ldHdvcmsiLCJhY2NvdW50IiwiY2hhaW4iLCJjb25uZWN0b3IiLCJhZGRyZXNzIiwiaWQiLCJvcHRpb25zIiwicXJjb2RlIiwiZGF0YSIsInBvc3QiLCJoZWFkZXJzIiwibWVzc2FnZSIsInNpZ25hdHVyZSIsInVybCIsInJlZGlyZWN0IiwiY2FsbGJhY2tVcmwiLCJkaXYiLCJoMyIsImJ1dHRvbiIsIm9uQ2xpY2siLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/signin.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

module.exports = require("wagmi");

/***/ }),

/***/ "wagmi/connectors/coinbaseWallet":
/*!**************************************************!*\
  !*** external "wagmi/connectors/coinbaseWallet" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("wagmi/connectors/coinbaseWallet");

/***/ }),

/***/ "wagmi/connectors/metaMask":
/*!********************************************!*\
  !*** external "wagmi/connectors/metaMask" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("wagmi/connectors/metaMask");

/***/ }),

/***/ "wagmi/connectors/walletConnect":
/*!*************************************************!*\
  !*** external "wagmi/connectors/walletConnect" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("wagmi/connectors/walletConnect");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/signin.js"));
module.exports = __webpack_exports__;

})();