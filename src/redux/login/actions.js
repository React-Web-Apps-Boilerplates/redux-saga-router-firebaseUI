const DOCUMENT = "LOGIN_";

const actions = {
    LOGIN: DOCUMENT + "INCREMENT_COUNTER",
    LOGIN_REDUCER: DOCUMENT + "INCREMENT_COUNTER_REDUCER",
    SAVE_NEW_USER: DOCUMENT + "SAVE_NEW_USER",
    SAVE_NEW_USER_REDUCER: DOCUMENT + "SAVE_NEW_USER_REDUCER",

    login: (payload) => ({
        type: actions.LOGIN,
        payload,
    }),

    saveNewUser: (payload) => ({
        type: actions.SAVE_NEW_USER,
        payload
    })
};

export default actions;
