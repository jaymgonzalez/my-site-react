import React from 'react'

// bg-gradient-to-r from-orange-400 via-red-500 to-pink-500

const HomePage = () => {
  return (
    <>
      <div className="bg-hero-picture w-full text-justify relative h-auto shadow-lg rounded-b-lg">
        <p className="font-bold text-2xl sm:text-5xl text-center text-gray-100 py-10">
          Hi, Thanks for coming to my site, appreciated! 🙋‍♂️
        </p>
      </div>
      <div className="text-gray-700 m-auto max-w-screen-md sm:pt-10">
        <p className="font-bold sm:text-xl content-center m-10">
          This is a portfolio site where I display past and current projects, I give information about how to contact me, will post my e-CV and one day y'all will see epidodes of my vlog 🎬
        </p>
        <p className="font-bold sm:text-xl content-center m-10">
          If you want to know what I'm working on please click <a className="text-indigo-400 hover:text-gray-400 italic" href="#projects">here</a> or the projects tab
        </p>
        <p className="font-bold sm:text-xl content-center m-10">
          To contact me, go and fill up the form clicking <a className="text-indigo-400 hover:text-gray-400 italic" href="#contact">here</a> or you can follow me on social media on the buttons bellow
        </p>
        <p className="font-bold text-xl sm:text-2xl text-center my-20">
          🚧 Site under construction wait a bit longer than expected🚧
        </p>
      </div>
    </>
  )
}

export default HomePage
