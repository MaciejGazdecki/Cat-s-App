import React, {useState} from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Navigation from "../components/Main Components/Navigation/navigation";
import Footer from '../components/pageLayout/Footer/footer';
import HomePage from '../components/pageLayout/HomePage/homePage';
import AdoptACat from '../components/Main Components/Adoption/adoptACat';
import Breeds from '../components/Main Components/Breeds/breeds';
import PhotoSearch from '../components/Main Components/PhotoSearch/photoSearch';
import Favorites from '../components/Main Components/Favorites/favorites';
import LoginPage from '../components/Main Components/LoginPage/loginPage';
import {AppUserContext} from "./appUserContext";
import axios from 'axios';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['Authorization'] = '687fe573-b392-44ea-b985-63c162d0f64c';

function  App () {

    const [appUser, setAppUser] = useState('');

    return (
            <Router>
                <Navigation appUser={appUser}/>
                <Route path="/" exact component={HomePage}/>
                <Route path="/adopt-a-Cat" component={AdoptACat}/>
                <Route path="/breeds" component={Breeds}/>
                <AppUserContext.Provider value={appUser}>
                    <Route path="/search-photo">
                        <PhotoSearch/>
                    </Route>
                </AppUserContext.Provider>
                <Route path='/favorites'>
                    <Favorites appUser={appUser}/>
                </Route>
                <Route path='/login'>
                    <LoginPage appUser={appUser} setAppUser={setAppUser}/>
                </Route>
                <Footer/>
            </Router>
    )
}

export default App;