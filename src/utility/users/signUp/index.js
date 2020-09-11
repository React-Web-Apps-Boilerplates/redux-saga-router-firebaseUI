import { store } from "../../../redux/store";
import LoginActions from "../../../redux/login/actions";

const { saveNewUser } = LoginActions;

const shapeUserData = (user) => ({ id: user.uid });

export const handleNewUser = ({ additionalUserInfo, user }) => {
    // Helpers //
    const isNewUser = () => additionalUserInfo.isNewUser;
    // *** //

    if (isNewUser()) {
        let userData = shapeUserData(user);
        store.dispatch(saveNewUser({userData}));
    }
};
