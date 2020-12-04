import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

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
      <nav className="bg-indigo-200 flex items-center justify-between p-6">
        <div className="flex items-center justify-between mr-10 flex-shrink-0">
          <Link className="text-indigo-600 tracking-tight md:pl-10 hover:text-gray-100 capitalize font-extrabold sm:text-4xl text-xl"
            to="/">
            jay m gonzalez 🙋‍♂️</Link>
        </div>
        <div className="block lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            className="select-none cursor-pointer flex items-center sm:p-2 p-1 border-2 rounded text-indigo-600 border-indigo-600 hover:text-gray-100 hover:border-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>

        </div>
        <div id="menu" className="w-full lg:flex lg:w-auto">
          <div className="lg:flex-grow justify-items-center tracking-tight font-extrabold ">
            {headerItems.map((item, i) =>
              <Link key={i - 10} to={`/${item.split(' ')[0]}`}
                className="
                lg:border-gray-200 
                lg:border-2 
                lg:rounded-lg 
                lg:p-2 
                uppercase 
                block 
                mt-4 
                lg:inline-block 
                lg:mt-0 
                text-indigo-600
                hover:text-gray-200 
                mr-4 
                lg:hover:border-indigo-600 
                lg:hover:bg-gray-700
                place-self-end
                ">
                {item}
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div >
  )
}

export default Header
