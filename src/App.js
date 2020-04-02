// import React from 'react';
// import './App.css';
// import Header from './components/Header/Header';
// import Shop from './components/Shop/Shop';

// function App() {
//   return (
//     <div>
//         <Header></Header>
//         <Shop></Shop>
//     </div>
//   );
// }

// export default App;




import React, { createContext } from 'react';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import Order from './components/Order/Order';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Login from './components/Login/Login';

export const UserContext = createContext();

const App = (props) => {
  const user = {name: 'Angular', email: 'react@gmail.com'}
  return (
    <div>
      <UserContext.Provider value={user.name}>

        <Header></Header>
        <Router>
          <Switch>
            <Route path="/shop">
              <Shop></Shop>
            </Route>

            <Route path="/review">
              <Review></Review>
            </Route>

            <Route path="/manage">
            <Inventory></Inventory>
            </Route>

            <Route path="/orders">
              <Order></Order>
            </Route>

            <Route exact path="/">
            <Shop />
            </Route>

            <Route path="/product/:productKey">
              <ProductDetail></ProductDetail>
            </Route>

            <Route>
              <Login></Login>
            </Route>

            <Route  path="*">
            <NotFound></NotFound>
            </Route>

          </Switch>
        </Router>

      </UserContext.Provider>
    </div>
  );
};

export default App;