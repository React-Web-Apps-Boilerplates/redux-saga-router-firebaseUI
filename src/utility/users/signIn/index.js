import { store, history } from "../../../redux/store";
import { handleNewUser } from "../signUp";

/* Browser won't be refreshed if react router is used for redirect */
const redirectUsingReactRouter = (redirectUrl) => {
    debugger
    history.push(redirectUrl);
};

/* Callback function for successful sign in
    - Return true to redirect automatically */
export const signInSuccessWithAuthResult = (authResult, redirectUrl) => {
    console.log("Sign in Success!");
    handleNewUser(authResult);
    redirectUsingReactRouter(redirectUrl);
    return false;
};
