import React from 'react'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { IconContext } from 'react-icons/lib'

const Footer = () => {
  return (
    <div>
      <footer className="pt-14 relative bg-gray-200 pt-8 pb-6 text-gray-700">
        <div className="container px-4">
          <div className="flex flex-wrap">
            <div className="w-full md:w-6/12 px-4">
              <h4 className="text-xl md:text-3xl font-semibold">Find more about me in the links below</h4>
              <h5 className="md:text-lg my-10 mb-2">Here you can find more about me:</h5>
              <div className="mt-10 mx-auto">
                <IconContext.Provider value={{
                  className: "bg-white rounded-lg p-1 hover:bg-gray-200 shadow-lg focus:outline-none mr-4 md:mr-10 inline-block text-center"
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
              <h5 className="text-xs md:text-sm text-center mt-20 pb-4">© 2020 JMG Inc. All Rights Reserved</h5>
            </div>
            <div className="w-full md:w-6/12 px-20"></div>
          </div>
        </div>
      </footer>
    </div >
  )
}

export default Footer

