import React from 'react'

const items = [
  {
    title: 'I was born',
    year: '1986',
    content: 'content about this item',
  },
  {
    title: 'Played with my first computer',
    year: '1993',
    content: 'content about this item',
  },
  {
    title: 'Became season ticket holder of Real Madrid',
    year: '1996',
    content: 'content about this item',
  },
  {
    title: 'Upgraded my first RAM memory',
    year: '1997',
    content: 'content about this item',
  },
  {
    title: 'Started playing Half-Life',
    year: '1999',
    content: 'content about this item',
  },
  {
    title: 'My first kiss',
    year: '2000',
    content: 'content about this item',
  },
]

const listItems = items.map((item, i) =>

  <div key={i}>
    <div className={`my-80 relative flex h-15 float-${i % 2 === 0 ? 'right' : 'left'} justify-between clear-both w-1/2`}
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
