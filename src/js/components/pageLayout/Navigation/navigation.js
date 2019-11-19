import React, {useState} from 'react';
import {NavLink} from 'react-router-dom'
import logo from './assets/clipart-10-9-18-34-33.png';

function Navigation() {
    const [navOpen, setNavOpen] = useState(false);
    let user = '';
    if (localStorage.getItem('userName')) user = localStorage.getItem('userName');

    return (
        <>
            <header>
                <nav className={"navigation"}>
                    <div className={"wrapper"}>
                        <div className={"nav-wrapper"}>
                            <div className={"hamburger"}
                                 onClick={() => setNavOpen(!navOpen)}>
                                <i className="fas fa-paw"></i>
                            </div>
                            <div className={"logo"}><img  src={logo} alt="kot"/></div>
                        </div>
                        <ul className={navOpen ? "list open" : "list"}>
                            <li>
                                <NavLink to='/'
                                         onClick={() => setNavOpen(!navOpen)}>
                                HOME
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/ciekawostki-o-kotach'
                                         onClick={() => setNavOpen(!navOpen)}>
                                ABOUT DOMESTIC CAT
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/rasy-kotow-domowych'
                                         onClick={() => setNavOpen(!navOpen)}>
                                CAT'S BREEDS
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/wyszukiwarka-zdjec'
                                         onClick={() => setNavOpen(!navOpen)}>
                                FIND PHOTO
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/ulubione-zdjecia'
                                         onClick={() => setNavOpen(!navOpen)}>
                                FAVOURITES PHOTOS
                                </NavLink>
                            </li>
                            <li><NavLink to='/logowanie'
                                         onClick={() => setNavOpen(!navOpen)}>
                                { user ? `SIGNED AS ${user.toUpperCase()}` : 'SIGN IN'}
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navigation;