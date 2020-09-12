/* *** Configurations for firebaseui *** */

import { signInSuccessWithAuthResult } from "../../utility/users";
import { auth } from "firebase";

export const uiConfig = {
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: "popup", // 'popup' or 'redirect'
    signInOptions: [
        auth.GoogleAuthProvider.PROVIDER_ID,
        auth.FacebookAuthProvider.PROVIDER_ID,
        auth.TwitterAuthProvider.PROVIDER_ID,
        auth.GithubAuthProvider.PROVIDER_ID,
        { provider: auth.EmailAuthProvider.PROVIDER_ID,
            // fullLabel: ""
        },
        {
            provider: auth.PhoneAuthProvider.PROVIDER_ID,
            recaptchaParameters: {
                type: "image", // 'image or audio'
                size: "invisible", // 'normal or invisible' or 'compact'
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
