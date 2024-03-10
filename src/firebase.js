import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyATW1lPnUGT3wR-8TLjF-mAqes0QwGm4-Q',
  authDomain: 'learn-lingo-968e1.firebaseapp.com',
  databaseURL:
    'https://learn-lingo-968e1-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'learn-lingo-968e1',
  storageBucket: 'learn-lingo-968e1.appspot.com',
  messagingSenderId: '665688393190',
  appId: '1:665688393190:web:4b7aa74b54cd09d6a34227',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
