import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';

import Home from './components/Home';
import Happy from './components/Happy';
import Sleepy from './components/Sleepy';
import Guilty from './components/Guilty';
import {BrowserRouter, Route} from "react-router-dom";


// your code goes here
const Root = () => {
  // render(){
    return(
      <div>
        
      <BrowserRouter>
      <div>
      <Route path='/' component={Home} />
      <Route path='/' component={Guilty} />
      <Route path='/' component={Happy} />
      <Route path='/' component={Sleepy} />
      </div>
      </BrowserRouter>
      </div>
    );
  // };
};

ReactDOM.render( <Root />, document.getElementById('root') );
