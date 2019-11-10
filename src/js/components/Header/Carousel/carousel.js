import React from 'react';
import Cat from './assets/white-4557097_1920.jpg'

function Carousel() {
    const style = {
      backgroundImage: `url("${Cat}")`
    };
    return(
        <>
            <div className={"carousel-background"} style={style}></div>
        </>
    )
}

export default Carousel;