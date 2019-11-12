import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navigation from "../components/Navigation/navigation";
import BaseSection from "../components/BaseSection/baseSection";
import Cat from './images/white-4557097_1920.jpg'
import DomesticCatHistory from "../components/Main Components/DomesticCatHistory/DomesticCatHistory";
import VideoSection from '../components/Main Components/VideoSection/videoSection'
import Footer from '../components/Footer/footer'

class  App extends Component {
    render() {
        const style = {
            backgroundImage: `url('${Cat}')`
        };
        return (
            <>
                <Router>
                    <div className={'backgroundWrapper'} style={style}>
                        <Navigation/>
                        <BaseSection/>
                        <VideoSection/>
                        <DomesticCatHistory/>
                        <Footer/>
                    </div>
                </Router>
            </>
        )
    }
}

export default App;