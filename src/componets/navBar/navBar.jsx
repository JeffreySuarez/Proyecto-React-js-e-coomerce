import React from 'react' 
import { CartWidget } from '../cartWidget/cartWidget'
import './navBar.css'

import {Link} from 'react-router-dom'
import {NavLink} from 'react-router-dom'

export const NavBar = () => {
    return(
        <header className="header">

            <div className="topHeader">
                <h3>ENVIOS GRATIS DESDE $ 200.000</h3>
            </div>


            <div className="topMenu">

                <Link   className="navLink" to='/'>
                    <div className="topMenuLogo">
                        <p className="menuLogo"><span className="icon"><i class="fas fa-bicycle"></i></span><span className="tienda">Tienda</span><span className="bici">bici</span></p>
                    </div> 
                </Link>

                

                <div className="searchBar">
                    <form action="">
                        <input type="text" className="searchBarMenu" />
                        <button className="searchBarButton">
                            <i class="fas fa-search"></i>
                        </button>
                    </form>
                </div>

                <div className="user">
                    <p><span>Mi cuenta</span></p>
                    <i class="fal fa-user"></i>
                </div>

                <CartWidget className="animate__bounce"/>

                
            </div>
           
            <nav>
                <ul className="navBar">
                    <NavLink exact
                    className="navLink"
                    activeClassName='link-active' to='/'>
                        <li className="category">INICIO</li>
                    </NavLink>  

                    <NavLink 
                    className="navLink"
                    activeClassName='link-active' to='/category/ACCESORIOS'>
                        <li className="category">ACCESORIOS</li>
                    </NavLink>

                    <NavLink 
                    className="navLink"
                    activeClassName='link-active' to='/category/ROPA'>
                        <li className="category">ROPA</li>     
                    </NavLink>                 

                    <NavLink 
                    className="navLink"
                    activeClassName='link-active' to='/category/COMPONENTES'>
                        <li className="category">COMPONENTES</li>
                    </NavLink>

                    <NavLink 
                    className="navLink"
                    activeClassName='link-active' to='/category/BICICLETAS'>
                        <li className="category">BICICLETAS</li>
                    </NavLink>

                    <NavLink 
                    className="navLink"
                    activeClassName='link-active' to='/category/DESCUENTOS'>
                        <li className="category">DESCUENTOS</li> 
                    </NavLink>                     
                </ul>
            </nav>
        </header>
    )
}