import React from 'react';
import PropTypes from 'prop-types'


function DetailedInformation (props) {
    const {selectedBreed} = props;
    console.log(selectedBreed);
    return (
        <div className={'detailed-information'}>

        </div>
    )
}

export default DetailedInformation;

DetailedInformation.propTypes = {
    selectedBreed: PropTypes.object.isRequired
};