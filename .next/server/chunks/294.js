"use strict";
exports.id = 294;
exports.ids = [294];
exports.modules = {

/***/ 4294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports connectClient, connectDatabase, insertDocument */
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8013);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable no-underscore-dangle */ 
const connectClient = async ()=>{
    const url = `mongodb+srv://${"iRick"}:${"nnrVi69PSk47dpRE"}@${"cluster0"}.349ywek.mongodb.net/?retryWrites=true&w=majority`;
    const client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(url);
    const result = await client.connect();
    return result;
};
const connectDatabase = async ()=>{
    let client;
    try {
        client = await connectClient();
    } catch (error) {
        throw new Error("Problem with connetcion to database");
    }
    const db = client.db("posts-app");
    return db;
};
const insertDocument = async (collection, document)=>{
    const db = await connectDatabase();
    const result = await db.collection(collection).insertOne(document);
    return result;
};
async function getFeaturedPosts() {
    const db = await connectDatabase();
    try {
        const posts = await db.collection("posts").find().limit(3).map((post)=>({
                ...post,
                _id: post._id.toString()
            })).toArray();
        return posts;
    } catch (error) {
        throw new Error("Problem with loading posts");
    }
}
async function getAllPosts() {
    const db = await connectDatabase();
    try {
        const posts = await db.collection("posts").find().map((post)=>({
                ...post,
                _id: post._id.toString()
            })).toArray();
        return posts;
    } catch (error) {
        throw new Error("Problem with loading posts");
    }
}
async function getPost(slug) {
    const db = await connectDatabase();
    try {
        const post = await db.collection("posts").findOne({
            slug
        });
        return post;
    } catch (error) {
        throw new Error("Problem with loading posts");
    }
}
async function createPost(postData) {
    const { slug , title , userEmail , image , excerpt  } = postData;
    if (!slug || !title || !userEmail || !image || !excerpt) {
        throw new Error("Please provide all data");
    }
    const newPost = {
        slug,
        title,
        userEmail,
        image,
        excerpt
    };
    try {
        await insertDocument("posts", newPost);
        console.log("Created New Post");
    } catch (error) {
        throw new Error("Error while creating a new post");
    }
}
async function createContact(postData) {
    const { name , email , message  } = postData;
    if (!name || !email || !message) {
        throw new Error("Please provide all data");
    }
    const newContact = {
        name,
        email,
        message
    };
    try {
        await insertDocument("contacts", newContact);
        console.log("Created New Contact");
    } catch (error) {
        throw new Error("Error while creating a new post");
    }
}
async function createComment(commentData) {
    const { email , text , postSlug , avatar  } = commentData;
    if (!email || !text || !postSlug) {
        throw new Error("Please provide all data");
    }
    const newComment = {
        email,
        text,
        postSlug,
        avatar
    };
    // const db = await connectDatabase();
    try {
        await insertDocument("comments", newComment);
        console.log("Created New Comment");
    } catch (error) {
        throw new Error("Error while creating a new comment");
    }
}
async function getComments(slug) {
    const db = await connectDatabase();
    try {
        const comments = await db.collection("comments").find({
            postSlug: slug
        }).map((comment)=>({
                ...comment,
                _id: comment._id.toString()
            })).toArray();
        return comments;
    } catch (error) {
        throw new Error("Problem with loading comments");
    }
}
async function getUser(email) {
    const db = await connectDatabase();
    try {
        const user = await db.collection("users").findOne({
            email
        });
        return user;
    } catch (error) {
        throw new Error("Problem with loading user");
    }
}
const mongoDb = {
    getFeaturedPosts,
    getAllPosts,
    getPost,
    createPost,
    createContact,
    createComment,
    getComments,
    getUser
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoDb);


/***/ })

};
;