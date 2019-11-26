import React, {useState} from 'react';
import {NavLink} from 'react-router-dom'
import logo from '../../../../../images/output-onlinepngtools.png';

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
                                <NavLink to='/breeds'
                                         onClick={() => setNavOpen(!navOpen)}>
                                CAT&apos;S BREEDS
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/search-photo'
                                         onClick={() => setNavOpen(!navOpen)}>
                                PHOTO SEARCH
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/favourites'
                                         onClick={() => setNavOpen(!navOpen)}>
                                FAVOURITES PHOTOS
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/adopt-a-Cat'
                                         onClick={() => setNavOpen(!navOpen)}>
                                    ADOPT A CAT
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/login'
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