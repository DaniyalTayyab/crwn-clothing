import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZ3MypsL2v6O0Kgb3E7jyEWlT1qPpbs-g",
  authDomain: "crwn-clothing-db-6c67e.firebaseapp.com",
  projectId: "crwn-clothing-db-6c67e",
  storageBucket: "crwn-clothing-db-6c67e.appspot.com",
  messagingSenderId: "327477417267",
  appId: "1:327477417267:web:963c76c720d1d325c61a46",
  measurementId: "G-27783GP1XZ",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  // check if there is existing document reference (reference mean the actual instance of document model)
  const userDocRef = doc(db, "users", userAuth.uid); //1- database, 2- name of collection 3- name of document
  console.log(userDocRef);

  //get user data
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  // if doucment does not exists create the doucment at the provided userDocRef
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (err) {
      console.log("Error in creating user", err.message);
    }
  }
  // if it exists just return the reference anyways
  return userDocRef;
};