import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';
import ItemCart from '../ItemCart/ItemCart';

const Cart = () => {
    const { cart, totalPrice, clearCart} = useCartContext();
    const handleCheckout = () => { /* borrar contador de carrito */
        clearCart();
      };

    if (cart.length === 0) {
        return (
            <>
                <p>No hay elementos en el carrito</p>
                <Link to="/">Ver todos los productos</Link>
            </>
        );
    }

    return (
        <>
            {cart.map((product) => (
                <ItemCart key={product.id} product={product} />
            ))}
            <p>total: $ {totalPrice()}</p>

            <Link to="/checkout">
                {' '}
                <button onClick={handleCheckout}  className="btn-total">Finalizar Compra</button>
            </Link>
        </>
    );
};

export default Cart;