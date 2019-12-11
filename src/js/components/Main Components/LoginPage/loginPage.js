import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import {config} from "./firebaseConfig";
import {uiConfig} from "./firebaseConfig";

firebase.initializeApp(config);
//probowalem to dac w App i nie pomaga
function LoginPage(props) {
    const {appUser, setAppUser} = props;
    const [isLoggedIn, setLoggedIn] = useState(false); //to tez wywalalem do App i poniższy useEffect
    //a wartosci pchalem kontextem lub propsami do login, lacznie z funkcjami, poprostu do value kontekstu obiekt, z
    //isLoggedIn i setLoggedIn,to nastepuje zawieszenie przegladarki i aplikacji..

    useEffect(() => {
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged (
            (user) => {setLoggedIn(!!user);
            if (user.displayName !== null) setAppUser(user.displayName)}
        );
        return setAppUser(''); unregisterAuthObserver() //tu muszę zwrócic te funkcje bo inaczej mam memory leak, trzeba
        //wyczyscic po odmontowaniu
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
    //jestem na etapie rozkminy tego artykulu, narazie jest tak jak w dokumentacji
}

export default LoginPage;

LoginPage.propTypes = {
    appUser: PropTypes.string.isRequired,
    setAppUser: PropTypes.func.isRequired
};

//jak probowałem uzyć kontekstu albo nawet useMemo.. to zawiesza mi aplikacje i blokuje przegladarke i musze hardreset
//chrome z wiersza polecen robic, tylko propsy dzialaja