/* *** Configurations for firebaseui *** */

import firebase from "firebase";
import { signInSuccessWithAuthResult } from "../../utility/users";

export const uiConfig = {
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: "popup", // 'popup' or 'redirect'
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
    signInSuccessUrl: "/",
    callbacks: {
        signInSuccessWithAuthResult,
    },
    // Terms of service url.
    tosUrl: "<your-tos-url>",
    // Privacy policy url.
    privacyPolicyUrl: "<your-privacy-policy-url>",
};
