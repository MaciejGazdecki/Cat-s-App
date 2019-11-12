import React, {useState} from 'react';
import {Route} from 'react-router-dom'
import Welcome from '../Main Components/Welcome/welcome';
import DomesticCatHistory from '../Main Components/DomesticCatHistory/DomesticCatHistory';

function BaseSection() {
    return(
        <>
            <section className={'base-section'}>
                <div className={"wrapper baseSectionContainer"} >
                    <Route path="/" exact component={Welcome}/>
                    <Route path='/historia-kota-domowego' component={DomesticCatHistory}/>
                </div>
            </section>
        </>
    )
}

export default BaseSection;