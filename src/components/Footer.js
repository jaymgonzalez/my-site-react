import React from 'react'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { IconContext } from 'react-icons/lib'

const Footer = () => {
  return (
    <div>
      <footer className="pt-14 bg-blue-200 pb-6 text-gray-700">
        <div className="w-full px-4">
          <h4 className="text-center text-xl sm:text-3xl tracking-tight font-extrabold">Connect with me in the links below</h4>
          <div className="flex mt-10 sm:mt-16 justify-center items-center space-x-5">
            <IconContext.Provider value={{
              className: "bg-white rounded-lg p-1 hover:bg-gray-400 shadow-lg focus:outline-none inline-block text-center"
            }}>
              <a href="http://www.twitter.com/jaymgon" target="_blank" rel="noreferrer">
                <FiTwitter size={40} className="text-blue-400" />
              </a>
              <a href="http://www.linkedin.com/in/jay-m-gonzalez-7587ab43" target="_blank" rel="noreferrer">
                <FiLinkedin size={40} className="text-blue-600" />
              </a>
              <a href="https://github.com/liteljaime" target="_blank" rel="noreferrer">
                <FiGithub size={40} className="text-black" />
              </a>
            </IconContext.Provider>
          </div>
          <h5 className="text-xs text-center mt-20 pb-4">© 2020 JMG Inc. All Rights Reserved</h5>
        </div>
      </footer>
    </div >
  )
}

export default Footer

