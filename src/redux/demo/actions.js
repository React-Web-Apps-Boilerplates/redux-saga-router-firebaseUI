const DOCUMENT = "DEMO_";

const actions = {
    INCREMENT_COUNTER: DOCUMENT + "INCREMENT_COUNTER",
    INCREMENT_COUNTER_REDUCER: DOCUMENT + "INCREMENT_COUNTER_REDUCER",

    incrementCounter: (payload) => ({
        type: actions.INCREMENT_COUNTER,
        payload,
    }),
};

export default actions;
