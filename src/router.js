import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { connect } from "react-redux";
import SpinCounter from "./containers/SpinCounter";
import App from "./containers/App";
import LoginScreen from "./containers/Login";
import { getCurrentUser } from "./utility/firebase/userFunctions";

const getLoggedInStatus = () => {
    console.log("CU", getCurrentUser());
    return !!getCurrentUser();
};

/* Restricted Route (Forward to login Page) 
    - Uses the prop value: "isLoggedIn" to check
*/
const RestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            isLoggedIn ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: props.location },
                    }}
                />
            )
        }
    />
);

const PublicRoutes = ({ history }) => {
    return (
        <ConnectedRouter history={history}>
            <div>
                {/* Normal Routes */}
                <Route exact path={"/login"} component={LoginScreen} />
                <Route exact path={"/"} component={App} />

                {/* Restricted Routes */}
                <RestrictedRoute
                    path="/restrictedRoute"
                    // component={() => import("./containers/SpinCounter")}
                    component={SpinCounter}
                    isLoggedIn={getLoggedInStatus}
                />
            </div>
        </ConnectedRouter>
    );
};

export default connect((state) => ({}))(PublicRoutes);
