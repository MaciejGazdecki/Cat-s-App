import React, {useState} from 'react';
import {NavLink} from 'react-router-dom'
import logo from './assets/clipart-10-9-18-34-33.png';

function Navigation() {
    const [navOpen, setNavOpen] = useState(false);
     return (
        <>
            <header>
                <nav className={"navigation"}>
                    <div className={"wrapper"}>
                        <div className={"nav-wrapper"}>
                            <div className={"hamburger"}
                                 onClick={() => setNavOpen(!navOpen)}>
                                <i className="fas fa-bars"></i>
                            </div>
                            <div className={"logo"}><img  src={logo} alt="kot"/></div>
                        </div>
                        <ul className={navOpen ? "list open" : "list"}>
                            <li>
                                <NavLink to='/'
                                         onClick={() => setNavOpen(!navOpen)}>
                                STRONA DOMOWA
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/ciekawostki-o-kotach'
                                         onClick={() => setNavOpen(!navOpen)}>
                                CIEKAWOSTKI O KOTACH
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/rasy-kotow-domowych'
                                         onClick={() => setNavOpen(!navOpen)}>
                                RASY KOTÓW DOMOWYCH
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/wyszukiwarka-zdjec'
                                         onClick={() => setNavOpen(!navOpen)}>
                                WYSZUKAJ ZDJĘCIE
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/ulubione-zdjecia'
                                         onClick={() => setNavOpen(!navOpen)}>
                                ULUBIONE ZDJĘCIA
                                </NavLink>
                            </li>
                            <li><NavLink to='/logowanie'
                                         onClick={() => setNavOpen(!navOpen)}>
                                LOGOWANIE
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