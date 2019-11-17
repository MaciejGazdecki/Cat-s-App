import React, {useState} from 'react';
import FSLightBox from "fslightbox-react";
import Cat1 from './images/videoYoutube.png';
import Cat2 from './images/videoYoutube2.png'


function VideoSection() {
    const videos = [
        "https://www.youtube.com/embed/EaqDR50fQkA?controls=0",
        "https://www.youtube.com/embed/aWa44qbjoVM?controls=0",
        "https://www.youtube.com/embed/opcRx5fn8N8?controls=0",
        "https://www.youtube.com/watch?v=YW4DQNcjT4s"
    ];

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
            <section className={'videoSection'}>
                <div className={'wrapper videos'}>
                    <div onClick={() => openLightboxOnSlide(1)}>
                        <img src={Cat1} alt="kot"/>
                    </div>
                    <div onClick={() => openLightboxOnSlide(4)}>
                        <img src={Cat2} alt="kot"/>
                    </div>
                </div>
            </section>
            <FSLightBox
                toggler={lightboxController.toggler}
                sources={videos}
                slide={ lightboxController.slide }
                disableLocalStorage={ true }
            />
        </>
    )
}

export default VideoSection;