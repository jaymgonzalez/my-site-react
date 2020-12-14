import React from 'react'
import ListCardComponent from './ListCardComponent'
import { projects } from '../data/projects-data.json'

const HomePage = () => {
  return (
    <>
      <div className="bg-hero-img w-full text-justify relative h-80 shadow-lg rounded-b-lg">
        <p className="select-none text-3xl sm:text-6xl text-center text-gray-50 py-28 tracking-tight font-extrabold">
          Welcome to my portfolio site
        </p>
      </div>
      <div className="text-gray-700 m-auto max-w-screen-md sm:pt-10">
        <p className="font-bold sm:text-xl content-center m-10">
          This is a portfolio site where I display past and current projects, I give information about how to contact me, will post my e-CV and one day y'all will see epidodes of my vlog 🎬
        </p>
        <p className="font-bold sm:text-xl content-center m-10">
          If you want to know what I'm working on please click <a className="text-blue-400 hover:text-gray-400 italic" href="/projects">here</a> or the projects tab
        </p>
        <p className="font-bold sm:text-xl content-center m-10">
          To contact me, go and fill up the form clicking <a className="text-blue-400 hover:text-gray-400 italic" href="/contact">here</a> or you can follow me on social media on the buttons bellow
        </p>

      </div>
      <div className="h-40 w-full bg-gradient-to-r from-cyan-300 via-teal-400 to-blue-500 shadow-lg rounded-b-lg"></div>
      <div className="max-w-screen-sm mx-auto">
        <p className="text-4xl text-center tracking-tight text-gray-700 font-extrabold py-10 sm:py-20">
          Current Projects
        </p>
        <p className="font-bold sm:text-xl content-center px-10">
          This is a small list of projects that I'm currently working on, if you would like to have a look at the full list please click <a className="text-blue-400 hover:text-gray-400 italic" href="/projects">here</a>
        </p>
      </div>

      <div className="max-w-screen-md mx-auto sm:py-10 grid sm:grid-cols-2 grid-cols-1 gap-4">
        < ListCardComponent projects={projects.slice(0, 2)} />
      </div>

    </>
  )
}

export default HomePage
