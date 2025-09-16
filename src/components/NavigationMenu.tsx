import React from 'react'

type Props = {
  isMenuOpen: boolean
}

const NavigationMenu: React.FC<Props> = ({ isMenuOpen }) => {
  return (
    <>
      {isMenuOpen && (
        <nav className="w-96 h-screen p-10 bg-gray-800 absolute top-0 right-0 z-10">
          <ul className="flex flex-col space-y-8 px-4 py-10">
            {[0, 1, 2].map(index => (
              <li
                key={index}
                className="flex items-center justify-start before:w-2 before:h-2 before:rounded-full before:content-[''] before:block before:w-0 before:h-0 before:border before:border-white before:rounded-full"
              >
                <a className="text-gray-700 hover:text-blue-600 transition-colors pl-3 text-white">
                  PAGE TOP
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  )
}

export default NavigationMenu
