import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { CartItem } from '../components/CartItem';
import "./styles/CartContainer.css"

export const CartContainer = () => {
    const { productCartList, clearProductCartList } = useContext(CartContext);

    return (
        <div>
            <div className='cart-container'>
                {
                    productCartList.length > 0 ?
                        <>
                            {
                                productCartList.map(item => (
                                    <CartItem key={item.id} item={item} />
                                ))
                            }
                            <hr />
                            <button onClick={clearProductCartList}>Vaciar el carrito</button>
                        </>
                        :
                        <p>No has agregado productos</p>
                }
            </div>
        </div>
    )
}