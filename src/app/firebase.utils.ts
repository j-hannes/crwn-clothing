import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  User,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import {
  DocumentData,
  QuerySnapshot,
  collection,
  doc,
  getDoc,
  getFirestore,
  serverTimestamp,
  setDoc,
  writeBatch,
} from "firebase/firestore";

import { Collection, CollectionName } from ":features/directory/types";

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

export const addCollectionAndItems = async (
  collectionKey: string,
  objectsToAdd: any[]
) => {
  const collectionRef = collection(db, collectionKey);

  const batch = writeBatch(db);
  objectsToAdd.forEach((obj) => {
    const newDocRef = doc(collectionRef);
    batch.set(newDocRef, obj);
  });

  return batch.commit();
};

export const convertCollectionsSnapshotToMap = (
  collections: QuerySnapshot<DocumentData>
) => {
  const transformedCollections = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()) as CollectionName,
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollections.reduce((acc, collection) => {
    acc[collection.routeName] = collection;
    return acc;
  }, {} as Record<CollectionName, Collection>);
};

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGoogle = () => signInWithPopup(auth, provider);
