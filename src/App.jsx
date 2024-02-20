import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './components/Home'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Dashbord from './components/Dashbord'



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/dashbord' element={<Dashbord />} />
        <Route path='*' element={<h1>page not found</h1> } />
      </Routes>
    </Router>
  )
}

export default App