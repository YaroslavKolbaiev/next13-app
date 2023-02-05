"use strict";
(() => {
var exports = {};
exports.id = 45;
exports.ids = [45];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

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

/***/ 1065:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _helpers_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8841);
/* harmony import */ var _helpers_db_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1396);


async function handler(req, res) {
    if (req.method !== "POST") {
        return;
    }
    const data = req.body;
    const { email , password  } = data;
    if (!email || !email.includes("@") || !password || password.trim().length < 7) {
        res.status(422).json({
            message: "Invalid input"
        });
        return;
    }
    const db = await (0,_helpers_db_util__WEBPACK_IMPORTED_MODULE_1__/* .connectDatabase */ .TR)();
    const existingUser = await db.collection("users").findOne({
        email
    });
    if (existingUser) {
        res.status(422).json({
            message: "User already exists"
        });
        return;
    }
    const hashedPassword = await (0,_helpers_auth__WEBPACK_IMPORTED_MODULE_0__/* .hashPassword */ .c)(password);
    await db.collection("users").insertOne({
        email,
        password: hashedPassword,
        avatar: ""
    });
    res.status(201).json({
        message: "User created OK!"
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [962], () => (__webpack_exec__(1065)));
module.exports = __webpack_exports__;

})();