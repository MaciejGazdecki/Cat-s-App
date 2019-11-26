import React, {useState, useEffect} from 'react';
import axios from "axios";
import PropTypes from 'prop-types';

function Gallery(props) {
    const {category,type,breedID} = props;
    const [gallery, setGallery] = useState([]);

    useEffect(() =>{
        const params = {
            mime_types: type,
            category_ids: category,
            breed_ids: breedID,
            limit:100,
            page:1,
            order: 'DESC'

        };
        const fetchData = async () => {
            return await axios.get(`/images/search?&mime_types=${type}&category_ids=${category}&breed_ids=${breedID}&limit=100&order=DESC&page=1`)
        };
        fetchData()
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }, [breedID,category,type]);

    return (
        <div className="galleryWrapper">

        </div>
    )

}

export default Gallery;

Gallery.propTypes = {
  category: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  breedID: PropTypes.string.isRequired
};