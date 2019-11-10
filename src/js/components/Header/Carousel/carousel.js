import React from 'react';
import Cat from './assets/white-4557097_1920.jpg'

function Carousel() {
    const style = {
      backgroundImage: `url('${Cat}')`
    };
    return(
        <>
            <section className={'carousel-section'} style={style}>
                <div className={"wrapper"} >
                    {/*<div>dupa</div>*/}
                </div>
            </section>
        </>
    )
}

export default Carousel;