import React, {useState, useEffect} from 'react';
import axios from "axios";
import Gallery from "./Gallery/gallery";

function PhotoSearch() {
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('gif,jpg,png');
    const [breeds, setBreeds] = useState([]);
    const [breedID, setBreedID] = useState('');
    console.log(breedID);

    useEffect(()=>{
        const fetchData = async () => {
            return await axios.get('/categories')
        };
        fetchData()
            .then(res => setCategories(res.data))
            .catch(err => console.log(err, 'Mamy błąd'))

    },[]);

    useEffect(() => {
        const fetchData1 = async () => {
            return await axios.get('/breeds');
        };
        fetchData1()
            .then(response => setBreeds(response.data))
            .catch(err => console.log(err, 'Mamy błąd'));

    },[]);
    return (
        <section className='photoSearchSection'>
            <div className='wrapper photoSearchWrapper'>
                <h2>PHOTO SEARCH</h2>
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
                <Gallery category={category}
                         type={type}
                         breedID={breedID}
                />
            </div>
        </section>
    )

}

export default PhotoSearch;