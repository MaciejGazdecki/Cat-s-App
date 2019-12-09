import React, {useState, useEffect} from 'react';
import axios from "axios";
import SelectSection from "./SelectSection/selectSection";
import Gallery from "./Gallery/gallery";

function PhotoSearch(props) {
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('gif,jpg,png');
    const [breeds, setBreeds] = useState([]);
    const [breedID, setBreedID] = useState('');
    const {appUser} = props;

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
                <h2>Photo Search</h2>
                <SelectSection
                    category={category}
                    setCategory={setCategory}
                    categories={categories}
                    type={type}
                    setType={setType}
                    breedID={breedID}
                    setBreedID={setBreedID}
                    breeds={breeds}
                />
                <Gallery
                    category={category}
                    type={type}
                    breedID={breedID}
                    appUser={appUser}
                />
            </div>
        </section>
    )

}

export default PhotoSearch;