import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCorPmBt002tmQEigWU3wqPTtXwcWMtBhk",
  authDomain: "chat-app-75e6e.firebaseapp.com",
  projectId: "chat-app-75e6e",
  storageBucket: "chat-app-75e6e.appspot.com",
  messagingSenderId: "328248188269",
  appId: "1:328248188269:web:7d3173757b99a67267ce64",
  measurementId: "G-7816FLXQ8M"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);