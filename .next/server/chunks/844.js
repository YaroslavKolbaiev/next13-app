exports.id = 844;
exports.ids = [844];
exports.modules = {

/***/ 4018:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1480))

/***/ }),

/***/ 6413:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6242))

/***/ }),

/***/ 8044:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9446, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3258, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6862, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2030, 23))

/***/ }),

/***/ 3259:
/***/ (() => {



/***/ }),

/***/ 7766:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ */ const { createProxy  } = __webpack_require__(4353);
module.exports = createProxy("D:\\FRONTEND\\NEXT JS\\NEXT_BLOG\\my-blog-app\\app\\error.tsx");


/***/ }),

/***/ 447:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Head)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8499);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5468);


function Head() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: "Blog-App"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                content: "width=device-width, initial-scale=1",
                name: "viewport"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "description",
                content: "Created by iRick"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "icon",
                href: "/favicon-32x32.png"
            })
        ]
    });
}


/***/ }),

/***/ 8514:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ */ const { createProxy  } = __webpack_require__(4353);
module.exports = createProxy("D:\\FRONTEND\\NEXT JS\\NEXT_BLOG\\my-blog-app\\app\\layout.tsx");


/***/ }),

/***/ 8074:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8499);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5468);
/* harmony import */ var _componetns_LoadingComp_LoadingComp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4522);



function Loading() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componetns_LoadingComp_LoadingComp__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {});
}


/***/ }),

/***/ 4522:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ LoadingComp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8499);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5468);


function LoadingComp() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "hero is-dark is-fullheight",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "hero-body",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "title",
                    children: "Loading please wait.."
                })
            })
        })
    });
}


/***/ }),

/***/ 1480:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Error)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Error({ error , reset  }) {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        console.error(error);
    }, [
        error
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "Something went wrong!"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: "button",
                type: "button",
                onClick: ()=>reset(),
                children: "Reset error boundary"
            })
        ]
    });
}


/***/ }),

/***/ 6242:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next-auth/react/index.js
var react = __webpack_require__(3370);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/bulma/css/bulma.css
var bulma = __webpack_require__(4779);
// EXTERNAL MODULE: ./node_modules/@fortawesome/fontawesome-free/css/all.css
var css_all = __webpack_require__(2815);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(8421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(9483);
;// CONCATENATED MODULE: ./componetns/MainNav/MainNav.tsx






function MainNav() {
    const { data: session , status  } = (0,react.useSession)();
    const logged = status === "authenticated";
    const segment = (0,navigation.useSelectedLayoutSegment)();
    const isActiveAccount = segment === "account";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "level has-background-black is-flex m-0 p-5",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "level-left",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        className: "has-text-primary level-item is-size-3 has-text-weight-semibold",
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            style: {
                                borderRadius: "50%",
                                backgroundColor: "red"
                            },
                            src: "/images/logo.jpg",
                            alt: "picture displaying logo",
                            width: 50,
                            height: 50
                        })
                    }),
                    logged && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        className: "has-text-grey-light level-item",
                        href: "/account",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            style: {
                                fontWeight: isActiveAccount ? "bold" : "normal"
                            },
                            children: session?.user?.email
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "level-right",
                children: [
                    !logged && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        className: "has-text-grey-light level-item",
                        href: "/auth",
                        children: "Login"
                    }),
                    logged && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: ()=>(0,react.signOut)(),
                        type: "button",
                        className: "button is-small level-item is-dark has-text-grey-light",
                        children: "Logout"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        className: "has-text-grey-light level-item",
                        href: "/posts",
                        children: "Posts"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        className: "has-text-grey-light level-item",
                        href: "/contacts",
                        children: "Contacts"
                    }),
                    logged && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        className: "has-text-grey-light level-item",
                        href: "/newpost",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "icon",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "fa-solid fa-square-plus"
                            })
                        })
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./app/layout.tsx






function RootLayout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("html", {
        lang: "en",
        className: "has-background-grey-lighter",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("head", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("body", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react.SessionProvider, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(MainNav, {}),
                        children
                    ]
                })
            })
        ]
    });
}


/***/ })

};
;