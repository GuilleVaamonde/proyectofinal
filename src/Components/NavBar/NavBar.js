import React from 'react'
import { Link, /* NavLink */ } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import DboBco from '../NavBar/DboBco.png'
import '../NavBar/NavBar.css'

const NavBar = ()=>{
    return (
        <div className='navBar'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/"}><img src={DboBco} alt='logo' /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-nav">
                            <li className='nav-item'>
                                <Link className="nav-link active" aria-current="page" to='/'>Inicio</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className="nav-link" to="category/Diseños">Diseños</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className="nav-link" to="category/Frases">Frases</Link>
                            </li> 
                        </div>
                    </div>
                </div>
                <Link class='nav-link' to='/cart'>
                    <CartWidget />
                </Link>
            </nav>
        </div>
    );
}

export default NavBar