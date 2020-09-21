import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './component/Header/Header';
import HomePage from './component/HomePage/HomePage';
import CheckOut from './component/CheckOut/CheckOut';



function App() {
  
  return (
    <Router>
        <div className="App">
          <Switch>
            <Route path="/checkout">
              <Header></Header>
              <CheckOut></CheckOut>
            </Route>
            <Route path="/login">
              <h1>Login page</h1>
            </Route>
            {/*this is the default router*/}
            <Route path="/">
                <Header></Header>
                <HomePage></HomePage>
            </Route>
          </Switch>
        </div>
    </Router>
    
  );
}

export default App;
