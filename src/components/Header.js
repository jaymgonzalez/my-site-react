import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const Header = () => {

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.querySelector('#menu').classList.remove('hidden')
    } else {
      document.querySelector('#menu').classList.add('hidden')
    }

  }, [isOpen])

  const location = useLocation();

  useEffect(() => {
    setIsOpen(false)
  }, [location]);

  const handleKeyDown = event => {
    if (event.keyCode === 27) {
      setIsOpen(false)
    }
  }

  const headerItems = ["projects", "contact", "about me", "blog", "cv"]


  return (
    <div onKeyDown={handleKeyDown}>
      <nav className="bg-blue-200 flex items-center justify-between flex-wrap p-6">
        <div className="flex items-center justify-between flex-shrink-0">
          <NavLink className="text-blue-600 tracking-tight md:pl-10 hover:text-gray-100 capitalize font-extrabold sm:text-4xl text-2xl"
            to="/">
            jay m gonzalez 🙋🏽‍♂️</NavLink>
        </div>
        <div className="block lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            className="h-8 select-none cursor-pointer flex items-center p-2 border-2 rounded text-blue-600 border-blue-600 hover:text-gray-100 hover:border-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>

        </div>
        <div id="menu" className="w-full  lg:flex lg:w-auto">
          <div className="lg:flex-grow justify-items-center tracking-tight font-extrabold">
            {headerItems.map((item, i) =>
              <NavLink key={i} to={`/${item.split(' ')[0]}`} className="lg:border-gray-100 lg:border-2 lg:rounded-lg lg:p-2 uppercase block mt-4 lg:inline-block lg:mt-0 text-blue-600 hover:text-gray-100 lg:mr-4 lg:hover:border-blue-600 lg:hover:bg-gray-700">
                {item}
              </NavLink>
            )}
          </div>
        </div>
      </nav>
    </div >
  )
}

export default Header


