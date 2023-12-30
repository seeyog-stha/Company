
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyDlxE1lPhHgbhzlcHzBKJUECSWTNjDouLY",
  authDomain: "databaseofphotos.firebaseapp.com",
  projectId: "databaseofphotos",
  storageBucket: "databaseofphotos.appspot.com",
  messagingSenderId: "880931567531",
  appId: "1:880931567531:web:340d7b04546abd11b604ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const imageDb= getStorage(app)