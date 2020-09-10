import React, { Component } from "react";
import { signOut, getCurrentUser } from "../../utility/firebase";

class App extends Component {
    render() {
        return (
            <div>
                <span>
                    <div>Signed In!</div>
                    <button onClick={() => signOut()}>Sign out!</button>
                    <h1>Welcome {getCurrentUser().displayName}</h1>
                    <img alt="profile pic" src={getCurrentUser().photoURL} />
                </span>
            </div>
        );
    }
}

export default App;
