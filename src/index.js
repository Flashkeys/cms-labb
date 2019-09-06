import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home.jsx';
import Blogg from './Blogg.jsx';
import Arthurs from './Arthurs.jsx';
import NotFound from './NotFound.jsx';

const Index = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Blogg/:id" component={Blogg} />
        <Route path="/Arthurs" component={Arthurs} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}
ReactDOM.render(<Index />, document.getElementById('root')); 