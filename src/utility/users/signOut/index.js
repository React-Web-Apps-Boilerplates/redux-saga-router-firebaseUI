import { history, store } from "../../../redux/store";
import signInActions from "../../../redux/signIn/actions";

const { signOut } = signInActions;

const clearUserFromStore = () => store.dispatch(signOut());

const redirectToLogin = () => history.push("/login");

export const onSignOut = () => {
    debugger
    clearUserFromStore();
    redirectToLogin();
    console.log("Sign out success");
};
