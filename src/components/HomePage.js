import React from 'react'
import ListCardComponent from './ListCardComponent'
import { projects } from '../data/projects-data.json'
import ContactPage from './ContactPage'
import AboutMeList from './AboutMeList'

const HomePage = () => {
  return (
    <>
      <div className="bg-hero-img w-full text-justify relative h-80 shadow-lg rounded-b-lg">
        <p className="select-none text-3xl sm:text-6xl text-center text-gray-50 py-28 tracking-tight font-extrabold">
          Welcome to my portfolio site
        </p>
      </div>
      <div className="text-gray-700 m-auto max-w-screen-sm sm:py-10">
        <p className="font-bold sm:text-xl text-center m-10 sm:py-4">
          Hi 🙋🏽‍♂️ I am Jay, I build experiences for the web.
        </p>
        <p className="font-bold sm:text-xl text-center m-10 sm:py-4">
          I've been working in the digital sector since 2013 when I built my first website. I have also created a ton of AB tests and analytics implementations.
        </p>
        <p className="font-bold sm:text-xl text-center m-10 sm:py-4">
          Now I do Front End development with React and Tailwind. I'm also learning Back End with Express and MongoDB.
        </p>
        <p className="font-bold sm:text-xl text-center m-10 sm:pt-4">
          Bellow are a few examples of my work and ways to contact.
        </p>
      </div>
      <div className="h-40 w-full bg-gradient-to-r from-cyan-300 via-teal-400 to-blue-500 shadow-lg rounded-b-lg my-6 sm:my-10"></div>
      <div className="max-w-screen-sm mx-auto text-gray-700">
        <p className="text-4xl text-center tracking-tight font-extrabold py-10 sm:py-20">
          Current Projects
        </p>
        <p className="font-bold sm:text-xl text-justify px-10">
          This is a small list of projects that I'm currently working on, if you would like to have a look at the full list please click <a className="text-blue-400 hover:text-gray-400 italic" href="/projects">HERE </a> to go to the Projects tab
        </p>
      </div>

      <div className="max-w-screen-md mx-auto sm:py-10 grid sm:grid-cols-2 grid-cols-1 gap-4">
        < ListCardComponent projects={projects.slice(0, 4)} />
      </div>
      <div className="h-40 w-full bg-gradient-to-l from-cyan-300 via-teal-400 to-blue-500 shadow-lg rounded-b-lg my-6 sm:my-10"></div>
      <div className="max-w-screen-sm mx-auto text-gray-700">
        <p className="text-4xl text-center tracking-tight font-extrabold py-10 sm:py-20">
          About Me
        </p>
        <AboutMeList />
        <div className="font-bold sm:text-xl text-center p-10 sm:py-20">
          <p>
            To see a full list of live events click <a className="text-blue-400 hover:text-gray-400 italic" href="/about"> HERE </a></p>
          <p className="pt-10 sm:pt-20">For a recruiter ready CV click <a className="text-blue-400 hover:text-gray-400 italic" href="/cv">HERE </a>
          </p>
        </div>
      </div>
      <div className="h-40 w-full bg-gradient-to-r from-cyan-300 via-teal-400 to-blue-500 shadow-lg rounded-b-lg my-6 sm:my-10"></div>
      <div className="max-w-screen-sm mx-auto text-gray-700">
        <p className="text-4xl text-center tracking-tight font-extrabold py-10 sm:py-20">
          Contact Me
        </p>
        <p className="font-bold sm:text-xl content-center px-10 text-justify">
          If you wan to get in touch, fill this form or send me a message in any of the social networks displayed in the footer. DM's are open.
        </p>
        <ContactPage />
      </div>
    </>
  )
}

export default HomePage
