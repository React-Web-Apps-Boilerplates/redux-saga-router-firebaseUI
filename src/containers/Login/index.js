import React, { Component } from "react";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { firebaseAuth, getCurrentUser, signOut } from "../../utility/firebase";
import {uiConfig} from "../../settings/firebase/uiConfig"

class App extends Component {
    state = { isSignedIn: false };

    componentDidMount = () => {
        firebaseAuth.onAuthStateChanged((user) => {
            this.setState({ isSignedIn: !!user });
            console.log("user", user, getCurrentUser());
        });
    };

    render() {
        return (
            <div>
                {this.state.isSignedIn ? (
                    <span>
                        <div>Signed In!</div>
                        <button onClick={() => signOut()}>
                            Sign out!
                        </button>
                        <h1>
                            Welcome {getCurrentUser().displayName}
                        </h1>
                        <img
                            alt="profile pic"
                            src={getCurrentUser().photoURL}
                        />
                    </span>
                ) : (
                    <StyledFirebaseAuth
                        uiConfig={uiConfig}
                        firebaseAuth={firebaseAuth}
                    />
                )}
            </div>
        );
    }
}

export default App;
