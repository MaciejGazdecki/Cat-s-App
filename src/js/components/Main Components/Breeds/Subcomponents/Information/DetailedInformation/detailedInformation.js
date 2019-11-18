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

    console.log('rerendering');

    return  selectedBreed ? (
        <>
            <div className={'detailed-information'}>
                <h2>Detailed data. Max 5 points:</h2>
                <p><span className={'bold'}>Adaptability: </span>{selectedBreed.adaptability}</p>
                <p><span className={'bold'}>Affection level: </span>{selectedBreed.affection_level}</p>
                <p><span className={'bold'}>Child friendly: </span>{selectedBreed.child_friendly}</p>
                <p><span className={'bold'}>Dog friendly: </span>{selectedBreed.dog_friendly}</p>
                <p><span className={'bold'}>Energy level: </span>{selectedBreed.energy_level}</p>
                <p><span className={'bold'}>Grooming: </span>{selectedBreed.grooming}</p>
                <p><span className={'bold'}>Health issues: </span>{selectedBreed.health_issues}</p>
                <p><span className={'bold'}>Intelligence: </span>{selectedBreed.intelligence}</p>
                <p><span className={'bold'}>Shedding level: </span>{selectedBreed.shedding_level}</p>
                <p><span className={'bold'}>Social needs: </span>{selectedBreed.social_needs}</p>
                <p><span className={'bold'}>Stranger friendly: </span>{selectedBreed.stranger_friendly}</p>
                <p><span className={'bold'}>Vocalisation: </span>{selectedBreed.vocalisation}</p>
                <button onClick={() => {setToggler(!toggler)}}>Display charts</button>
            </div>
            <FSLightBox
                toggler={toggler}
                customSources={[<div><Charts selectedBreed={selectedBreed}/></div>]}
                key={[<div><Charts selectedBreed={selectedBreed}/></div>]}
                disableLocalStorage={ true }
            />
        </>
    ) : null;
}

export default DetailedInformation;

DetailedInformation.propTypes = {
    selectedBreed: PropTypes.object.isRequired
};