import React from 'react'
import { useForm } from "react-hook-form";


const Input = ({ name, register, errors, placeholder }) => (
  <>
    <label className="block text-gray-700 font-bold mb-1 pr-4 pt-2 capitalize" htmlFor={name}>{name}</label>
    <input
      name={name}
      ref={register}
      placeholder={placeholder}
      className="bg-gray-100 appearance-none border-2 border-gray-200 w-full rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-400 "
      type="text"
    />
    {errors && <p className="pt-2 text-red-500 text-xs italic">
      Please enter a valid {name}
    </p>}
  </>
)

const ContactPage = () => {

  const { register, handleSubmit, errors } = useForm()

  function onSubmit(values) {
    console.log(values);
  }

  return (

    <form id="contact-form" className="w-full max-w-sm mx-auto py-20" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-6">
        <Input name="name" register={register({ required: true, pattern: /[A-Za-z ]{3,}/ })} errors={errors.name} placeholder="Pepito" />
        <Input name="email" register={register({ required: true, pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })} errors={errors.email} placeholder="pepito@myemail.com" />
        <div className="mb-6">
          <label className="block text-gray-700 font-bold my-2 pr-4" htmlFor="comment">
            Comment
           </label>
          <textarea
            className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight 
              focus:outline-none focus:bg-white focus:border-blue-400" name="comment" cols="30" rows="10" placeholder="Write your message"
            ref={register({ required: true })}
          />
          {errors.comment &&
            <p className="pt-2 text-red-500 text-xs italic">
              Please write someting on the box
            </p>
          }
          <button className="shadow mx-auto my-8 flex bg-blue-200 hover:bg-blue-300 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
            Contact
         </button>
        </div>
      </div>
    </form>
  )
}

export default ContactPage
