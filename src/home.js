
import './home.css';

import {NavBar} from './componets/navBar/navBar'
import { ItemListContainer } from './pages/itemListContainer/itemListContainer.jsx'
// import { ItemCount } from './componets/itemCount/itemCount'
import { ItemDetailContainer } from './pages/itemDetailContainer/itemDetailContainer'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export const Home = () => {

  return (
    <Router>

      <main>
        <NavBar/>

        <Switch>

          <Route exact path="/">
            <ItemListContainer />
          </Route>
         
          <Route exact path="/category/:id">
            <ItemListContainer />
          </Route>

          <Route exact path="/item/:id">
            <ItemDetailContainer />
          </Route>
         

        </Switch>

      </main>

    </Router>
  );

}
