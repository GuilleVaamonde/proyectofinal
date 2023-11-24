import React from 'react'
import Item from '../Item/Item';


const ItemList = ({item}) => { /* const ItemList = ({ACA LE PASAMOS LA PROP item}) */
  return (
    <div className='row' id='itemlist'>
      {
      item.map(item => 
        <div className='col-md-3'
          key={item.id}>
        <Item item={item}/> {/* este item con prop encapsula todas las prop de imagen, precio, detalles, etc */}
        </div>
        )
      }
    </div>
  )
}

export default ItemList 