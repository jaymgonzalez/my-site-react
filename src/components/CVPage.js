import React from 'react'
import img from '../img/JMG-CV.png'
import pdf from '../data/JMG-DO.pdf'

const CVPage = () => {
  return (
    <div>
      <a download="Jay-M-Gonzalez-CV.pdf" href={pdf} target="_blank" rel="noreferrer">
        <img className="mx-auto" src={img} alt="My CV" />
      </a>
    </div>
  )
}

export default CVPage
