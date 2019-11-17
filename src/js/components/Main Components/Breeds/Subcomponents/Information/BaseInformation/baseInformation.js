import React from 'react';
import PropTypes from 'prop-types'

function BaseInformation(props) {
    const {selectedBreed} = props;
    return selectedBreed ? (
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
            <div className={'description'}>
                Opis: {selectedBreed.description}
            </div>
            <div className={'temperament'}>
                Temperament: {selectedBreed.temperament}
            </div>
            <div className={'life-span'}>
                Średnia długość życia: {selectedBreed.life_span} lat
            </div>
            <div className={'weight'}>
                <p>Waga (kg): {selectedBreed.weight.metric}</p>
                <p>Waga (lb): {selectedBreed.weight.imperial} </p>
            </div>
            <div className={'more info'}>
                Więcej informacji:
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