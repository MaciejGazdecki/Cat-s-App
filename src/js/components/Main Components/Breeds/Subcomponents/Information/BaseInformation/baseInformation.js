import React from 'react';
import PropTypes from 'prop-types'

function BaseInformation(props) {
    const {selectedBreed} = props;
    console.log(selectedBreed);
    return (
        <div className={'base-information'}>
            <div className={'name'}>
                <h2>Rasa: {selectedBreed.name}</h2>
            </div>
            <div className={'origin'}>
                <span>Pochodzenie: </span>
                <span>{selectedBreed.origin}</span>
                <span>
                    <img src={`https://www.countryflags.io/${selectedBreed.country_code}/shiny/64.png`} alt="flaga"/>
                </span>
            </div>
        </div>
    )
}

export default BaseInformation;

BaseInformation.propTypes = {
    selectedBreed: PropTypes.object.isRequired
};