import { initializeApp, auth, firestore } from "firebase";
import firebaseConfig from "../../../settings/firebase/firebaseConfig.json";

/* Initialize default App. 
    - Now importing "firebase" in other files will be this initialized default App.
    - Can initialize multiple Apps also. For that, initialize and store it to a constant.
        This constant can be used to access the specific app.*/
initializeApp(firebaseConfig)

/* Functions immediately dependent on initialization */
export const firebaseAuth = auth();
// export const database = firestore();