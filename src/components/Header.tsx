import React, { useState } from 'react'
import NavigationMenu from '@components/NavigationMenu'
import clsx from 'clsx'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <header className="fixed top-0 right-0 z-20">
        <div className="w-full flex flex-col justify-end items-end z-100">
          <button
            className="flex flex-col justify-center items-center relative transition-all duration-300 box-border justify-items-end w-12 h-12 bg-gray-800 z-50"
            onClick={toggleMenu}
          >
            {[0, 1, 2].map(index => (
              <span
                key={index}
                className={clsx(
                  'absolute left-0 right-0 mx-auto w-6 h-0.5 bg-white rounded-sm duration-500 transition-all',
                  {
                    'top-4': index === 0 && !isMenuOpen,
                    'top-1/2 transform -translate-y-1/2':
                      index === 1 && !isMenuOpen,
                    'bottom-4': index === 2 && !isMenuOpen,
                  },
                  {
                    'top-1/2 -rotate-45 -translate-y-1/2':
                      index === 0 && isMenuOpen,
                    'top-1/2 transform rotate-45 -translate-y-1/2':
                      index === 1 && isMenuOpen,
                    hidden: index === 2 && isMenuOpen,
                  }
                )}
              ></span>
            ))}
          </button>
          <NavigationMenu isMenuOpen={isMenuOpen} onMenuClose={closeMenu} />
        </div>
      </header>
      {isMenuOpen && (
        <div
          className="w-screen h-screen bg-black/40 absolute top-0 left-0 z-10"
          onClick={closeMenu}
        ></div>
      )}
    </>
  )
}

export default Header
