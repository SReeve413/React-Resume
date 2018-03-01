import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

import HomePage from './pages/Homed'
import NotFoundPage from './pages/NotFound'
import About from './pages/About'
import Education from './pages/Education'
import Employment from './pages/Employment'
import Skills from './pages/Skills'



export default () => (
    <div >

        <Router>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/about" component={About} />
                <Route path="/education" component={Education} />
                <Route path="/employment" component={Employment} />
                <Route path="/skills" component={Skills} />
                <Route component={NotFoundPage} />
            </Switch>
        </Router>
    </div>

)
