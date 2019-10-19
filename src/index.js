import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Home from '../src/components/Home'
import WelcomeScreen from '../src/components/WelcomeScreen'
import DuringYourStay from '../src/components/DuringYourStay'
import Transportation from '../src/components/Transportation'
import HowToGetToTheTrain from '../src/components/HowToGetToTheTrain'


const routing = (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/WelcomeScreen" component={WelcomeScreen} />
        <Route path="/DuringYourStay" component={DuringYourStay} />
        <Route path="/Transportation" component={Transportation} />
        <Route path="/HowToGetToTheTrain" component={HowToGetToTheTrain} />

      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));


