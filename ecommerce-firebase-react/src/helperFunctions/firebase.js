import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "../Constants";

const initializeFirebase = () => {
  initializeApp(firebaseConfig);
};

const initializeFirestore = () => {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  return db;
};

export { initializeFirebase, initializeFirestore };
