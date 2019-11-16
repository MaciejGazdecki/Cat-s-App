import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Logo from "./Subcomponents/Logo/logo";
import Select from "./Subcomponents/Select/select";
import Gallery from "./Subcomponents/Gallery/gallery";
import BaseInformation from "./Subcomponents/Information/BaseInformation/baseInformation";
import DetailedInformation from "./Subcomponents/Information/DetailedInformation/detailedInformation";

function Breeds() {
    const [breeds, fetchBreeds] = useState([]);
    const [breedID, setBreedID] = useState('abys');
    const [gallery, loadGallery] = useState([]);
    const [selectedBreed, setSelectedBreed] = useState({});

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
            return await axios.get(`/images/search?breed_ids=${breedID}&limit=100`)
        };
        fetchData()
            .then(response => loadGallery(response.data))
            .catch(err => console.log(err, 'Mamy błąd'))
    },[breedID]);

    useEffect( () => {
       const fetchData = async () => {
           return await axios.get(`/breeds/search?q=${breedID}`)
       };
       fetchData()
            .then(response => setSelectedBreed(response.data[0]))
            .catch(err => console.log(err, 'Mamy błąd'))
    },[breedID]);

    return (
        <div className={'wrapper'}>
            <div className={'breedsWrapper'}>
                <Logo/>
                <Select setBreedID={setBreedID} breedID={breedID} breeds={breeds}/>
                <Gallery gallery={gallery}/>
                <div className={'information-wrapper'}>
                    <BaseInformation selectedBreed={selectedBreed}/>
                    <DetailedInformation selectedBreed={selectedBreed}/>
                </div>
            </div>
        </div>
    )
}

export default Breeds;