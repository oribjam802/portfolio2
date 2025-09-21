import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '@components/Header'
import Home from '@pages/Home'
import Projects from '@pages/Projects'
import Footer from '@components/Footer'

const App: React.FC = () => {
  return (
    <div className="relative">
      <Header />
      <div className="overflow-scroll snap-y snap-mandatory h-screen space-y-10">
        <main>
          <Home />
          <Projects />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
