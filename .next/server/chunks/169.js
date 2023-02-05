"use strict";
exports.id = 169;
exports.ids = [169];
exports.modules = {

/***/ 4644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ LoadingComp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


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

/***/ 1192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ FirebaseStorage)
});

// EXTERNAL MODULE: ./node_modules/firebase/storage/dist/index.mjs + 1 modules
var dist = __webpack_require__(8120);
// EXTERNAL MODULE: ./node_modules/firebase/app/dist/index.mjs
var app_dist = __webpack_require__(1288);
;// CONCATENATED MODULE: ./helpers/FireBaseConfig.ts


const config = {
    apiKey: "AIzaSyDBgCwuBOAvn-3-JOM6BNqfRju6U5gdyas",
    authDomain: "my-nextjs-storage.firebaseapp.com",
    projectId: "my-nextjs-storage",
    storageBucket: "my-nextjs-storage.appspot.com",
    messagingSenderId: "718032937442",
    appId: "1:718032937442:web:e739286cf848fcf19c59bb",
    measurementId: "G-X2KDT02245"
};
const firebaseApp = (0,app_dist/* initializeApp */.ZF)(config);
const storage = (0,dist/* getStorage */.cF)(firebaseApp);

;// CONCATENATED MODULE: ./helpers/FirebaseStorage.ts


const uploadFile = async (file, fullFilePath, progressCallback)=>{
    const uploadRef = (0,dist/* ref */.iH)(storage, fullFilePath);
    const uploadTask = (0,dist/* uploadBytesResumable */.B0)(uploadRef, file);
    uploadTask.on("state_changed", (snapshot)=>{
        const progress = Math.round(snapshot.bytesTransferred / snapshot.totalBytes * 100);
        progressCallback(progress);
    }, (error)=>{
        throw error;
    });
    return uploadTask.then(async ()=>{
        const downloadUrl = await (0,dist/* getDownloadURL */.Jt)(uploadTask.snapshot.ref);
        return downloadUrl;
    });
};
const deleteFile = (fileDownloadUrl)=>{
    const decodeUrl = decodeURIComponent(fileDownloadUrl);
    const startIndex = decodeUrl.indexOf("/o/") + 3;
    const endIndex = decodeUrl.indexOf("?");
    const filePath = decodeUrl.substring(startIndex, endIndex);
    const fileRef = (0,dist/* ref */.iH)(storage, filePath);
    return (0,dist/* deleteObject */.oq)(fileRef);
};
const FirebaseStorageService = {
    uploadFile,
    deleteFile
};
/* harmony default export */ const FirebaseStorage = (FirebaseStorageService);


/***/ }),

/***/ 6706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ handleCancelImageClick)
/* harmony export */ });
/* harmony import */ var _FirebaseStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1192);

function handleCancelImageClick(imageUrl, setFileInputRef, setImageUrl, setUploadProgress) {
    _FirebaseStorage__WEBPACK_IMPORTED_MODULE_0__/* ["default"].deleteFile */ .Z.deleteFile(imageUrl);
    setFileInputRef(null);
    setImageUrl("");
    setUploadProgress(-1);
}


/***/ }),

/***/ 7314:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ handleFileChanged)
/* harmony export */ });
/* harmony import */ var uuidv4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(775);
/* harmony import */ var _FirebaseStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1192);


async function handleFileChanged(event, setUploadProgress, setImageUrl, setFileInputRef) {
    const { files  } = event.target;
    const file = files[0];
    if (!file) {
        alert("File Select failed. Please try again.");
        return;
    }
    const generatedFileId = (0,uuidv4__WEBPACK_IMPORTED_MODULE_0__/* .uuid */ .Vj)();
    try {
        const downloadUrl = await _FirebaseStorage__WEBPACK_IMPORTED_MODULE_1__/* ["default"].uploadFile */ .Z.uploadFile(file, `storage/${generatedFileId}`, setUploadProgress);
        setImageUrl(downloadUrl);
    } catch (error) {
        setUploadProgress(-1);
        setFileInputRef(null);
        alert(error.message);
        throw error;
    }
}


/***/ })

};
;