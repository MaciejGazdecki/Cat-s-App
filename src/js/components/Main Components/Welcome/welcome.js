import React, { useState } from 'react';
import siamCat from "./images/siam-2766253.jpg";
import mainCoon from "./images/cat-1508613_1920.jpg";
import orangeCat from './images/Canva-OrangeTabbyCat.jpg';
import drinkingCat from './images/cat-2604054.jpg';
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
                sources={cats}
                slide={ lightboxController.slide }
                showThumbsOnMount={ true }
                disableLocalStorage={ true }
                captions={ [
                    <>
                        <h2>Kot Syjamski</h2>
                    </>,
                    <>
                        <h2>Kot rasy MainCoon</h2>
                    </>,
                    <>
                        <h2>Śpiący kot rudo-biały</h2>
                    </>,
                    <>
                        <h2>Szary kot pijący wodę</h2>
                    </>,

                ] }
            />
        </>
    )
}

export default Welcome;