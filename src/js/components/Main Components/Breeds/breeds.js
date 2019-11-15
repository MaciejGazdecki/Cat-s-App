import React from 'react';
import logo from './images/cat icon.png';

function Breeds() {
    return (
        <div className={'wrapper'}>
            <div className={'breedsWrapper'}>
                <div className={'logo-section'}>
                    <img src={logo} alt=""/>
                    <h2>Wybierz rasę kota</h2>
                </div>

            </div>
        </div>
)
}

export default Breeds;