"use strict";
(() => {
var exports = {};
exports.id = 913;
exports.ids = [913];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 8841:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "c": () => (/* binding */ hashPassword),
  "G": () => (/* binding */ verifyPassword)
});

;// CONCATENATED MODULE: external "bcryptjs"
const external_bcryptjs_namespaceObject = require("bcryptjs");
;// CONCATENATED MODULE: ./helpers/auth.ts

async function hashPassword(password) {
    const hashedPassword = await (0,external_bcryptjs_namespaceObject.hash)(password, 12);
    return hashedPassword;
}
async function verifyPassword(password, hashedPassword) {
    const isValid = await (0,external_bcryptjs_namespaceObject.compare)(password, hashedPassword);
    return isValid;
}


/***/ }),

/***/ 1518:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8841);
/* harmony import */ var _helpers_db_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1396);



async function handler(req, res) {
    if (req.method !== "PATCH") {
        return;
    }
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_0__.getSession)({
        req
    });
    if (!session) {
        res.status(401).json({
            message: "current session is unavailable"
        });
    }
    const userEmail = session?.user?.email;
    const { oldPassword  } = req.body;
    const { newPassword  } = req.body;
    const db = await (0,_helpers_db_util__WEBPACK_IMPORTED_MODULE_2__/* .connectDatabase */ .TR)();
    const userCollection = db.collection("users");
    const user = await userCollection.findOne({
        email: userEmail
    });
    if (!user) {
        res.status(404).json({
            message: "no user found"
        });
    }
    const currentPassword = user?.password;
    const passwordAreEqual = await (0,_helpers_auth__WEBPACK_IMPORTED_MODULE_1__/* .verifyPassword */ .G)(oldPassword, currentPassword);
    if (!passwordAreEqual) {
        res.status(403).json({
            message: "invalid password"
        });
    }
    const hashedPassword = await (0,_helpers_auth__WEBPACK_IMPORTED_MODULE_1__/* .hashPassword */ .c)(newPassword);
    await userCollection.updateOne({
        email: userEmail
    }, {
        $set: {
            password: hashedPassword
        }
    });
    res.status(200).json({
        message: "Password updated!"
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [962], () => (__webpack_exec__(1518)));
module.exports = __webpack_exports__;

})();