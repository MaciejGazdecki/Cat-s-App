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
            return await axios.get(`/images/search?breed_id=${breedID}&limit=100`)
        };
        fetchData()
            .then(response => loadGallery(response.data))
            .catch(err => console.log(err, 'Mamy błąd'))
    },[breedID]);

    const selectedBreed = breeds.filter(breed => breed.id === breedID)[0];
    console.log(gallery);
    return (

        <section className={'wrapper'}>
            <div className={'breedsWrapper'}>
                <Logo/>
                <Select setBreedID={setBreedID} breedID={breedID} breeds={breeds}/>
                <Gallery gallery={gallery}/>
                <div className={'information-wrapper'}>
                    <BaseInformation selectedBreed={selectedBreed}/>
                    <DetailedInformation selectedBreed={selectedBreed}/>
                </div>
            </div>
        </section>
    )
}

//    tu przenioslem też FSLightbox z chartem, zaraz pod wrapperem i objalem to fragments i button zaraz pod
//    DetailedInformation i to samo, a Charts zaimportowalem. Zamiast Charts probowalem dodac cokolwiek
// dawalem link do youtube lub cokolwiek i to samo galeria otwiera sie tylko raz, dawalem key jak pisza w dok i to samo
//wyzej juz poleciec nie moge bo komponentem nadrzednym jest APP, ale to chyba nie od tego..zauwazylem ze po kazdym
// otwarciu ligtboxa komponent chyba sie renderuje na nowo.. to nie powoduje problemu???

export default Breeds;