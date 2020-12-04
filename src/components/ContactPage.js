import React from 'react'

const ContactPage = () => {
  return (
    <div>
      <div className="bg-indigo-400 w-full text-justify relative h-auto shadow-lg rounded-b-lg">
        <p className="font-bold text-xl text-center py-10 text-gray-100">
          Contact me by completing the form below or follow me on social media using the icons at the bottom
        </p>
      </div>
      <form id="contact-form" className="w-full max-w-sm mx-auto py-20" nonvalidate>
        <div className="md:flex md:items-start mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 pt-2" for="full-name">
              Full Name
        </label>
          </div>
          <div className="md:w-2/3" x-data="{ isValid: true }">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 
          text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-400"
              name="fullname" id="fullname" type="text" placeholder="John Jones" pattern="[A-Za-z]{3,}" required />
            <p className="pt-2 text-red-500 text-xs italic">
              Please enter a valid name
        </p>
          </div>
        </div>
        <div className="md:flex md:items-start mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pt-2 pr-4" for="email">
              Email
        </label>
          </div>
          <div className="md:w-2/3" x-data="{ isValid: true }">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 
          text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-400"
              name="email" id="email" type="email" placeholder="holi@gmail.com"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required />
            <p className="pt-2 text-red-500 text-xs italic">
              Please enter a valid email address
            </p>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="comment">
              Comment
            </label>
          </div>
          <div className="md:w-2/3" x-data="{ isValid: true }">
            <textarea
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight 
              focus:outline-none focus:bg-white focus:border-indigo-400" name="comment" id="comment" cols="30" rows="10"
            >
            </textarea>
            <p className="pt-2 text-red-500 text-xs italic">
              Please write someting on the box
            </p>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button className="shadow bg-indigo-400 hover:bg-indigo-300 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
              Contact
        </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContactPage
