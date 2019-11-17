import React,{useState} from 'react';
import PropTypes from 'prop-types';
import FSLightBox from "fslightbox-react";

function Gallery(props) {
    const {gallery} = props;
    const [toggler, setToggler] = useState(false);
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
                            <p className={"tooltiptext-breeds"}>Kliknij i otwórz galerię</p>
                        </div>)}

            </div>
            <button className={'startGallery'}
                    onClick={() => setToggler(!toggler)}>
                Otwórz Galerię
            </button>
            <FSLightBox
                toggler={toggler}
                sources={arrayUrls}
                showThumbsOnMount={ true }
                key={arrayUrls}
                type={'image'}
                disableLocalStorage={ true }
            />
        </>
    )
}

export default Gallery;

Gallery.propTypes = {
    gallery:PropTypes.array.isRequired,
};