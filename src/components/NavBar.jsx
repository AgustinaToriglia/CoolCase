import { CartWidget } from "./CartWidget"
import './styles/NavBar.css';
import { NavLink, Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/img/logocase2.png';

export const NavBar = () => {
    return (
        <nav className='nav-container'>
            <Link to="/">
                <div className="logo-container">
                    <img src={Logo} alt="logo" />
                </div>
            </Link>
            <div className='navegacion'>
                <NavLink className={({ isActive }) => isActive ? "claseActive" : "claseInactive"}
                    to="/">Inicio</NavLink>
                <NavLink className={({ isActive }) => isActive ? "claseActive" : "claseInactive"}
                    to="/products/gamer">Gamer</NavLink>
                <NavLink className={({ isActive }) => isActive ? "claseActive" : "claseInactive"}
                    to="/products/entertainment">Entretenimiento</NavLink>
                <NavLink className={({ isActive }) => isActive ? "claseActive" : "claseInactive"}
                    to="/products/others">Varios</NavLink>
                <NavLink className={({ isActive }) => isActive ? "claseActive" : "claseInactive"}
                    to="/products">Todos</NavLink>
            </div>
            <div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar