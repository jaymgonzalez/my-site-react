import React from 'react'
import { Link } from 'react-router-dom'

const icons = [
  {
    name: "university",
    path: '<path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" /><path fill="#fff" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /> <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />',
    desciption: "Studied Finance at Sussex Uni"
  },
  {
    name: "",
    path: '<path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />',
    desciption: "Self-taught Coder"
  },
  {
    name: "",
    path: '<path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />',
    desciption: "Love to Work in Tech"
  },
  {
    name: "",
    path: '<path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />',
    desciption: "Backpacked the World for 3 Years"
  },
  {
    name: "",
    path: ' <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />',
    desciption: "Quick Learner"
  },
  {
    name: "",
    path: '<path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />',
    desciption: "Can Talk 3 Languages"
  },
]


const itemsList = icons.map((icon, i) =>
  <div key={i} className="w-36 py-4">
    <svg className="mx-auto h-16 w-16 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} dangerouslySetInnerHTML={{ __html: icon.path }}></svg>
    <h2 className="text-gray-800 text-center tracking-tight font-bold p-2">
      {icon.desciption}
    </h2>
  </div>
)

const AboutMeList = () => {
  return (
    <>
      <div className="pb-10 mx-auto max-w-screen-md justify-items-center grid grid-cols-2 md:grid-cols-3 gap-4">
        {itemsList}
      </div>
      <div className="font-bold sm:text-xl text-center p-4 sm:py-14">
        <p>.............................</p>
      </div>
      <div className="py-10 sm:pb-20 mx-auto max-w-screen-md justify-items-center grid grid-cols-2">
        <Link to="/cv">
          <div className="w-36 h-36 relative">
            <div class="absolute inset-0 transform  hover:scale-125 transition duration-300 py-4">
              <svg className="mx-auto h-16 w-16 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h2 className="text-gray-800 text-center tracking-tight font-bold">
                Have a Look at my CV
              </h2>
            </div>
          </div>
        </Link>
        <Link to="/about">
          <div className="w-36 relative">
            <div class="absolute inset-0 transform  hover:scale-125 transition duration-300 py-4">
              <svg className="mx-auto h-16 w-16 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
              </svg>
              <h2 className="text-gray-800 text-center tracking-tight font-bold">
                Have a Look at my Personal Story
              </h2>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default AboutMeList
