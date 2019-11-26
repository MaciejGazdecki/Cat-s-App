import React, {useState, useEffect} from 'react';
import axios from "axios";
import PropTypes from 'prop-types';

function Gallery(props) {
    const {category,type,breedID} = props;
    const [gallery, setGallery] = useState([]);

    useEffect(() =>{
        const fetchData = async () => {
            return await axios.get(`/images/search?breed_id=${breedID}&mime_types=${type}&category_ids=${category}`)
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
  category: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  breedID: PropTypes.string.isRequired
};