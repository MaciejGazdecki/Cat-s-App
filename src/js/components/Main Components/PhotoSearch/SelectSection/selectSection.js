import React, {useState, useEffect} from 'react';

function SelectSection(props) {
    const {
        category,
        setCategory,
        categories,
        type,
        setType,
        breedID,
        setBreedID,
        breeds
    } = props;
    return (
        <div className='selectWrapper'>
            <select
                name="category"
                id="category"
                value={category}
                onChange={(event => setCategory(event.target.value))}>
                <option value={''}>all</option>
                {categories.map(el => <option key={el.id} value={el.id}>{el.name}</option>)}
            </select>
            <select name="type" id="type" value={type} onChange={event => setType(event.target.value)}>
                <option value="gif,jpg,png">any</option>
                <option value="jpg,png">static</option>
                <option value="gif">animated</option>
            </select>
            <select name="breeds"
                    id="breeds"
                    value={breedID}
                    onChange={event => setBreedID(event.target.value)}>
                <option value={''}>none</option>
                {breeds.map(breed => <option key={breed.id} value={breed.id}>{breed.name}</option>)}
            </select>
        </div>
    )
}

export default SelectSection;