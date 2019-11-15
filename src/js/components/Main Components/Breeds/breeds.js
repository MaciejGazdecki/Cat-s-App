import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Logo from "./Subcomponents/Logo/logo";
import Select from "./Subcomponents/Select/select";

function Breeds() {
    const [breeds, fetchBreeds] = useState([]);
    const [breed, setBreed] = useState('');

    useEffect(() => {
         const fetchData = async () => {
            return await axios.get('/breeds');
        };
        fetchData()
            .then(response => fetchBreeds(response.data))
            .catch(err => console.log(err, 'Mamy błąd'));

    },[]);
    console.log(breeds);
    return (
        <div className={'wrapper'}>
            <div className={'breedsWrapper'}>
                <Logo/>
                <Select setBreed={setBreed} breed={breed} breeds={breeds}/>
            </div>
        </div>
)
}

export default Breeds;