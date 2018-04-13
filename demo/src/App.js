import React from 'react';
import {Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';

import Home from './components/Home'
import News from './components/News'
import Hist from './components/Hist'
import Members from './components/Members'
import Services from './components/Services'
import Repertoire from './components/Repertoire'
import Contact from './components/Contact'
import NotFound from './components/NotFound'

const Layout = ({ children }) =>
  <div>
    <main>
      { children }
    </main>
  </div>

const App = () =>
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/news' component={News} />
		  <Route path='/history' component={Hist} />
		  <Route path='/members' component={Members} />
		  <Route path='/services' component={Services} />
		  <Route path='/repertoire' component={Repertoire} />
		  <Route path='/contact' component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>

export default App;
