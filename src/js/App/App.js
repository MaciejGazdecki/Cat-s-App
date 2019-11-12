import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navigation from "../components/Navigation/navigation";
import BaseSection from "../components/BaseSection/baseSection";
import Cat from '../components/BaseSection/images/white-4557097_1920.jpg'

class  App extends Component {
    render() {
        const style = {
            backgroundImage: `url('${Cat}')`
        };
        return (
            <>
                <Router>
                    <div className={'background'} style={style}>
                    <Navigation/>
                    <BaseSection/>
                    <section className={'dupa'}>
                        <div>dupa</div>
                    </section>
                    </div>
                </Router>
            </>
        )
    }
}

export default App;