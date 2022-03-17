import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  User,
  getAuth,
  onAuthStateChanged,
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
      // NOTE this is technically wrong because be are casing any string that
      // could come from the server as a CollectionName type
      // TODO
      // - either write a converter function and create an additional "empty" collection
      // - or retype routeName as string
      // - redirect then to a 404 page in case routeName contains a value that is not a collection name
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

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();

export const getCurrentUser = () =>
  new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
