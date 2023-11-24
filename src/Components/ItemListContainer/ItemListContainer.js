import React from 'react'
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'; /* detecta que ID usar */
import {getFirestore, collection, getDocs, where, query} from 'firebase/firestore'; /* colecciones y doc de FIREBASE */

const ItemListContainer = () => { /* greeting es el prop */

  const [item, setItem] = useState([])/* Array vacio pq se completa con el JSON */
  const { id } = useParams(); /* const= igual al nombre que le damos al :id en el app */

  useEffect(() => {
    const queryDb = getFirestore(); /* para inicializar firestore */
    const queryCollection = collection(queryDb,'products') /* para acceder a nuestra coleccion / PRODUCTS es el nombre que le pusimos en Firebase */
      if (id){
        const queryFilter = query(queryCollection, where('categoryId', '==', id));
        getDocs(queryFilter).then((res)=> setItem(res.docs.map((p)=>({id: p.id, ...p.data()}))));
        
      }else{
        getDocs(queryCollection).then((res)=> setItem(res.docs.map((p)=>({id: p.id, ...p.data()}))));
      };
  }, [id]) /* dejar el array vacio solo se ejecuta una vez, colocar el id pide que se ejecute cada vez q el id cambie */




return (
  <div className='container'>
    <div className='row'>


      <ItemList item={item}/> {/* le paso item por prop */}
    </div>
    {/* <h3>{greeting}</h3> */}

  </div>
)
}

export default ItemListContainer