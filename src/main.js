'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { HashRouter, Route } from 'react-router-dom';
import Home from './components/homePage';
import About from './components/about/aboutPage';
import Authors from './components/authors/authorPage';
import AddAuthor from './components/authors/manageAuthorPage'
import NotFoundPage from './components/4o4'
const supportsHistory = 'pushState' in window.history;

ReactDOM.render( <HashRouter baseName='/app' forceRefresh={!supportsHistory}>
    <App>
     <Route  exact path='/' component={Home} />
    <Route path='/authors' component={Authors} />
    
    <Route  path='/about' component={About}/>
    <Route path='/addAuthor' component={AddAuthor}/>
    </App>
  </HashRouter>, document.getElementById('app'));
  