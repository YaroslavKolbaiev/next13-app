"use strict";
(() => {
var exports = {};
exports.id = 748;
exports.ids = [748];
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

/***/ 3647:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "authOptions": () => (/* binding */ authOptions),
  "default": () => (/* binding */ _nextauth_)
});

;// CONCATENATED MODULE: external "next-auth/providers/credentials"
const credentials_namespaceObject = require("next-auth/providers/credentials");
var credentials_default = /*#__PURE__*/__webpack_require__.n(credentials_namespaceObject);
;// CONCATENATED MODULE: external "next-auth"
const external_next_auth_namespaceObject = require("next-auth");
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
// EXTERNAL MODULE: ./helpers/auth.ts + 1 modules
var auth = __webpack_require__(8841);
// EXTERNAL MODULE: ./helpers/db-util.ts
var db_util = __webpack_require__(1396);
;// CONCATENATED MODULE: ./pages/api/auth/[...nextauth].ts




const authOptions = {
    providers: [
        credentials_default()({
            name: "Credentials",
            credentials: {
                email: {
                    label: "email",
                    type: "text"
                },
                password: {
                    label: "Password",
                    type: "password"
                }
            },
            async authorize (credentials) {
                const { email , password  } = credentials;
                const db = await (0,db_util/* connectDatabase */.TR)();
                const user = await db.collection("users").findOne({
                    email
                });
                if (!user) {
                    throw new Error("No user found!");
                }
                const isValid = await (0,auth/* verifyPassword */.G)(password, user.password);
                if (!isValid) {
                    throw new Error("Password is incorect");
                }
                return user;
            }
        })
    ],
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET,
    jwt: {
        secret: process.env.NEXTAUTH_SECRET
    }
};
/* harmony default export */ const _nextauth_ = (external_next_auth_default()(authOptions));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [962], () => (__webpack_exec__(3647)));
module.exports = __webpack_exports__;

})();