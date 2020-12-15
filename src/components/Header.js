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
      <nav className="bg-lightblue-800 flex items-center justify-between flex-wrap p-6">
        <div className="flex items-center justify-between flex-shrink-0">
          <NavLink className="text-cyan-200 tracking-tight md:pl-10 hover:text-gray-50 capitalize font-extrabold sm:text-4xl text-2xl"
            to="/">
            jay m gonzalez 🙋🏽‍♂️</NavLink>
        </div>
        <div className="block lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            className="h-8 select-none cursor-pointer flex items-center p-2 border-2 rounded text-cyan-200 border-cyan-200 hover:text-gray-50 hover:border-gray-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>

        </div>
        <div id="menu" className="w-full  lg:flex lg:w-auto">
          <div className="lg:flex-grow justify-items-center tracking-tight font-extrabold">
            {headerItems.map((item, i) =>
              <NavLink key={i} to={`/${item.split(' ')[0]}`} className="lg:border-green-500 lg:border-2 lg:rounded-lg lg:p-2 uppercase block mt-4 lg:inline-block lg:mt-0 text-cyan-200 hover:text-gray-50 lg:mr-4 lg:hover:border-cyan-200 lg:hover:bg-green-500" activeClassName="lg:border-pink-600">
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


