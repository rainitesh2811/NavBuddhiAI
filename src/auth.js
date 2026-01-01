import {
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { auth, googleProvider, db } from "./firebase";
import { doc, updateDoc, getDoc, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

export const loginWithEmail = async (email, password) => {
  const res = await signInWithEmailAndPassword(auth, email, password);

  const sessionId = uuidv4();

  await updateDoc(doc(db, "users", res.user.uid), {
    activeSession: sessionId,
  });

  localStorage.setItem("sessionId", sessionId);

  return res.user;
};
export const loginWithGoogle = async () => {
  const res = await signInWithPopup(auth, googleProvider);

  const userRef = doc(db, "users", res.user.uid);
  const snap = await getDoc(userRef);

  if (!snap.exists()) {
    await setDoc(userRef, {
      uid: res.user.uid,
      email: res.user.email,
      name: res.user.displayName || "",
      coursesOwned: [],
      activeSession: null,
      createdAt: new Date(),
    });
  }

  return res.user;
};
export const createUserWithEmail = async (fullName, email, password) => {
  const res = await createUserWithEmailAndPassword(auth, email, password);

  const sessionId = uuidv4();

  await setDoc(doc(db, "users", res.user.uid), {
    uid: res.user.uid,
    email: email,
    name: fullName,
    coursesOwned: [],
    activeSession: sessionId,
    createdAt: new Date(),
  });

  localStorage.setItem("sessionId", sessionId);

  return res.user;
};
export const logoutUser = async () => {
  const uid = auth.currentUser?.uid;
  const sessionId = localStorage.getItem("sessionId");

  if (uid && sessionId) {
    await updateDoc(doc(db, "users", uid), {
      activeSession: null,
    });
  }

  localStorage.removeItem("sessionId");

  await signOut(auth);
};
