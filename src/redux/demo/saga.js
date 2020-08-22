import { all, takeEvery, takeLatest, put, call } from "redux-saga/effects";

import actions from "./actions";

/////////////// USE SAGA FOR API CALLS ONLY /////////////

function* incrementCounter(params) {
    try {
        let { payload } = params;

        // Perform API Call -> Put data to reducer

        yield put({
            type: actions.INCREMENT_COUNTER_REDUCER,
            payload: {
                success: true,
                ...payload,
            },
        });
    } catch (error) {
        console.log(error);

        yield put({
            type: actions.INCREMENT_COUNTER_REDUCER,
            payload: {
                success: false,
            },
        });
    }
}

export default function* rootSaga() {
    yield all([takeLatest(actions.INCREMENT_COUNTER, incrementCounter)]);
}
