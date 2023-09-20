import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import AankomendeOptredens from './views/aankomende-optredens'
import MeerOverOns from './views/meer-over-ons'
import Home from './views/home'
import LidWorden from './views/lid-worden'
import Contact from './views/contact'
import HuurOnsIn from './views/huur-ons-in'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <div>
        <Route
          component={AankomendeOptredens}
          exact
          path="/aankomende-optredens"
        />
        <Route component={MeerOverOns} exact path="/meer-over-ons" />
        <Route component={Home} exact path="/" />
        <Route component={LidWorden} exact path="/lid-worden" />
        <Route component={Contact} exact path="/contact" />
        <Route component={HuurOnsIn} exact path="/huur-ons-in" />
        <Route component={NotFound} path="**" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
