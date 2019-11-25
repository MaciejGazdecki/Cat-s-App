import React, {useState, useEffect} from 'react';
import axios from "axios";

function PhotoSearch() {
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('');
    const [breeds, setBreeds] = useState([]);
    const [breedID, setBreedID] = useState('');

    useEffect(()=>{
        const fetchData = async () => {
            return await axios.get('/categories')
        };
        fetchData()
            .then(res => setCategories(res.data))
            .catch(err => console.log(err, 'Mamy błąd'))
    });

    useEffect(() => {
        const fetchData = async () => {
            return await axios.get('/breeds');
        };
        fetchData()
            .then(response => setBreeds(response.data))
            .catch(err => console.log(err, 'Mamy błąd'));

    },[]);
    return (
        <section className='photoSearchSection'>
            <div className='wrapper photoSearchWrapper'>
                <h2>PHOTO SEARCH</h2>
                <div className="form">
                    <div className='selectWrapper'>
                        <select
                            name="category"
                            id="category"
                            value={category}
                            onChange={(event => setCategory(event.target.value))}>
                            <option value={''}>none</option>
                            {categories.map(el => <option key={el.id} value={el.name}>{el.name}</option>)}
                        </select>
                        <select name="type" id="type" value={type}></select>
                        <select name="breeds"
                                id="breeds"
                                value={breedID}
                                onChange={event => setBreedID(event.target.value)}>
                            <option value={''}>none</option>
                            {breeds.map(breed => <option key={breed.id} value={breed.id}>{breed.name}</option>)}
                        </select>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default PhotoSearch;