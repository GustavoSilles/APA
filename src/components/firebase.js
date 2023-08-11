import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD84Vt3VYw53yR--Mjt3mVaclthuSNowT0",
  authDomain: "saapa-f488e.firebaseapp.com",
  projectId: "saapa-f488e",
  storageBucket: "saapa-f488e.appspot.com",
  messagingSenderId: "909655894867",
  appId: "1:909655894867:web:54a7c488f3a5d17752cfa6",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
