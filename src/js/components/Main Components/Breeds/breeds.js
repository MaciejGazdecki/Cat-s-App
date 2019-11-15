import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Logo from "./Subcomponents/Logo/logo";
import Select from "./Subcomponents/Select/select";

function Breeds() {
    const [breeds, fetchBreeds] = useState([]);
    const [breed, setBreed] = useState('abys');
    const [gallery, loadGallery] = useState([]);

    useEffect(() => {
         const fetchData = async () => {
            return await axios.get('/breeds');
        };
        fetchData()
            .then(response => fetchBreeds(response.data))
            .catch(err => console.log(err, 'Mamy błąd'));

    },[]);


    useEffect( () => {
        const fetchData = async () => {
            return await axios.get(`/images/search?breed_ids=${breed}&limit=100`)
        };
        fetchData()
            .then(response => loadGallery(response.data))
            .catch(err => console.log(err, 'Mamy błąd'))
    },[breed]);
    console.log(breed);
    console.log(gallery);
    return (
        <div className={'wrapper'}>
            <div className={'breedsWrapper'}>
                <Logo/>
                <Select setBreed={setBreed} breed={breed} breeds={breeds}/>
                <div className={'gallery'}>
                    {gallery
                        .slice(0,3)
                        .map(el =>
                        <div key={el.id} className={'breedGallery-wrap'}>
                            <img
                            className={'breedGallery-image'}
                            src={el.url}
                            alt="kot"/>
                        </div>)}
                </div>
            </div>
        </div>
    )
}

export default Breeds;