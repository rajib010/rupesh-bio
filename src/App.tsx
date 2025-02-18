import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import React from 'react'
import { Navbar } from "./components/Navbar"
import Footer from "./components/Footer"
import ScrollToTop from "./lib/utils"
import "./utils/i18n"
import Certificates from "./pages/Certificates"


function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white dark:bg-slate-800">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/certificates" element={<Certificates />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App