import React, { user } from 'react'
import aboutMeData from '../data/about-me.json'

const callback = (entries) => {
  entries.forEach(entry => {
    entry.isIntersecting ? entry.target.classList.add("motion-safe:animate-fadeIn") : entry.target.classList.remove("motion-safe:animate-fadeIn")
  });
}

const observer = new IntersectionObserver(callback)

const targets = document.querySelectorAll(".item")

targets.forEach(function (target) {
  // Hide the element
  target.classList.add("opacity-20");

  // Add the element to the watcher
  observer.observe(target);
});


const listItems = aboutMeData.items.map((item, i) =>

  <div key={i}>
    <div className={`my-80 relative flex h-15 ${i % 2 === 0 ? 'float-right' : 'float-left'} justify-between clear-both w-1/2 item`}
      dir={`${i % 2 === 0 ? 'ltr' : 'rtl'}`}>
      <div className="box-border absolute h-6 w-6 rounded-full border-white border-2 bg-blue-200 mt-2 z-50 -m-3"></div>
      <div className="w-11/12 mx-auto px-4 text-gray-700">
        <h3 className="my-1 text-2xl font-extrabold tracking-tight">
          {item.title}
        </h3>
        <h1 className="text-xl font-extrabold tracking-tight">
          {item.year}
        </h1>
      </div>
    </div>
  </div>

)

const AboutPage = () => {
  return (
    <>
      <div className="w-full my-20 text-3xl text-center font-extrabold tracking-tight capitalize text-gray-700">
        scroll down to know more about me
    </div>
      <div className="mx-auto relative overflow-hidden m-10 p-10 w-5/6">
        {listItems}
        <div className="absolute left-lefty top-0 w-1 h-full bg-gray-200 z-10">
        </div>
      </div>
    </>
  )
}

export default AboutPage
