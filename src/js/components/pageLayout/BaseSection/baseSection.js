import React from 'react';
import {Route} from 'react-router-dom'
import Welcome from '../../Main Components/Welcome/welcome';

function BaseSection() {
    return(

            <section className='base-section backgroundWrapper'>
                <div className="blackLayer">
                    <div className="wrapper baseSectionContainer " >
                        <Route path="/" exact component={Welcome}/>
                    </div>
                </div>
            </section>
    )
}

export default BaseSection;