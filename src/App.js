import React from 'react'
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/registration/SignIn'
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/signin' element={<SignIn/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App