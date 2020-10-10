import React from "react";

import {
  HashRouter,
  Switch,
  Route
} from "react-router-dom";

import './App.css';

import Login from './login/login';

import Leads from './leads/leads';

import Telesales from './telesales/telesales';

import Designsettings from './designsettings/designsettings';

import Producttypes from './producttypes/producttypes';

import Deliveryrotation from './deliveryrotation/deliveryrotation';

export default function App() {
   
  return (
    <HashRouter>
        <>

            {/*<nav>
              <ul>
                <li>
                  <a href="/">Log Out</a>
                </li>
                <li>
                  <Link to="/leads">Leads</Link>
                </li>
               
              </ul>
            </nav>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <Link to="/about">Leads</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>*/}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
                <Route path="/deliveryrotation">
                    <Deliveryrotation/>
                </Route>
                <Route path="/producttypes">
                    <Producttypes/>
                </Route>
                <Route path="/designsettings">
                    <Designsettings/>
                </Route>
                <Route path="/telesales">
                    <Telesales/>
                </Route>
                <Route path="/leads">
                    <Leads />
                </Route>
                <Route path="/">
                    <Auth />
                </Route>
            </Switch>
        </>
    </HashRouter>
  );
}

function Auth() {
  return <Login/>;
}

// function Allleads() {
//   return <Leads/>;
// }