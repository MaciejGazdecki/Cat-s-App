import React from 'react';
import Cat from './images/white-4557097_1920.jpg';
import {Route} from 'react-router-dom'
import Welcome from '../Main Components/Welcome/welcome';
import DomesticCatHistory from '../Main Components/DomesticCatHistory/DomesticCatHistory'

function BaseSection() {
    const style = {
      backgroundImage: `url('${Cat}')`
    };
    return(
        <>
            <section className={'base-section'} style={style}>
                <div className={"wrapper container"} >
                    <Route path="/" exact component={Welcome}/>
                    <Route path='/historia-kota-domowego' component={DomesticCatHistory}/>
                </div>
            </section>
        </>
    )
}

export default BaseSection;