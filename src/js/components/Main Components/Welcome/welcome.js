import React, { useState } from 'react';
import siamCat from "./images/siam-2766253.jpg";
import mainCoon from "./images/cat-1508613_1920.jpg";
import orangeCat from './images/Canva - Orange Tabby Cat.jpg';
import drinkingCat from './images/cat-2604054.jpg';
import FSLightBox from "fslightbox-react";


function welcome() {
    const cats = [siamCat,mainCoon,orangeCat,drinkingCat];
    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1
    });
    // const [galeryClosed, setGaleryClosed] = useState(false);

    function openLightboxOnSlide(number) {
        setLightboxController({
            toggler: !lightboxController.toggler,
            slide: number
        });
    }

    return (
        <>
            <h1 className={'welcome'}>Witaj na stronie o kotach domowych</h1>
            <p className={'welcome-content'}>Jest to strona poświęcona miłośnikom kota domowego. Pozwala ona wyszukiwać informację
                o rasach kotów oraz zdjęcia. Po zalogowaniu użytkownik ma opcję wgrywania własnych zdjęć
                zawierających koty (inne zdjęcia są automatycznie blokowane) oraz ich usuwania. Po zalogowaniu
                istnieje również opcja dodawania zdjęć do ulubionych.
            </p>
            <div className={'imageWrapper'}>
                {cats.map((el,inx) =>
                    <div className={'imageContainer'} key={inx} onClick={() => openLightboxOnSlide(inx+1)}>
                        <img className={'image'} src={el} alt="kot" />
                        <span className={"tooltiptext"}>Kliknij aby powiękrzyć</span>
                    </div>
                )}
            </div>
            <div><i className="fas fa-arrows-alt-h"></i></div>
            <FSLightBox
                toggler={lightboxController.toggler}
                sources={[ ...cats,
                    'https://www.youtube.com/watch?v=opcRx5fn8N8',
                ]}
                slide={ lightboxController.slide }
            />
        </>
    )
}

export default welcome;