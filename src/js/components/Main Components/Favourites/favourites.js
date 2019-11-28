import React, {useState, useEffect} from 'react';
import axios from "axios";

const axiosInstanceHandleFavourites = axios.create({
    baseURL: 'https://api.thecatapi.com/v1',
    headers : {
        'x-api-key': '687fe573-b392-44ea-b985-63c162d0f64c'
    }
});

function Favourites() {
    const [favourites, setFavourites] = useState([]);

    const userName = localStorage.getItem('userName');

    const downloadFavourites = () => {
        const params = {
            sub_id: userName
        };
        const fetchData = async () => {
            return await axiosInstanceHandleFavourites.get('favourites', {params})
        };
        fetchData()
            .then(res => {console.log(res.data); setFavourites(res.data)})
            .catch(err => console.log(err))
    };
    useEffect(() => {
        downloadFavourites()
    },[]);

    const unlikePhoto = async (id) => {
        await axiosInstanceHandleFavourites.delete(`favourites/${id}`)
            .then(res => {console.log(res); alert('Photo unliked')})
            .catch(err => console.log(err));
        downloadFavourites();
    };

    return (
        <section className='favouritesSection'>
            <div className='wrapper favouritesWrapper'>
                <h2>Favourites Photos</h2>
                <div className="favGallery">
                    {favourites.map(el =>
                    <div key={el.id}
                         style={{backgroundImage: `url(${el.image.url})`}}
                         className='favGalleryImage'>
                        <button className='favBtn'
                        onClick={() => unlikePhoto(el.id)}>
                            <i className="fas fa-heart-broken"></i>
                        </button>
                    </div>)}
                </div>
            </div>
        </section>
    )

}

export default Favourites;