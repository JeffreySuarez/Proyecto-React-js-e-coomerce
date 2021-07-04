
import './home.css';

import {NavBar} from './componets/navBar/navBar'
import { ItemListContainer } from './componets/itemListContainer/itemListContainer.jsx'
import { ItemCount } from './componets/itemCount/itemCount'


export const Home = () => {

  return (

    <main>
      <NavBar/>
      <ItemListContainer greeting='Contenido del ItemListContainer'/>
      <ItemCount
        producto = 'Bicycle 01'
        stock={20}
        onAdd = {() => console.log('onAdd')}
        />

    </main>
    


  )

}
