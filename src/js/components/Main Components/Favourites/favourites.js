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
    const [page,setPage] = useState(1);
    const perPage = 5;

    const userName = localStorage.getItem('userName');

    const downloadFavourites = () => {
        const params = {
            sub_id: userName
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
    console.log(favourites);
    const buttons =
        <div className='paginationBtns'>
            <button onClick={onClickPreviousHandler}>Previous Page</button>
            <button onClick={onClickNextHandler}>Next Page</button>
        </div>;

    const favGallery =
        <div className="favGallery">
            {favourites.slice(page*perPage - perPage, page*perPage).map(el =>
                <div key={el.id}
                     style={{backgroundImage: `url(${el.image.url})`}}
                     className='favGalleryImage'>
                    <button className='favBtn'
                            onClick={() => unlikePhoto(el.id)}>
                        <i className="fas fa-heart-broken"></i>
                    </button>
                </div>)}
        </div>;

    const noPhotos = <div>There are no favourites</div>;

    return (
        <section className='favouritesSection'>
            <div className='wrapper favouritesWrapper'>
                <h2>Favourites Photos</h2>
                {favourites.length > 0 ? favGallery : noPhotos}
                {favourites.length> 0 ? buttons: null}
            </div>
        </section>
    )

}

export default Favourites;