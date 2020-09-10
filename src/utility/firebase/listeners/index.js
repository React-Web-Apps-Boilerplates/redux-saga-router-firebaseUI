/* **** LISTENERS **** */

import { firebaseAuth } from "..";

export const addFirebaseListeners = () => {
    /* onAuthStateChanged listener is triggered on :
        - Right after the listener has been registered
        - When a user signs in
        - When the current user signs out
        - When the current user changes
        - When there is a change in the current user's token
    */
    firebaseAuth.onAuthStateChanged((user) => {
        console.log("Auth state changed. User:", user);
    });
};
