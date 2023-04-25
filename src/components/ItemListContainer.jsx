/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import './styles/ItemListContainer.css';
import { arregloProductos } from "./Data/dataBase";
// import { ItemCount } from "../ItemCount/ItemCount"
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import  Hero  from "./Hero"


export const ItemListContainer = ()=>{
    const {tipoProducto} = useParams();

    const [productos, setProductos] = useState([]);

    const promesa = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(arregloProductos);
        }, 2000);
    })

    useEffect(()=>{
        promesa.then(resultado=>{
            if(!tipoProducto){
                setProductos(resultado)
            } else{
                const nuevaLista = resultado.filter(item=>item.categoria === tipoProducto);
                setProductos(nuevaLista)
            }
        })
    },[tipoProducto])

    return(
        <div className="item-list-container">
            <p></p>
            <Hero title="CoolCase" />
            <ItemList items={productos}/>
        </div>
    )
}

export default ItemListContainer