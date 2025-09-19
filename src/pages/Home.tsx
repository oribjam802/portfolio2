import React from 'react'
import logo from '@assets/images/img/img-logo.svg'

const Home: React.FC = () => {
  return (
    <section className="snap-start w-full h-screen flex flex-col justify-center items-center">
      <div className="space-y-10">
        <div className="text-center">
          <img src={logo} alt="Logo" className="inline-block mx-auto" />
        </div>
        <div className="space-y-5">
          <h1 className="text-5xl font-Rokkitt tracking-extraWide text-center">
            YUKI WADA
          </h1>
          <div className="block text-2xl font-Rokkitt tracking-extraWide text-center">
            My Profile & Job History
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
