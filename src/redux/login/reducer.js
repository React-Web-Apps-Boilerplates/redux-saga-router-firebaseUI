import loginActions from "./actions";

const initState = {
    counter: 0,
};

export default function demoReducer(state = initState, action) {
    switch (action.type) {
        case loginActions.SAVE_NEW_USER_REDUCER:
            return {
                ...state,
                newUser: action.payload,
            };
        default:
            return state;
    }
}
