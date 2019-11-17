import React, {useState} from 'react';
import PropTypes from 'prop-types'
import FSLightBox from "fslightbox-react";
import Charts from "../Charts/charts";

function DetailedInformation (props) {
    const {selectedBreed} = props;
    const [toggler, setToggler] = useState(false);
    console.log(selectedBreed);
    return  selectedBreed ? (
        <>
            <div className={'detailed-information'}>
                Detailed data. Each characteristic can have from 1 to 5 points:
                <p>adaptability: {selectedBreed.adaptability}</p>
                <p>Affection level: {selectedBreed.affection_level}</p>
                <p>Child friendly: {selectedBreed.child_friendly}</p>
                <p>Dog friendly: {selectedBreed.dog_friendly}</p>
                <p>Energy level: {selectedBreed.energy_level}</p>
                <p>Grooming: {selectedBreed.grooming}</p>
                <p>Health issues: {selectedBreed.health_issues}</p>
                <p>Intelligence: {selectedBreed.intelligence}</p>
                <p>Shedding level: {selectedBreed.shedding_level}</p>
                <p>Social needs: {selectedBreed.social_needs}</p>
                <p>Stranger friendly: {selectedBreed.stranger_friendly}</p>
                <p>Vocalisation: {selectedBreed.vocalisation}</p>
                <button onClick={() => setToggler(!toggler)}>Display charts</button>
            </div>
            <FSLightBox
                toggler={toggler}
                customSources={[<div key={'0'}><Charts selectedBreed={selectedBreed}/></div>]}
            />
        </>
    ) : null;
}

export default DetailedInformation;

DetailedInformation.propTypes = {
    selectedBreed: PropTypes.object.isRequired
};