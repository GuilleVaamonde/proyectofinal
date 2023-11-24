import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import ItemDetail from '../ItemDetail/ItemDetail';



const ItemDetailContainer = () => {
  const [item, setItem] = useState([])/* Array vacio pq se completa con el JSON */
  const { id } = useParams(); /* const= igual al nombre que le damos al :id en el app */

  useEffect(() => {
    const queryDb = getFirestore(); /* para inicializar firestore */
    const queryDoc = doc(queryDb, 'products', id)
    getDoc(queryDoc).then((res)=>setItem({id: res.id, ...res.data()}));
  }, [id]) /* dejar el array vacio solo se ejecuta una vez, colocar el id pide que se ejecute cada vez q el id cambie */

  return (
    <div className='container'>

      <ItemDetail item={item} />

    </div>
  )
}

export default ItemDetailContainer