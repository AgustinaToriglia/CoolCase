import React from 'react'
import "./styles/NavBar.css"
import CartWidget from './CartWidget';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/img/logocase2.png';
const NavBar = ({background}) => {
    return (<header className={`header background--${background}`}>

        <div className="header-container">

            <div className="menu-button">
                <FontAwesomeIcon icon={faBars} size="lg" color="white" />
                <span>Menú</span>
            </div>       
            <nav>
                <ul className="nav-container">
                    <li>
                        <a href="/">Inicio</a>
                    </li>
                    <li className="products-item">
                        <a href="/">
                            Productos <span className="arrow"></span>
                        </a>
                    </li>
                    <li>
                        <a href="/">Contacto</a>
                    </li>
                </ul>
            </nav>

            <div className="logo-container">
                <img src={Logo} alt="logo" /> 
            </div>
            <CartWidget />
        </div>
    </header>
);};

export default NavBar