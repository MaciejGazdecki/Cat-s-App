import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navigation from "../components/Navigation/navigation";
import BaseSection from "../components/BaseSection/baseSection";

class  App extends Component {
    render() {
        return (
            <>
                <Router>
                    <Navigation/>
                    <BaseSection/>
                    <section className={'dupa'}>
                        <div>dupa</div>
                    </section>
                </Router>
            </>
        )
    }
}

export default App;