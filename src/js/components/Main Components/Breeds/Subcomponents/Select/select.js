import React from 'react';
import PropTypes from 'prop-types'

function Select (props) {
    const {breedID,breeds,setBreedID} = props;
    return (
        <>
            <div className={'select-box'}>
                <select name="breeds"
                        className={'select'}
                        value={breedID}
                        onChange={(event) => setBreedID(event.target.value)}>
                    {breeds.map(breed => <option key={breed.id} value={breed.id}>{breed.name}</option>)}
                </select>
            </div>
        </>
    )
}
export default Select;

//props validation
Select.propTypes = {
    breedID: PropTypes.string.isRequired,
    breeds: PropTypes.array.isRequired,
    setBreedID: PropTypes.func.isRequired
};