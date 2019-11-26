import React, {useState} from 'react';
import PropTypes from 'prop-types'
import FSLightBox from "fslightbox-react";
import Charts from "../Charts/charts";

/**
 * @return {null}
 */
function DetailedInformation (props) {
    const {selectedBreed} = props;
    const [toggler, setToggler] = useState(false);

    const addStorageHandler = () => {
        let breedsArray = [];
        if(localStorage.getItem('breeds') !== null) {
            breedsArray = JSON.parse(localStorage.getItem('breeds'));
            if (breedsArray.length < 2) {
                breedsArray.push(selectedBreed);
                localStorage.setItem('breeds',JSON.stringify(breedsArray))
            } else {
                alert('You can add only two breeds to charts, please remove one or clear all!!')
            }

        } else {
            breedsArray.push(selectedBreed);
            localStorage.setItem('breeds', JSON.stringify(breedsArray))
        }
    };
    const removeStorageHandler = () => {
        if(localStorage.getItem('breeds') !== null) {
            let breedsArray = JSON.parse(localStorage.getItem('breeds'));
             let newArray = breedsArray.filter(el => el.id !== selectedBreed.id);
            localStorage.setItem('breeds', JSON.stringify(newArray))
        }
    };
    const clearStorage = () => {
        localStorage.removeItem('breeds')
    };

    return  selectedBreed ? (
        <>
            <div className={'detailed-information'}>
                <h2>Detailed data. Max 5 points:</h2>
                <p><span className="bold">Adaptability: </span>{selectedBreed.adaptability}</p>
                <p><span className="bold">Affection level: </span>{selectedBreed.affection_level}</p>
                <p><span className="bold">Child friendly: </span>{selectedBreed.child_friendly}</p>
                <p><span className="bold">Dog friendly: </span>{selectedBreed.dog_friendly}</p>
                <p><span className="bold">Energy level: </span>{selectedBreed.energy_level}</p>
                <p><span className="bold">Grooming: </span>{selectedBreed.grooming}</p>
                <p><span className="bold">Health issues: </span>{selectedBreed.health_issues}</p>
                <p><span className="bold">Intelligence: </span>{selectedBreed.intelligence}</p>
                <p><span className="bold">Shedding level: </span>{selectedBreed.shedding_level}</p>
                <p><span className="bold">Social needs: </span>{selectedBreed.social_needs}</p>
                <p><span className='bold'>Stranger friendly: </span>{selectedBreed.stranger_friendly}</p>
                <p><span className="bold">Vocalisation: </span>{selectedBreed.vocalisation}</p>
                <div className="buttons">
                    <button className="charts-btn" onClick={addStorageHandler}>Add to charts</button>
                    <button className="charts-btn" onClick={removeStorageHandler}>Remove from charts</button>
                    <button className='charts-btn' onClick={clearStorage}>Clear all charts</button>
                    <button className="charts-btn" onClick={() => setToggler(oldToggler => !oldToggler)}>Display charts</button>
                </div>
            </div>
            <FSLightBox
                toggler={toggler}
                customSources={[<div key={0}><Charts /></div>]}
            />
        </>
    ) : null;
}

export default DetailedInformation;

DetailedInformation.propTypes = {
    selectedBreed: PropTypes.object.isRequired
};