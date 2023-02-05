import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const config = {
  apiKey: 'AIzaSyDBgCwuBOAvn-3-JOM6BNqfRju6U5gdyas',
  authDomain: 'my-nextjs-storage.firebaseapp.com',
  projectId: 'my-nextjs-storage',
  storageBucket: 'my-nextjs-storage.appspot.com',
  messagingSenderId: '718032937442',
  appId: '1:718032937442:web:e739286cf848fcf19c59bb',
  measurementId: 'G-X2KDT02245',
};

const firebaseApp = initializeApp(config);
export const storage = getStorage(firebaseApp);
