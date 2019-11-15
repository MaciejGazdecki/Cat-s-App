import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Navigation from "../components/pageLayout/Navigation/navigation";
import Cat from './images/white-4557097_1920.jpg'
import Footer from '../components/pageLayout/Footer/footer';
import HomePage from '../components/pageLayout/HomePage/homePage';
import Curiosities from'../components/Main Components/Curosities about Cats/curiositesAboutCats';
import Breeds from '../components/Main Components/Breeds/breeds';
import PhotoSearch from '../components/Main Components/PhotoSearch/photoSearch';
import Favourites from '../components/Main Components/Favourites/favourites';
import LoginPage from '../components/Main Components/LoginPage/loginPage';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['Authorization'] = '687fe573-b392-44ea-b985-63c162d0f64c';

function  App () {
    const style = {
        backgroundImage: `url('${Cat}')`
    };
    return (
            <Router>
                <div className={'backgroundWrapper'} style={style}>
                    <Navigation/>
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/ciekawostki-o-kotach" component={Curiosities}/>
                    <Route path="/rasy-kotow-domowych" component={Breeds}/>
                    <Route path="/wyszukiwarka-zdjec" component={PhotoSearch}/>
                    <Route path='/ulubione-zdjecia' component={Favourites}/>
                    <Route path='/logowanie' component={LoginPage}/>
                    <Footer/>
                </div>
            </Router>
    )
}

export default App;