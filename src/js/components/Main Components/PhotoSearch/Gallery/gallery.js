import React, {useState, useEffect} from 'react';
import axios from "axios";
import PropTypes from 'prop-types';

function Gallery(props) {
    const {category,type,breedID} = props;
    const [gallery, setGallery] = useState([]);
    const [page, setPage] = useState(1);
    const perPage = 5;

    let params = {
        mime_types: type,
        category_ids: category,
        breed_ids: breedID,
        limit:100,
        page:1,
        order: 'DESC'

    };

    useEffect(() =>{
        const fetchData = async () => {
            return await axios.get(`/images/search`, {params})
        };
        fetchData()
            .then(res => {console.log(res.data); setGallery(res.data)})
            .catch(err => console.log(err))
    }, [breedID,category,type]);

    function onClickNextHandler() {
       setPage(prevState => prevState +1)
    }

    function onClickPreviousHandler() {
        if(page> 1) setPage(prevState => prevState -1);
    }
    console.log(gallery);
    console.log(page);

    const images =
        <>
            {gallery.slice(page*perPage - perPage, page*perPage).map(el =>
                    <div key={el.id}
                         style={{backgroundImage: `url(${el.url})`}}
                         className='galleryImage'>
                    </div>)}
            <div className="galleryButtons">
                <button onClick={onClickPreviousHandler}>Previous page</button>
                <button onClick={onClickNextHandler}>Next page</button>
            </div>
        </>;
    const noMatchesFound = <div className='noMatches'>No matches found</div>;
    return (
        <div className="galleryWrapper">
            <div className='photos'>
                {gallery.length > 0 ? images : noMatchesFound}
            </div>
        </div>
    )

}

export default Gallery;

Gallery.propTypes = {
  category: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  breedID: PropTypes.string.isRequired
};