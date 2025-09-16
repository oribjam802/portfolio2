import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '@components/Header'
import Home from '@pages/Home'
import About from '@pages/About'
import Projects from '@pages/Projects'
import Contact from '@pages/Contact'
import Footer from '@components/Footer'

const App: React.FC = () => {
  return (
    <Router>
      <div className="relative">
        <Header />
        <main className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
