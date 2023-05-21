import './styles/Item.css';
import {Link} from 'react-router-dom';

export const Item = ({product: {img, id, name, price}})=>{
    return(
        <div className="tarjeta-producto">
            <img src={img} alt={name}/>
            <h4>{name}</h4>
            <p>$ {price}</p>
            <Link to={`/item/${id}`}>
                <button className='boton-ver'>Detalles</button>
            </Link>
        </div>
    )
}