import React from 'react';
import PropTypes from 'prop-types'

function Select (props) {
    const {breed,breeds,setBreed} = props;
    return (
        <>
            <div className={'select-box'}>
                <select name="breeds"
                        className={'select'}
                        value={breed}
                        onChange={(event) => setBreed(event.target.value)}>
                    {breeds.map(breed => <option key={breed.id} value={breed.id}>{breed.name}</option>)}
                </select>
            </div>
        </>
    )
}
export default Select;

//props validation
Select.propTypes = {
    breed: PropTypes.string.isRequired,
    breeds: PropTypes.array.isRequired,
    setBreed: PropTypes.func.isRequired
};