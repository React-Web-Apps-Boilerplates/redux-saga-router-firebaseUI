import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { connect } from "react-redux";
import App from "./containers/App/App";

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
const PublicRoutes = ({ history, isLoggedIn }) => {
    return (
        <ConnectedRouter history={history}>
            <div>
                {/* Normal Routes */}
                <Route
                    exact
                    path={"/login"}
                    component={import("./containers/App/App")}
                />
                <Route
                    exact
                    path={"/"}
                    component={App}
                />

                {/* Restricted Routes */}
                <RestrictedRoute
                    path="/restrictedRoute"
                    component={App}
                    isLoggedIn={isLoggedIn}
                />
            </div>
        </ConnectedRouter>
    );
};

export default connect((state) => ({
    isLoggedIn: state.Auth.idToken !== null,
}))(PublicRoutes);
