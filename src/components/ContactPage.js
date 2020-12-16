import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import ModalFormSubmission from './ModalFormSubmission';


const Input = ({ name, register, errors, placeholder }) => (
  <>
    <label className="block text-gray-800 font-bold mb-1 pr-4 pt-2 capitalize" htmlFor={name}>{name}</label>
    <input
      name={name}
      id={name}
      ref={register}
      placeholder={placeholder}
      className={`bg-gray-50 appearance-none border-2 w-full rounded py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:bg-white ${errors ? "border-red-500" : "border-gray-200"} focus:border-lightblue-800 "
      type="text`}
    />
    {errors && <p className="pt-2 text-red-500 text-xs italic">
      Please enter a valid {name}
    </p>}
  </>
)

const ContactPage = () => {

  const [submissionState, setSubmissionState] = useState('off')

  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
  })

  const onSubmit = (data, e) => {

    setSubmissionState('loading')
    const formURL = "https://b2k49caqfe.execute-api.us-east-1.amazonaws.com/Prod/submitForm"

    fetch(formURL, {
      method: 'post',
      body: JSON.stringify(data)
    })
      .then(() => {
        e.target.reset()
        setSubmissionState('successful')
        setTimeout(() => setSubmissionState('off'), 2500)
      })
      .catch(() => {
        setSubmissionState('unsuccessful')
        setTimeout(() => setSubmissionState('off'), 2500)
      })
    e.preventDefault()
  }

  return (

    <form id="contact-form" className="w-full max-w-sm mx-auto py-20 px-2" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-6">
        <Input name="name" register={register({ required: true, pattern: /[A-Za-z ]{3,}/ })} errors={errors.name} placeholder="Pepito" />
        <Input name="email" register={register({ required: true, pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })} errors={errors.email} placeholder="pepito@myemail.com" />
        <div className="mb-6">
          <label className="block text-gray-800 font-bold my-2 pr-4" htmlFor="comment">
            Comment
           </label>
          <textarea
            className={`bg-gray-50 appearance-none border-2 ${errors.comment ? "border-red-500" : "border-gray-200"} rounded w-full py-2 px-4 text-gray-800 leading-tight 
              focus:outline-none focus:bg-white focus:border-lightblue-800`} id="comment" name="comment" cols="30" rows="10" placeholder="Write your message"
            ref={register({ required: true })}
          />
          {errors.comment &&
            <p className="pt-2 text-red-500 text-xs italic">
              Please write someting on the box
            </p>
          }
          <button className="mx-auto my-16 shadow-2xl hover:text-gray-50 flex bg-lightblue-800 hover:bg-green-500 focus:shadow-outline focus:outline-none text-cyan-200 text-xl font-extrabold py-3 px-6 rounded-xl" type="submit">
            Contact
         </button>
          <ModalFormSubmission state={submissionState} />
        </div>
      </div>
    </form>
  )
}

export default ContactPage
