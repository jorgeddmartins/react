import React, { Component } from 'react';

import './App.css';

import loadlogo from './assets/img/loadlogo.png';

import {
  HashRouter,
  Switch,
  Route
} from "react-router-dom";

import Home from './home/home';
import Desk from  './desk/desk';
import Signup from  './signup/signup';
import Settings from './settings/settings';
import Createteam from './desk/teams/createteam';

import Data from './data/data'


const backs = ['assets/img/8.jpg', 'assets/img/7.jpg', 'assets/img/backImg.jpg'];

class App extends Component {

    render() {

        return(

            <HashRouter>
                <div className="App">

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

                    <div className="Plandscape"><img src={ loadlogo } alt="" /></div>

                    <div className="loadElm"><img src={ loadlogo } alt="" /></div>

                    <Signup/>

                    <div id="backSlide">

                        {backs.map( back => (

                            <img className="backImg" src={ back } alt=""  />

                        ))}
                        
                    </div>

                    <Data/>
              
                    <Switch>
                        <Route path="/createteam">
                            <Createteam/>
                        </Route>
                        <Route path="/settings">
                            <Settings/>
                        </Route>
                        <Route path="/desk">
                            <Desk />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </HashRouter>

        );
    }
}

export default App;