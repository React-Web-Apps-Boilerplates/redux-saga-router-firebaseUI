import { store } from "../../../redux/store";
import { handleNewUser } from "../signUp";
import signInActions from "../../../redux/signIn/actions";

const { signIn } = signInActions;

/* To ensure that sensitive data (API KEY) is not saved in browser */
const shapeLocalUserObj = (user) => ({
    uid: user.uid,
    displayName: user.displayName,
    photoURL: user.photoURL,
    email: user.email,
    emailVerified: user.emailVerified,
    phoneNumber: user.photoURL,
    lastLoginAt: user.metadata.b,
    createdAt: user.metadata.a,
});

/* Callback function for successful sign in
    - Return true to redirect automatically */
export const signInSuccessWithAuthResult = (authResult) => {
    handleNewUser(authResult);
    return false;
};

/* Save the user / required data of user on sign in */
export const onSignIn = (user) => {
    let localUserObj = shapeLocalUserObj(user);
    store.dispatch(signIn(localUserObj));
    console.log("Sign in Success!", user, localUserObj);
};
