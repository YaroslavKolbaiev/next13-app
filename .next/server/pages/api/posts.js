"use strict";
(() => {
var exports = {};
exports.id = 223;
exports.ids = [223];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 5594:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _helpers_db_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1396);

async function handler(req, res) {
    if (req.method === "POST") {
        const { slug , title , userEmail , image , excerpt  } = req.body;
        const newPost = {
            slug,
            title,
            userEmail,
            image,
            excerpt
        };
        try {
            await _helpers_db_util__WEBPACK_IMPORTED_MODULE_0__/* ["default"].createPost */ .ZP.createPost(newPost);
            res.status(201);
        } catch (error) {
            res.status(500);
        }
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [962], () => (__webpack_exec__(5594)));
module.exports = __webpack_exports__;

})();