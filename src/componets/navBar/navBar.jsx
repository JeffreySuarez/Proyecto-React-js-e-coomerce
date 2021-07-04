import React from 'react' 
import { CartWidget } from '../cartWidget/cartWidget'
import './navBar.css'

export const NavBar = () => {
    return(
        <header className="header">

            <div className="topHeader">
                <h3>ENVIOS GRATIS DESDE $ 200.000</h3>
            </div>

            <div className="topMenu">

                <div className="topMenuLogo">
                    <p className="menuLogo"><span className="icon"><i class="fas fa-bicycle"></i></span><span className="tienda">Tienda</span><span className="bici">bici</span></p>
                </div>

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

                <CartWidget/>

                
            </div>

            
            <nav>
                
                <ul className="navBar">
                   
                    <li>INICIO</li>
                    <li>ACCESORIOS</li>
                    <li>ROPA</li>
                    <li>COMPONENTES</li>
                    <li>BICICLETAS</li>
                    <li>DESCUENTOS</li>
                </ul>
            </nav>
        </header>
    )
}