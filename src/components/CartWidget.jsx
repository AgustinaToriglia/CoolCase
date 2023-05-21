import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './styles/CartWidget.css'

export const CartWidget = () => {
    const { getTotalProducts, productCartList } = useContext(CartContext);

    return (
        <div>
            {
                <>
                    <Link to="/cart">
                        <FontAwesomeIcon icon={faCartShopping} size="1x" color="white" />
                    </Link>
                    <span style={{ backgroundColor: 'white', borderRadius: "50%", width: "10px", heigth: "10px", fontSize: "10px", color: "black" }}>
                        {getTotalProducts()}
                    </span>
                </>
            }
        </div>
    )
}

export default CartWidget