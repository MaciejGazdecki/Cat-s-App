import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import {config} from "./firebaseConfig";
import {uiConfig} from "./firebaseConfig";

firebase.initializeApp(config);

function LoginPage(props) {
    const {appUser, setAppUser} = props;
    const [isLoggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged (
            (user) => {setLoggedIn(!!user);
            if (user.displayName !== null) setAppUser(user.displayName)}
        );
        return setAppUser(''); unregisterAuthObserver()
    });

    const userOnPage =
        <div className='userOnPage'>
            <p>{`YOU ARE CURRENTLY LOGGED AS ${appUser.toUpperCase()}`}</p>
            <button className='logOut' onClick={() => firebase.auth().signOut()}>LOG OUT</button>
        </div>;

    return (
        <section className='loginSection'>
            <div className='wrapper loginPage'>
                {isLoggedIn ? userOnPage : <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>}
            </div>
        </section>
    )

}

export default LoginPage;

LoginPage.propTypes = {
    appUser: PropTypes.string.isRequired,
    setAppUser: PropTypes.func.isRequired
};