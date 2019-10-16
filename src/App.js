import React from 'react'
import Home from './components/Home'
import {BrowserRouter, Route} from 'react-router-dom'
import WelcomeScreen from './components/WelcomeScreen'

function App(){
    return(
        <BrowserRouter>
        <div>
             <Home/>
        </div>
    
    <Route path = '/components/WelcomeScreen' componen={WelcomeScreen}/>
  </BrowserRouter> 
  )
}

export default App