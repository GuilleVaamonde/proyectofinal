import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Error from '../src/Components/Error';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Cart from './Components/Cart/Cart';
import CartProvider from './Components/Context/CartContext';
import { Checkout } from './Components/CheckOut/CheckOut';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <CartProvider>
          <NavBar />

          <Routes>
            <Route path='/' element={<ItemListContainer greeting='Home donde se muestran los productos' />} />
            <Route path='/category/:id' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path={'/cart'} element={<Cart />} />
            <Route path={'/checkout'} element={<Checkout/>}/>
            <Route path='*' element={<Error />} />
          </Routes>

        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
