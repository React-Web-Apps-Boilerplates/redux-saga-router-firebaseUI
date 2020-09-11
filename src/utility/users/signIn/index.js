import { history , store} from "../../../redux/store";
import { handleNewUser } from "../signUp";
import signInActions from "../../../redux/signIn/actions";

const {signIn} = signInActions

/* Browser won't be refreshed if react router is used for redirect */
const redirectUsingReactRouter = () => {
    history.push("/");
};

/* Callback function for successful sign in
    - Return true to redirect automatically */
export const signInSuccessWithAuthResult = (authResult) => {
    handleNewUser(authResult);
    redirectUsingReactRouter();
    return false;
};

/* Save the user / required data of user on sign in */
export const onSignIn = (user) => {
    store.dispatch(signIn(user))
    console.log("Sign in Success!");
};
