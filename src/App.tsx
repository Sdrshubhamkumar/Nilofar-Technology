import React from 'react'
import TopNavbar from './components/Navbar/TopNavBar'
import MainNavbar from './components/Navbar/MainNavbar'
import Home from './pages/home/home'

const App = () => {
  return (
    <div>
      <TopNavbar />
      <MainNavbar />
      <Home />
    </div>
  )
}

export default App
