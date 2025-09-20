import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '@components/Header'
import Home from '@pages/Home'
import Projects from '@pages/Projects'

const App: React.FC = () => {
  return (
    <div className="relative">
      <Header />
      <main className="overflow-scroll snap-y snap-mandatory h-screen space-y-10">
        <Home />
        <Projects />
      </main>
    </div>
  )
}

export default App
