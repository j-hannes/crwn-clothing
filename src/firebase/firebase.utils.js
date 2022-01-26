import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyBUzGIyQ0-kFh0TF3CBUJCYGvcm3JWl_is",
  authDomain: "crwn-db-f5152.firebaseapp.com",
  projectId: "crwn-db-f5152",
  storageBucket: "crwn-db-f5152.appspot.com",
  messagingSenderId: "579890505529",
  appId: "1:579890505529:web:d831ceafc41f84e17beae8",
  measurementId: "G-F1RVRTQKZ5",
};

const firebaseApp = initializeApp(config);

export const auth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default firebaseApp;
