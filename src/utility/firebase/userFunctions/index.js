/* *** USER FUNCTIONS *** */

import { firebaseAuth } from "..";

export const signOut = () => firebaseAuth.signOut();

export const getCurrentUser = () => firebaseAuth.currentUser;
