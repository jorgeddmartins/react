import React from 'react';
//import logo from './logo.svg';
import './App.css';

import {
  HashRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './header/header';

import Footer from './footer/footer';

import Home from './home/home';

import Portfolio from './portfolio/portfolio';

import About from './about/about';

function App() {
    return (
        <HashRouter>
            <div className="App">
                <Header/>
                {/*<nav>
                  <ul>
                    <li>
                      <a href="/">Logout</a>
                    </li>
                    <li>
                      <Link to="/desk">Desk</Link>
                    </li>
                   
                  </ul>
                </nav>*/}
          
                <Switch>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/portfolio">
                        <Portfolio />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
                <Footer/>
            </div>
        </HashRouter>
    );
}

export default App;

