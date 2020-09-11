import { all } from "redux-saga/effects";

import DemoSaga from "./demo/saga"
import login from "./login/saga"



export default function* rootSaga(getState) {
    yield all([
        DemoSaga(),
        login(),
    ]);
}
