import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../src/styles/app.css'
import MarianDevotion from '../src/pages/MarianDevotion'
import Navbar from './components/Navbar';
import Home from '../src/pages/Home'
function App() {
 

  return (
    <>
     <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mary" element={<MarianDevotion />} />
            </Routes>
        </Router>
    </>
  )
}

export default App
