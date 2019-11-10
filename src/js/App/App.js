import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navigation from "../components/Header/Navigation/navigation";
import Carousel from "../components/Header/Carousel/carousel";

class  App extends Component {
    render() {
        return (
            <>
                <Router>
                    <Navigation/>
                    <Carousel/>
                </Router>
            </>
        )
    }
}

export default App;