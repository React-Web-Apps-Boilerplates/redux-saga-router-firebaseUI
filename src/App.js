import React from "react";
import { Provider } from "react-redux";
import { store, history } from "./redux/store";
import DemoApp from "./containers/app";

function App() {
    return (
        <Provider store={store}>
                <DemoApp />
        </Provider>
    );
}

export default App;
