import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import Login from './pages/Login'
import AdminPanel from './pages/AdminPanel'
import Home from './pages/Home'
import HeroSection from './components/HeroSection'
import SolarEnergyService from './components/SolarEnergyService'
import SolarVideo from './components/solarVideo'
import Question from './components/Question'
import Footer from './components/Footer'
import Layout from './components/Layout'
import About from './pages/About'
import Map from './components/Map'
import SolarCalculator from './pages/SolarCalculator'
import AdminProtected from './utils/AdminProtected'
import Gallery from './pages/Gallery'
// import Map from './components/Map'

const App = () => {
  return (<>
    <ToastContainer />
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Navbar />} /> */}
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path="/herosection" element={<HeroSection />} />
          <Route path="/solarenergyservice" element={<SolarEnergyService />} />
          <Route path="/solarvideo" element={<SolarVideo />} />
          <Route path="/solarquestion" element={<Question />} />
          <Route path='/about' element={<About />} />
          <Route path='/map' element={<Map />} />
          <Route path='/solarCalculator' element={<SolarCalculator />} />
          <Route path='/gallery' element={<Gallery />} />
        </Route>

        <Route path="/adminpanel" element={<AdminProtected compo={<AdminPanel />} />}></Route>

        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App