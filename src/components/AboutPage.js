import React, { useEffect } from 'react'
import ListItemAbout from './ListItemAbout'

const scrollToTop = () =>
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })

const AboutPage = () => {
  useEffect(() => {
    const callback = (entries) => {
      entries.forEach((entry) => {
        entry.isIntersecting
          ? entry.target.classList.add('motion-safe:animate-fadeIn')
          : entry.target.classList.remove('motion-safe:animate-fadeIn')
      })
    }

    const observer = new IntersectionObserver(callback)

    const targets = document.querySelectorAll('.item')

    targets.forEach(function (target) {
      // Hide the element
      target.classList.add('opacity-10')

      // Add the element to the watcher
      observer.observe(target)
    })
  }, [])

  return (
    <>
      <div className="w-full h-screen mt-20 text-3xl text-center font-extrabold tracking-tight capitalize text-gray-800 select-none">
        scroll down to know more about me
        <svg
          className="h-10 w-10 mx-auto animate-bounce mt-20"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 17l-4 4m0 0l-4-4m4 4V3"
          />
        </svg>
      </div>
      <div className="mx-auto relative overflow-hidden m-10 py-10 w-5/6 select-none">
        <ListItemAbout />
        <div className="absolute left-lefty top-0 w-1 h-full bg-gray-200 z-10"></div>
      </div>
      <div className="w-full py-10">
        <button
          onClick={scrollToTop}
          className="mb-10 flex mx-auto p-6 bg-lightblue-800 rounded-3xl text-cyan-200 font-extrabold tracking-tight capitalize hover:bg-green-500 hover:text-gray-50"
        >
          Scroll to the top
        </button>
      </div>
    </>
  )
}

export default AboutPage
