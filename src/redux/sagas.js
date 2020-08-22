import { all } from "redux-saga/effects";

import DemoSaga from "./demo/saga"



export default function* rootSaga(getState) {
    yield all([
        DemoSaga(),
    ]);
}
