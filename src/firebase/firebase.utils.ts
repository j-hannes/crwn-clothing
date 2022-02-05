import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  User,
} from "firebase/auth";
import {
  doc,
  getDoc,
  getFirestore,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUzGIyQ0-kFh0TF3CBUJCYGvcm3JWl_is",
  authDomain: "crwn-db-f5152.firebaseapp.com",
  projectId: "crwn-db-f5152",
  storageBucket: "crwn-db-f5152.appspot.com",
  messagingSenderId: "579890505529",
  appId: "1:579890505529:web:d831ceafc41f84e17beae8",
  measurementId: "G-F1RVRTQKZ5",
};

initializeApp(firebaseConfig);

export const db = getFirestore();

export const createUserProfileDocument = async (
  userAuth: User | null,
  additionalData?: { displayName: string }
) => {
  if (!userAuth) return;

  const userRef = doc(db, "users", userAuth.uid);
  const user = await getDoc(userRef);

  if (!user.exists()) {
    const { displayName, email } = userAuth;

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt: serverTimestamp(),
        ...additionalData,
      });
    } catch (error) {
      // TODO improve error handling?
      console.log("error creating user", error);
    }
  }

  return userRef;
};

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGoogle = () => signInWithPopup(auth, provider);
