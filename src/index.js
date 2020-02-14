import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Es from './pages/es6'
ReactDOM.render(
    <BrowserRouter>
       <Switch>
            <Route path='/' component={Es}/>
       </Switch>
    </BrowserRouter>,
    document.querySelector('#root')
)
