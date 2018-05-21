import React from 'react';
import {Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar'
import Home from './components/Home'
import News from './components/News'
import Hist from './components/Hist'
import Members from './components/Members'
import PastMembers from './components/PastMembers'
import Services from './components/Services'
import Repertoire from './components/Repertoire'
import Contact from './components/Contact'
import NotFound from './components/NotFound'

import Footer from './components/Footer'

const Layout = ({ children }) =>
  <div id="body">
    <main>
      { children }
    </main>
  	<Footer title="A Minor A Capella" />
  </div>

const App = () =>
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/news' component={News} />
    		  <Route path='/history' component={Hist} />
    		  <Route path='/members' component={Members} />
          <Route path='/pastmembers' component={PastMembers} />
    		  <Route path='/services' component={Services} />
    		  <Route path='/repertoire' component={Repertoire} />
    		  <Route path='/contact' component={Contact} />
          <Route path='*' component={NotFound} />
        </Switch>
      </Layout>
    </Router>

export default App;
