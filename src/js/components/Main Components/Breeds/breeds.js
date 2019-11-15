import React,{useState, useEffect} from 'react';
import logo from './images/cat icon.png';
import axios from 'axios'

function Breeds() {
    const [breeds, setBreeds] = useState([]);

    useEffect(() => {
         const fetchData = async ()=> {
            const result = await axios.get('/breeds');
            try {
                setBreeds(result.data)
            } catch (e) {
                console.log(e, 'Mamy błąd')
            }
        };
        fetchData();

    },[]);
    console.log(breeds);
    return (
        <div className={'wrapper'}>
            <div className={'breedsWrapper'}>
                <div className={'logo-section'}>
                    <img src={logo} alt=""/>
                    <h2>Wybierz rasę kota</h2>
                </div>
                <div className={'select-box'}>
                    <select name="breeds" className={'select'} value={breeds}>
                        {/*<option value=" ">{' '}</option>*/}
                        {breeds.map(breed => <option key={breed.id} value={breed.id}>{breed.name}</option>)}
                    </select>
                </div>
            </div>
        </div>
)
}

export default Breeds;