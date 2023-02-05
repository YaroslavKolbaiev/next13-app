/* eslint-disable no-underscore-dangle */
import { MongoClient } from 'mongodb';

export const connectClient = async () => {
  const url = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.349ywek.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(url);
  const result = await client.connect();

  return result;
};

export const connectDatabase = async () => {
  let client;
  try {
    client = await connectClient();
  } catch (error) {
    throw new Error('Problem with connetcion to database');
  }

  const db = client.db(process.env.mongodb_database);

  return db;
};

export const insertDocument = async (collection: string, document: any) => {
  const db = await connectDatabase();
  const result = await db.collection(collection).insertOne(document);
  return result;
};

async function getFeaturedPosts() {
  const db = await connectDatabase();
  try {
    const posts: any = await db
      .collection('posts')
      .find()
      .limit(3)
      .map((post) => ({ ...post, _id: post._id.toString() }))
      .toArray();
    return posts;
  } catch (error) {
    throw new Error('Problem with loading posts');
  }
}

async function getAllPosts() {
  const db = await connectDatabase();
  try {
    const posts: any = await db
      .collection('posts')
      .find()
      .map((post) => ({ ...post, _id: post._id.toString() }))
      .toArray();
    return posts;
  } catch (error) {
    throw new Error('Problem with loading posts');
  }
}

async function getPost(slug: string) {
  const db = await connectDatabase();
  try {
    const post: any = await db.collection('posts').findOne({ slug });
    return post;
  } catch (error) {
    throw new Error('Problem with loading posts');
  }
}

async function createPost(postData: {
  slug: string;
  title: string;
  userEmail: string;
  image: string;
  excerpt: string;
}) {
  const {
    slug, title, userEmail, image, excerpt,
  } = postData;

  if (!slug || !title || !userEmail || !image || !excerpt) {
    throw new Error('Please provide all data');
  }

  const newPost = {
    slug,
    title,
    userEmail,
    image,
    excerpt,
  };

  try {
    await insertDocument('posts', newPost);
    console.log('Created New Post');
  } catch (error) {
    throw new Error('Error while creating a new post');
  }
}

async function createContact(postData: {
  name: string;
  email: string;
  message: string;
}) {
  const { name, email, message } = postData;

  if (!name || !email || !message) {
    throw new Error('Please provide all data');
  }

  const newContact = {
    name,
    email,
    message,
  };

  try {
    await insertDocument('contacts', newContact);
    console.log('Created New Contact');
  } catch (error) {
    throw new Error('Error while creating a new post');
  }
}

async function createComment(commentData: {
  email: string;
  text: string;
  postSlug: string;
  avatar: string;
}) {
  const {
    email, text, postSlug, avatar,
  } = commentData;

  if (!email || !text || !postSlug) {
    throw new Error('Please provide all data');
  }

  const newComment = {
    email,
    text,
    postSlug,
    avatar,
  };

  // const db = await connectDatabase();
  try {
    await insertDocument('comments', newComment);
    console.log('Created New Comment');
  } catch (error) {
    throw new Error('Error while creating a new comment');
  }
}

async function getComments(slug: string) {
  const db = await connectDatabase();
  try {
    const comments: any = await db
      .collection('comments')
      .find({ postSlug: slug })
      .map((comment) => ({ ...comment, _id: comment._id.toString() }))
      .toArray();
    return comments;
  } catch (error) {
    throw new Error('Problem with loading comments');
  }
}

async function getUser(email: string | null | undefined) {
  const db = await connectDatabase();
  try {
    const user: any = await db.collection('users').findOne({ email });
    return user;
  } catch (error) {
    throw new Error('Problem with loading user');
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
  getUser,
};

export default mongoDb;
