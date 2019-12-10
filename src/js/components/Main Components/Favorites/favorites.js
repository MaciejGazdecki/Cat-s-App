import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import {AppUserContext} from "../../../App/appUserContext";

const axiosInstanceHandleFavourites = axios.create({
    baseURL: 'https://api.thecatapi.com/v1',
    headers : {
        'x-api-key': '687fe573-b392-44ea-b985-63c162d0f64c'
    }
});

function Favorites() {
    const [favourites, setFavourites] = useState([]);
    const [page,setPage] = useState(1);
    const perPage = 6;
    const appUser = useContext(AppUserContext);

    const downloadFavourites = () => {
        const params = {
            sub_id: appUser
        };
        const fetchData = async () => {
            return await axiosInstanceHandleFavourites.get('favourites', {params})
        };
        fetchData()
            .then(res => setFavourites(res.data))
            .catch(err => console.log(err))
    };

    useEffect(() => {
        downloadFavourites()
    },[]);

    const unlikePhoto = async (id) => {
        await axiosInstanceHandleFavourites.delete(`favourites/${id}`)
            .then(res => alert('Photo unliked'))
            .catch(err => console.log(err));
        downloadFavourites();
    };

    const  onClickNextHandler = () => {
        if (favourites.slice(page*perPage - perPage, page*perPage).length < perPage) {
            setPage(prevState => prevState);
        } else {
            setPage(prevState => prevState +1);
        }
    };

    const onClickPreviousHandler = () => {
        if(page > 1) setPage(prevState => prevState -1);
    };

    const buttons =
        <div className='paginationBtns'>
            <button onClick={onClickPreviousHandler}>Previous</button>
            <button onClick={onClickNextHandler}>Next</button>
        </div>
    ;

    const favGallery =
        <div className="favGallery">
            {favourites.slice(page*perPage - perPage, page*perPage).map(el =>
                <div key={el.id}
                     style={{backgroundImage: `url(${el.image.url})`}}
                     className='favGalleryImage'>
                    <button className='unfavBtn'
                            onClick={() => unlikePhoto(el.id)}>
                        <i className="fas fa-heart-broken"></i>
                    </button>
                </div>)}
        </div>
    ;

    const noPhotos = <div className="noFav">There are no favorites</div>;

    return (
        <section className='favouritesSection'>
            <div className='wrapper favouritesWrapper'>
                <h2>Favorites Photos</h2>
                {favourites.length > 0 ? favGallery : noPhotos}
                {favourites.length> 0 ? buttons: null}
            </div>
        </section>
    )

}

export default Favorites;