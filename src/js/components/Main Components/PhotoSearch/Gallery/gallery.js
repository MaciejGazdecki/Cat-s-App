import React, {useState, useEffect} from 'react';
import axios from "axios";
import PropTypes from 'prop-types';
import Pagination from "./Pagination/pagination";

function Gallery(props) {
    const {category,type,breedID} = props;
    const [gallery, setGallery] = useState([]);
    const [page, setPage] = useState(1);
    const [paramsPage, setParamsPage] = useState(1);
    const perPage = 5;

    let params = {
        mime_types: type,
        category_ids: category,
        breed_ids: breedID,
        limit:100,
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

    const images =
        <>
            {gallery.slice(page*perPage - perPage, page*perPage).map(el =>
                    <div key={el.id}
                         style={{backgroundImage: `url(${el.url})`}}
                         className='galleryImage'>
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