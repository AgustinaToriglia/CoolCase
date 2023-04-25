import { useState, useEffect } from "react";
import { arregloProductos } from "../components/Data/dataBase.js";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import './styles/ItemDetailContainer.css'

export const ItemDetailContainer = ()=>{
    const {productId} = useParams();

    const [item, setItem] = useState({});

    const getItem = (id)=>{
        return new Promise((resolve, reject)=>{
            const product = arregloProductos.find(item=>item.id === parseInt(id));
            resolve(product)
        })
    }

    useEffect(()=>{
        const getProducto = async()=>{
            const producto = await getItem(productId);
            setItem(producto);
        }
        getProducto();
    },[productId])

    return(
        <div className="item-detail-container">
            <ItemDetail item={item}/>
        </div>
    )
}