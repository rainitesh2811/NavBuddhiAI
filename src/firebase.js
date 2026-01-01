import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9qElUaG3jH-8XQe27bft2SGcsKFydF5E",
  authDomain: "digitalskillsathi-a41a9.firebaseapp.com",
  projectId: "digitalskillsathi-a41a9",
  storageBucket: "digitalskillsathi-a41a9.firebasestorage.app",
  messagingSenderId: "14121116294",
  appId: "1:14121116294:web:be29984815947403496707",
  measurementId: "G-QDM6X2BN38"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

export default app;
