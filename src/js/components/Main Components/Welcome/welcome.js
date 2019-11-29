import React, { useState } from 'react';
import siamCat from "../../../../../images/siam-2766253.jpg";
import mainCoon from "../../../../../images/cat-1508613_1920.jpg";
import orangeCat from '../../../../../images/Canva-OrangeTabbyCat.jpg';
import drinkingCat from '../../../../../images/cat-2604054.jpg';
import FSLightBox from "fslightbox-react";


function Welcome() {
    const cats = [siamCat,mainCoon,orangeCat,drinkingCat];
    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1
    });

    function openLightboxOnSlide(number) {
        setLightboxController({
            toggler: !lightboxController.toggler,
            slide: number
        });
    }

    return (
        <>
            <h1 className='welcome'>Welcome on the website for Cat lovers</h1>
            <p className='welcome-content'>
                Just  log in and start to like and save your favorites photos! Go to the breeds section and learn
                more about each breed and discover amazing photos in full HD. Compare behavior of each breed with
                another one using wonderful charts. Discover adoption options or add your announcement.
            </p>
            <div className='imageWrapper'>
                {cats.map((el,inx) =>
                    <div className='imageContainer' key={inx} onClick={() => openLightboxOnSlide(inx+1)}>
                        <img className='image' src={el} alt="kot" />
                        <span className="tooltiptext">Click to display on full screen</span>
                    </div>
                )}
            </div>
            <div><i className="fas fa-arrows-alt-h"></i></div>
            <FSLightBox
                toggler={lightboxController.toggler}
                sources={cats}
                slide={ lightboxController.slide }
                showThumbsOnMount={ true }
                disableLocalStorage={ true }
                captions={ [
                    <>
                        <h2>Siam Cat</h2>
                    </>,
                    <>
                        <h2>MainCoon</h2>
                    </>,
                    <>
                        <h2>Domestic no-breed cat</h2>
                    </>,
                    <>
                        <h2>Domestic no-breed cat</h2>
                    </>,

                ] }
            />
        </>
    )
}

export default Welcome;