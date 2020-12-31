import React from 'react'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { IconContext } from 'react-icons/lib'

const d = new Date()

const Footer = () => {
  return (
    <div>
      <footer className="pt-14 bg-lightblue-800 pb-6 text-cyan-200">
        <div className="w-full px-4">
          <h4 className="text-center text-xl sm:text-3xl tracking-tight font-extrabold">Connect with me in the links below</h4>
          <div className="flex mt-10 sm:mt-16 justify-center items-center space-x-5">
            <IconContext.Provider value={{
              className: "bg-white rounded-lg p-1 hover:bg-cyan-200 shadow-lg focus:outline-none inline-block text-center",
              size: 40
            }}>
              <a href="http://www.twitter.com/jaymgon" target="_blank" rel="noreferrer">
                <FiTwitter className="text-blue-400" />
              </a>
              <a href="http://www.linkedin.com/in/jay-m-gonzalez-7587ab43" target="_blank" rel="noreferrer">
                <FiLinkedin className="text-blue-600" />
              </a>
              <a href="https://github.com/liteljaime" target="_blank" rel="noreferrer">
                <FiGithub className="text-black" />
              </a>
            </IconContext.Provider>
          </div>
          <h5 className="text-xs text-center mt-20 pb-4">© {d.getFullYear()} JMG Inc. All Rights Reserved</h5>
        </div>
      </footer>
    </div >
  )
}

export default Footer

