import React, { useEffect } from 'react'
import ListItemAbout from './ListItemAbout'

const scrollToTop = () => window.scrollTo({
  top: 0,
  behavior: "smooth"
})

const AboutPage = () => {

  useEffect(() => {
    const callback = (entries) => {
      entries.forEach(entry => {
        entry.isIntersecting ? entry.target.classList.add("motion-safe:animate-fadeIn") : entry.target.classList.remove("motion-safe:animate-fadeIn")
      });
    }

    const observer = new IntersectionObserver(callback)

    const targets = document.querySelectorAll(".item")

    targets.forEach(function (target) {
      // Hide the element
      target.classList.add("opacity-10");

      // Add the element to the watcher
      observer.observe(target);
    });
  }, [])

  return (
    <>
      <div className="w-full my-20 text-3xl text-center font-extrabold tracking-tight capitalize text-gray-800 select-none">
        scroll down to know more about me
      </div>
      <div className="mx-auto relative overflow-hidden m-10 p-10 w-5/6 select-none">
        <ListItemAbout />
        <div className="absolute left-lefty top-0 w-1 h-full bg-gray-200 z-10"></div>
      </div>
      <div className="w-full py-10">
        <button onClick={scrollToTop} className="flex mx-auto p-6 bg-cyan-200 rounded-3xl text-gray-800 font-extrabold tracking-tight capitalize">Scroll to the top</button>
      </div>
    </>
  )
}


export default AboutPage
