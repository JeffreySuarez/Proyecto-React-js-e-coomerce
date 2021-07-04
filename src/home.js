
import './home.css';

import {NavBar} from './componets/navBar/navBar'
import { ItemListContainer } from './componets/itemListContainer/itemListContainer.jsx'

export const Home = () => {

  return (

    <main>
      <NavBar/>
      <ItemListContainer greeting='Contenido del ItemListContainer'/>

    </main>
    


  )

}
