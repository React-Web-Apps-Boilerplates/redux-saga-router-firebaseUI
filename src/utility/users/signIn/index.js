import { history } from "../../../redux/store";
import { handleNewUser } from "../signUp";

/* Browser won't be refreshed if react router is used for redirect */
const redirectUsingReactRouter = () => {
    history.push("/");
};

/* Callback function for successful sign in
    - Return true to redirect automatically */
export const signInSuccessWithAuthResult = (authResult) => {
    console.log("Sign in Success!");
    handleNewUser(authResult);
    redirectUsingReactRouter();
    return false;
};
