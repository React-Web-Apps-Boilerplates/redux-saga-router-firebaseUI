
import { addFirebaseListeners } from "./listeners";
import firebase, { initializeApp, auth } from "firebase";
import { config as firebaseConfig } from "../../settings/firebase/config";


/* Execute Required functions */
// initializeFirebaseApp();
// addFirebaseListeners();


// Barrel exports
export * from "./initialize";
// export * from "./listeners";
export * from "./userFunctions";
export * from "./dbCalls";
