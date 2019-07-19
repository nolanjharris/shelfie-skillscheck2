import React, {Component} from 'react';
import './App.css';
import {HashRouter, Link} from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import axios from 'axios';
import routes from './Components/routes';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: []
    }
  }

 

  render(){
    return (
      <HashRouter>
        <div className="App">
          <Header />
          {routes}
        </div>
      </HashRouter>
    );
  }
}

export default App;
