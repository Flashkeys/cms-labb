import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home.jsx';
import Blogg from './Blogg.jsx';
import Arthurs from './Arthurs.jsx';
import NotFound from './NotFound.jsx';

const Index = () => {

  const [results, setResult] = useState([]);

  useEffect(() => {

    axios.get("http://192.168.99.100:8080/api/collections/get/Blogpost")
      .then(res => {
        console.log(res.data.entries);

        setResult(res.data.entries)
      })
      .catch(function (error) {
        alert('Error fetching the api')
      });

  }, [])

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Home results={results} />} />
        <Route path="/Blogg" render={() => <Blogg results={results} />} />
        <Route path="/Arthurs" component={Arthurs} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}
ReactDOM.render(<Index />, document.getElementById('root')); 