import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Dashboard from './pages/Dashboard'


function App() {
  return (
    <div className='h-screen text-white bg-zinc-900'>
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage />}></Route>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/register' element={<RegisterPage />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
        </Routes>
      </Router>

    </div>
  )
}

export default App