import React from 'react';
import logo from '../../../../../images/cat-3-128.png';


function footer() {
    return (
        <footer>
            <div className='wrapper footerWrapper'>
                <div className="footerLogo"><img  src={logo} alt="kot"/></div>
                <div className='sign'>created by Maciej Gazdecki</div>
            </div>
        </footer>
    )
}
export default footer;