import React from 'react';
import PropTypes from 'prop-types'

/**
 * @return {null}
 */
function BaseInformation(props) {
    const {selectedBreed} = props;
    return selectedBreed ? (
        <div className={'base-information'}>
            <div className={'name'}>
                <h2>Breed: {selectedBreed.name}</h2>
            </div>
            <div className={'origin'}>
                <p><span className={'bold'}>Country of origin:</span> </p>
                <p>{selectedBreed.origin}</p>
                <p>
                    <img src={`https://www.countryflags.io/${selectedBreed.country_code !== 'SP' ? 
                        selectedBreed.country_code : 'SG'}/shiny/64.png`} alt="flaga"/>
                </p>
            </div>
            <div className={'description'}>
                <p><span className={'bold'}>Description: </span>{selectedBreed.description}</p>
            </div>
            <div className={'temperament'}>
                <p><span className={'bold'}>Temperament: </span>{selectedBreed.temperament}</p>
            </div>
            <div className={'life-span'}>
                <p><span className={'bold'}>Average life span: </span>{selectedBreed.life_span} years</p>
            </div>
            <div className={'weight'}>
                <p><span className={'bold'}>Weight (kg): </span>{selectedBreed.weight.metric}</p>
                <p><span className={'bold'}>Weight (lb): </span>{selectedBreed.weight.imperial} </p>
            </div>
            <div className={'more info'}>
                <p><span className={'bold'}>More info: </span></p>
                <p><a href={selectedBreed.wikipedia_url} target={'_blank'}>{selectedBreed.wikipedia_url}</a></p>
                <p><a href={selectedBreed.vcahospitals_url} target={'_blank'}>{selectedBreed.vcahospitals_url}</a></p>
                <p><a href={selectedBreed.vetstreet_url} target={'_blank'}>{selectedBreed.vetstreet_url}</a></p>
            </div>
        </div>
    ) : null;
}

export default BaseInformation;

BaseInformation.propTypes = {
    selectedBreed: PropTypes.object.isRequired,
};