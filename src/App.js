import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Route,
  Switch,
  HashRouter
} from 'react-router-dom';

import NavBar from './components/navbar/navbar';
import HomePage from './components/home/home';
import TeamPage from './components/team/teamPage';
import Footer from './components/footer/footer';
import GetInvolve from './components/involve/involve'
import Card from './components/card/card'

function App() {
  return (
    <HashRouter>
      <NavBar />
      <Switch>
        <Route path='/' exact><HomePage /></Route>
        <Route path='/about' exact><TeamPage /></Route>
        <Route path='/involvement' exact><GetInvolve /></Route>
      </Switch>
      <Card></Card>
      <Footer />
    </HashRouter>
    
  );
}

export default App;
