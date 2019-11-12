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
                            <li><NavLink to='/'>STRONA DOMOWA</NavLink></li>
                            <li><NavLink to='/ciekawostki-o-kotach'>CIEKAWOSTKI O KOTACH</NavLink></li>
                            <li><NavLink to='/rasy-kotow-domowych'>RASY KOTÓW DOMOWYCH</NavLink></li>
                            <li><NavLink to='/wyszukiwarka-zdjec'>WYSZUKAJ ZDJĘCIE</NavLink></li>
                            <li><NavLink to='/ulubione-zdjecia'>ULUBIONE ZDJĘCIA</NavLink></li>
                            <li><NavLink to='/logowanie'>LOGOWANIE</NavLink></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navigation;