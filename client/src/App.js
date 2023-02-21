import React from 'react';
import {BrowseRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './Pages/Home'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component ={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
