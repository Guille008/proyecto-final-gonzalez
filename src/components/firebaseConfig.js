import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDW9qo7d1YopUquhSaUMBwWcL86QDhZqwc",
  authDomain: "ecommerce-gonzalez-a1a46.firebaseapp.com",
  projectId: "ecommerce-gonzalez-a1a46",
  storageBucket: "ecommerce-gonzalez-a1a46.firebasestorage.app",
  messagingSenderId: "135842864065",
  appId: "1:135842864065:web:574b0822694597a079ad40"
};




export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);