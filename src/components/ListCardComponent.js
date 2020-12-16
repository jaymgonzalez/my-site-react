import React from 'react'
import img from '../img/jaime-profile-pict.jpg'


const ListCardComponent = (props) =>
  props.projects.map((item, i) =>
    <div key={i}>
      <div className="py-4">
        <div>
          <div className="p-8">
            <div className="shadow-xl rounded-lg">
              <a href={item.project_link}>
                <div className={`${item.project_link.length > 0 ? 'hover:from-lightblue-800 hover:to-pink-600 hover:text-gray-50' : 'cursor-default'} h-64 bg-gradient-to-r from-cyan-200 to-green-500 bg-cover bg-center rounded-t-lg flex items-center justify-center text-lightblue-800`}>
                  <p className="tracking-tight font-extrabold text-4xl text-center p-1">{item.title}</p>
                  <p></p></div>
              </a>
              <div className="bg-white rounded-b-lg px-4">
                <div className="relative">
                  <img className="right-0 w-16 h-16 rounded-full mr-4 shadow-lg absolute -mt-8" src={img} alt={item.author} />
                </div>
                <div className="py-8">
                  <p className="text-sm text-gray-600"><strong className="font-extrabold">From</strong> {item.author}</p>
                  <p className="mt-6 text-gray-800 text-justify font-semibold leading-snug tracking-tight">{item.description}</p>
                  <div className="flex items-center justify-center flex-wrap px-1 pt-8 pb-2">
                    {item.tags.map((tag, i) =>
                      <span key={i + 100} className="cursor-default uppercase tracking-wide inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-800 mr-2 mb-2">{`#${tag}`}</span>
                    )}
                  </div>
                  {item.github_link.length > 0 &&
                    <a className="flex" href={item.github_link}>
                      <p className="flex flex-col mx-auto text-gray-800 text-xs mt-4 uppercase font-bold hover:text-pink-600">GitHub repo</p>
                    </a>
                  }
                  <p></p></div>
                <p></p></div>
              <p></p></div>
          </div>
        </div>
      </div>
    </div>
  )

export default ListCardComponent
