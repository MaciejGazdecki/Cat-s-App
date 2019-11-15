import React from 'react';
import PropTypes from 'prop-types';
import FSLightBox from "fslightbox-react";

function Gallery(props) {
    const {gallery, toggler, setToggler} = props;
    const arrayUrls = gallery.map((el) => el.url);
    return (
        <>
            <div className={'gallery'}>
                {gallery
                    .slice(0,3)
                    .map((el) =>
                        <div key={el.id} className={'breedGallery-wrap'}
                             onClick={() => setToggler(!toggler)}>
                            <img
                                className={'breedGallery-image'}
                                src={el.url}
                                alt="kot"/>
                        </div>)}
            </div>
            <FSLightBox
                toggler={toggler}
                sources={arrayUrls}
                showThumbsOnMount={ true }
                key={arrayUrls}
                type={'image'}
            />
        </>
    )
}

export default Gallery;

Gallery.propTypes = {
    gallery:PropTypes.array.isRequired,
    toggler: PropTypes.bool.isRequired,
    setToggler: PropTypes.func.isRequired
};