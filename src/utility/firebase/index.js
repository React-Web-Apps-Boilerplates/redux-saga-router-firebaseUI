
import firebase from "firebase";
import {config as firebaseConfig} from "../../settings/firebase/config";

/* Initialize default App. Can initialize multiple Apps */
firebase.initializeApp(firebaseConfig);

export const firebaseAuth = firebase.auth();

export const getCurrentUser = () => firebaseAuth.currentUser;

export const signOut = () => firebaseAuth.signOut();