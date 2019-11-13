import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navigation from "../components/pageLayout/Navigation/navigation";
import Cat from './images/white-4557097_1920.jpg'
import Footer from '../components/pageLayout/Footer/footer';
import HomePage from '../components/pageLayout/HomePage/homePage';
import Curiosities from'../components/Main Components/Curosities about Cats/curiositesAboutCats';
import Breeds from '../components/Main Components/Breeds/breeds';
import PhotoSearch from '../components/Main Components/PhotoSearch/photoSearch';
import Favourites from '../components/Main Components/Favourites/favourites';
import LoginPage from '../components/Main Components/LoginPage/loginPage'

function  App () {
    const style = {
        backgroundImage: `url('${Cat}')`
    };
    const regex = /\?/;
    return (
            <Router>
                <Switch>
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
                </Switch>
            </Router>
    )
}

export default App;