import firebase from "firebase";
import { config as firebaseConfig } from "../../settings/firebase/config";
import { addFirebaseListeners } from "./listeners";


/* Initialize default App. 
    - Now importing "firebase" in other files will be this initialized default App.
    - Can initialize multiple Apps also. For that, initialize and store it to a constant.
        This constant can be used to access the specific app.*/
firebase.initializeApp(firebaseConfig);

/* Export Auth first, since other functions use auth constant */
export const firebaseAuth = firebase.auth();

/* Execute Required functions */
addFirebaseListeners();

// Barrel exports
export * from "./listeners";
export * from "./userFunctions"