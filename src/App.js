import React from 'react'
import AboutUs from './pages/AboutUs'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Home from './components/home/Home'
import PageNotFound from './pages/PageNotFound'
import BookingPage from './pages/BookingPage'
import ServicesPage from './pages/ServicesPage'
import RoomPage from './pages/RoomPage'
import ContactPage from './pages/ContactPage'
import TestimonialPage from './pages/TestimonialPage'
import TeamPage from './pages/TeamPage'

import "./css/style.css"
import "./css/bootstrap.min.css"
import "./css/animate.css"
import "./css/animate.min.css"
import "./App.css"


import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/*" element={<PageNotFound />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/testimonial" element={<TestimonialPage />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/rooms" element={<RoomPage />} />
            <Route path="/services" element={<ServicesPage />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App

