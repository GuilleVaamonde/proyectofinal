/* card a la que entramos al clickear el item */
import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';

import './ItemDetail.css'

const ItemDetail = ({ item }) => {

    const [goToCart, setGoToCart] = useState(false);
    const { addProduct } = useCartContext()
    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(item,quantity);
    }


    return (
        <div className='itemDetailContainer'>
        <div className='row'>
            <div className='col-md4 offset-md4'>
                <img src={item.img} className='card-fluid' alt={item.title} />
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <p>Stock: {item.stock}</p>
                <p>$ {item.price}</p>
            </div>
            <div>
                <div>
                    {goToCart ? <Link to='/cart' className='btn btn-outline-primary btn-terminarCompra' >Terminar compra</Link> : <ItemCount stock={10} initial={0} onAdd={onAdd} />}
                </div>
            </div>
        </div>
        </div>

    )
}

export default ItemDetail