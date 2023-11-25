import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../ItemCount/ItemCount.css'


const ItemCount = ({ stock, onAdd, initial}) => {
    const [counter, setCounter] = useState(parseInt(initial));

    const incrementarStock = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        }
    }
    const decrementarStock = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }
    useEffect(() => {
		setCounter(parseInt(initial));
	}, [initial]);



    return (
        <div className="ItemContainer " id="itemcount">
            <div className=" ">
                <div className="col-md-2 ">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-primary" disabled={counter <= 1} onClick={decrementarStock} >-</button>
                        <button type="button" className="btn btn-outline-primary">{counter} </button>
                        <button type="button" className="btn btn-outline-primary" disabled={counter >= stock} onClick={incrementarStock} >+</button>
                    </div>
                </div>
            </div>
            <div className="botonesCompra">
                <div className="botonesCompra">
                    <button type="button" className="btn btn-outline-primary" onClick={() => onAdd(counter)} >Agregar al carrito</button>
                </div>
                <div className="botonesCompra">
                <Link to='/'type="button" className="btn btn-outline-primary"  >Seguir Comprando</Link>
                </div>
                <div className="botonesCompra">
                <Link to='/cart'type="button" className="btn btn-outline-primary"  >Ver Carrito</Link>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;

/* import { Button, ButtonGroup } from 'react-bootstrap'; ******* ITEMCOUNT DE PROFE*****
export default function ItemCount({ add, increment, decrement, count }) {
return (
<div>
<ButtonGroup className='w-100' aria-label="Basic example">
<Button onClick={decrement} variant="secondary"> -< /Button>
<Button variant="secondary" disabled>{count}</Button>
<Button onClick={increment} variant="secondary">+</Button>
</ButtonGroup>
<Button className='w-100 mt-2' onClick={add}>Comprar</Button>
</div>
);
} */