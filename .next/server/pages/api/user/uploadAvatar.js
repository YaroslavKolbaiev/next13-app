"use strict";
(() => {
var exports = {};
exports.id = 143;
exports.ids = [143];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 5466:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_db_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1396);


async function handler(req, res) {
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_0__.getSession)({
        req
    });
    if (!session) {
        res.status(401).json({
            message: "current session is unavailable"
        });
    }
    const userEmail = session?.user?.email;
    const { avatar  } = req.body;
    const db = await (0,_helpers_db_util__WEBPACK_IMPORTED_MODULE_1__/* .connectDatabase */ .TR)();
    const userCollection = db.collection("users");
    const user = await userCollection.findOne({
        email: userEmail
    });
    if (!user) {
        res.status(404).json({
            message: "no user found"
        });
    }
    if (req.method === "GET") {
        res.status(200).json({
            message: user
        });
    }
    if (req.method === "POST") {
        await userCollection.updateOne({
            email: userEmail
        }, {
            $set: {
                avatar
            }
        });
        res.status(200).json({
            message: "Avatar changed"
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [962], () => (__webpack_exec__(5466)));
module.exports = __webpack_exports__;

})();