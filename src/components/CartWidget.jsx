import React from 'react'
import "./styles/CartWidget.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <FontAwesomeIcon icon={faCartShopping} size="1.5x" color="white" />
            <div className="qty-display">0</div>
        </div>
    )
}

export default CartWidget