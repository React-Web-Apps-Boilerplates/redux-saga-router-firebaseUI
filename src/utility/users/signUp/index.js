import { store } from "../../../redux/store";
import LoginActions from "../../../redux/login/actions";

const { saveNewUser } = LoginActions;

const shapeUserDoc = (user) => ({ id: user.uid });

export const handleNewUser = ({ additionalUserInfo, user }) => {
    // Helpers //
    const isNewUser = () => additionalUserInfo.isNewUser;
    // *** //

    if (isNewUser()) {
        let userDoc = shapeUserDoc(user);
        store.dispatch(saveNewUser(userDoc));
    }
};
