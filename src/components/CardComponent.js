import React from 'react'
import ListCardComponent from './ListCardComponent'
import { projects } from '../data/projects-data.json'


const CardComponent = () => {
  return (
    <div className="sm:py-10 grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4">
      < ListCardComponent projects={projects} />
    </div>

  )
}

export default CardComponent
