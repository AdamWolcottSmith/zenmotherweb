import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import NavBar from './components/navbar/NavBar.js'
import Contact from './components/Contact'
import Live from './components/Live'
import Music from './components/Music'
import Store from './components/Store'
import Videos from './components/Videos'
import Home from './components/Home'

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/live' component={Live} />
          <Route path='/music' component={Music} />
          <Route path='/store' component={Store} />
          <Route path='/videos' component={Videos} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
