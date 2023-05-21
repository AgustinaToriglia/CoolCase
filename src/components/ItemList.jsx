import { Item } from "./Item"
import './styles/ItemList.css';
/* import {Link} from 'react-router-dom';
 */
export const ItemList = ({ products }) => {
    return (
        <>
        <div className='estilos-listado'>
            {products.map((product) => (
                <Item key={product.id} product={product} />
            ))}
        </div>
        </>
    )
}