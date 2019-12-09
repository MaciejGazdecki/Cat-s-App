import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import PropTypes from 'prop-types';
import Pagination from "./Pagination/pagination";

const axiosInstanceAddToFavourites = axios.create({
    baseURL: 'https://api.thecatapi.com/v1',
    headers : {
        'x-api-key': '687fe573-b392-44ea-b985-63c162d0f64c'
    }
});

function Gallery(props) {
    const {category,type,breedID,appUser} = props;
    const [gallery, setGallery] = useState([]);
    const [page, setPage] = useState(1);
    const [paramsPage, setParamsPage] = useState(1);
    const perPage = 6;
    const userName = appUser;

    let params = {
        mime_types: type,
        category_ids: category,
        breed_ids: breedID,
        limit:96,
        page:paramsPage,
        order: 'DESC'

    };

    const downloadData = () => {
        const fetchData = async () => {
            return await axios.get(`/images/search`, {params})
        };
        fetchData()
            .then(res => setGallery(res.data))
            .catch(err => console.log(err));
        setPage(1)
    };

    useEffect(() =>{
        downloadData();
    }, [breedID,category,type]);

    const addToFavourites  = async (id) => {
        await axiosInstanceAddToFavourites.post('/favourites',{
            image_id: id,
            sub_id: userName
        })
            .then(res => alert('Photo Added to Favorites'))
            .catch(err => console.log(err));
    };

    const images =
        <>
            {gallery.slice(page*perPage - perPage, page*perPage).map(el =>
                    <div key={el.id}
                         style={{backgroundImage: `url(${el.url})`}}
                         className='galleryImage'>
                        <button className='favBtn'
                                onClick={ () => addToFavourites(el.id)}>
                            <i className="fas fa-heart"></i>
                        </button>
                    </div>)}
        </>;

    const noMatchesFound = <div className='noMatches'>No matches found</div>;

    return (
        <div className="galleryWrapper">
            <div className='photos'>
                {gallery.length > 0 ? images : noMatchesFound}
            </div>
            <Pagination
                gallery={gallery}
                page={page}
                setPage={setPage}
                perPage={perPage}
                downloadData={downloadData}
                setParamsPage={setParamsPage}
                params={params}
            />
        </div>
    )
}

export default Gallery;

Gallery.propTypes = {
  category: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  breedID: PropTypes.string.isRequired
};