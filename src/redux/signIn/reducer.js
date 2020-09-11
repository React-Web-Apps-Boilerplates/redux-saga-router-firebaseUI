import signInActions from "./actions";

const initState = {
    counter: 0,
};

export default function demoReducer(state = initState, action) {
    switch (action.type) {
        case signInActions.SAVE_NEW_USER:
            return {
                ...state,
                newUser: action.payload,
            };

        case signInActions.SIGN_IN:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}
