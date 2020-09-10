import React, { Component } from "react";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

firebase.initializeApp({
    apiKey: "AIzaSyDLoqcbTDMFuurtAyDgVEKZ6qwo0j0Osjk",
    authDomain: "fir-auth-tutorial-ed11f.firebaseapp.com",
});

class App extends Component {
    state = { isSignedIn: false };
    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.TwitterAuthProvider.PROVIDER_ID,
            firebase.auth.GithubAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
            {
                provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
                recaptchaParameters: {
                    type: "image", // 'image or audio'
                    size: "normal", // 'normal or invisible' or 'compact'
                    badge: "bottomleft", // 'bottomLeft' or 'bottomright' or 'inline' applies to invisible.
                },
                defaultCountry: "IN",
            },
        ],
        callbacks: {
            signInSuccess: () => false,
        },
    };

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged((user) => {
            this.setState({ isSignedIn: !!user });
            console.log("user", user, firebase.auth().currentUser);
        });
    };

    render() {
        return (
            <div>
                {this.state.isSignedIn ? (
                    <span>
                        <div>Signed In!</div>
                        <button onClick={() => firebase.auth().signOut()}>
                            Sign out!
                        </button>
                        <h1>
                            Welcome {firebase.auth().currentUser.displayName}
                        </h1>
                        <img
                            alt="profile pic"
                            src={firebase.auth().currentUser.photoURL}
                        />
                    </span>
                ) : (
                    <StyledFirebaseAuth
                        uiConfig={this.uiConfig}
                        firebaseAuth={firebase.auth()}
                    />
                )}
            </div>
        );
    }
}

export default App;
