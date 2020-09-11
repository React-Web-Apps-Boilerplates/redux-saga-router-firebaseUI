const DOCUMENT = "SIGN_IN_";

const actions = {
    SIGN_IN: DOCUMENT + "SIGN_IN",
    SAVE_NEW_USER_SAGA: DOCUMENT + "SAVE_NEW_USER_SAGA",
    SAVE_NEW_USER: DOCUMENT + "SAVE_NEW_USER",

    signIn: (payload) => ({
        type: actions.SIGN_IN,
        payload,
    }),

    saveNewUser: (payload) => ({
        type: actions.SAVE_NEW_USER_SAGA,
        payload
    })
};

export default actions;
