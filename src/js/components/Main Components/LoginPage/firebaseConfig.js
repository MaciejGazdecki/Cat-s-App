import firebase from "firebase";

export const config = {
    apiKey: 'AIzaSyB3lIjiRCGgT3KNdaRRXOmnTLQvRlYtPX8',
    authDomain: 'cats-app-d2f04.firebaseapp.com',
};

export const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
        signInSuccessWithAuthResult: () => false
    }
};