import React from 'react'
import aboutMeData from '../data/about-me.json'


const ListItemAbout = () => {
  return (
    aboutMeData.items.map((item, i) =>
      <div key={i}>
        <div className={`my-60 relative flex h-15 ${i % 2 === 0 ? 'float-right' : 'float-left'} justify-between clear-both w-1/2`}
          dir={`${i % 2 === 0 ? 'ltr' : 'rtl'}`}>
          <div className="box-border absolute h-6 w-6 rounded-full border-white border-2 bg-blue-200 mt-2 z-50 -m-3"></div>
          <div className="w-11/12 mx-auto px-4 text-gray-700 item">
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
  )
}

export default ListItemAbout
