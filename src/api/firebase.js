import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB19NUS1POdAo3g9WfuObJUcIBWxxkIh5o",
  authDomain: "diplom-f83f3.firebaseapp.com",
  databaseURL: "https://diplom-f83f3-default-rtdb.firebaseio.com",
  projectId: "diplom-f83f3",
  storageBucket: "diplom-f83f3.appspot.com",
  messagingSenderId: "446829331640",
  appId: "1:446829331640:web:30470cbdbe0bb11c23604d",
  measurementId: "G-4S9ZTPWDEG",
};

export const firebase = initializeApp(firebaseConfig);

export const auth = getAuth(firebase);
export const database = getDatabase(firebase);
