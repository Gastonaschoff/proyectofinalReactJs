import { useState } from "react";
import arrayProductos from "./json/productos.json";
import { useEffect } from "react";
import ItemList from "./ItemList";
import Carousel from "./Carousel";
import { useParams } from "react-router-dom";
import { getFirestore, collection, addDoc} from "firebase/firestore";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();
    
//LLamadad desde json
    /*useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos);
            }, 2000);
        })
        promesa.then(data => {
            setItems(data);
        })
    }, [id]);*/

//Subida de productos 

    /*useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection (db, "items");

        arrayProductos.forEach(producto => {
            addDoc(itemsCollection, producto);
        });

        console.log("Productos subidos correctamente :)");
    }, []) */

    return (
        <>
            {id ? "" : <Carousel />}
            <ItemList items={items} />
        </>
    )
}

export default ItemListContainer;
