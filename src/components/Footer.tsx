import React from 'react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-slate-700 to-slate-600 text-white py-12 mt-auto">
      <div className="border-t border-slate-600 pt-4 text-center">
        <p className="text-slate-400 m-0">
          &copy; {currentYear} Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
