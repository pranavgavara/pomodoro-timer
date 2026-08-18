import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAEPNgXhItKISTG-mnybLEdPVmuXLe9cu8',
  authDomain: 'habit-tracker-1c359.firebaseapp.com',
  projectId: 'habit-tracker-1c359',
  storageBucket: 'habit-tracker-1c359.firebasestorage.app',
  messagingSenderId: '633793333230',
  appId: '1:633793333230:web:0cfe83db253d96974eb0ff',
  databaseURL: 'https://habit-tracker-1c359-default-rtdb.firebaseio.com',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
export default app;
