import React, {useState, useEffect} from 'react';
import axios from "axios";
import PropTypes from 'prop-types';

function Gallery(props) {
    const {category,type,breedID} = props;
    const [gallery, setGallery] = useState([]);
    let page = 1;
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

    let images =
        <>
            {gallery.slice(page*perPage -perPage, page*perPage).map(el =>
                <div key={el.id}
                     style={{backgroundImage: `url(${el.url})`}}
                     className='galleryImage'>
                </div>)};
        </>;

    function onClickNextHandler() {
        page++;
    }

    function onClickPreviousHandler() {
        if(page> 1) page--;
    }
    console.log(gallery);
    console.log(page);
    //hej Przemek, dlaczego mi nie zwiekszaja lub zmiejszaja handlery page :)?? probowalem w onClick callbacka dac i to samo :(,
    //nie moge zrobic pagination :(
    return (
        <div className="galleryWrapper">
            <div className='photos'>
                {images}
            </div>
            <button onClick={onClickPreviousHandler}>Previous page</button>
            <button onClick={onClickNextHandler}>Next page</button>
        </div>
    )

}

export default Gallery;

Gallery.propTypes = {
  category: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  breedID: PropTypes.string.isRequired
};