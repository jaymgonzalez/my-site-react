import React from 'react'

const ProjectsPage = () => {
  return (
    <div className="h-auto">
      <div className="bg-indigo-400 w-full text-justify relative h-auto shadow-lg rounded-b-lg">
        <p className="font-bold text-xl text-center p-10 text-gray-100">
          This is the page where I display past and current projects that I'm working on.
        </p>
      </div>
      <div className="grid grid-flow-col grid-cols-3 gap-4 items-center mx-6 text-gray-700 my-20 ">
        <div className="h-full border rounded-lg hover:border-indigo-300">
          <p className="font-bold text-lg md:text-3xl text-center uppercase">pokemon</p>
          <p className="text-sm text-center p-2">Memory game with Pokemon characters</p>
          <a className="flex justify-center sm:pt-6" href="projects/memory-game/index.html"><img className="flex rounded-full p-2" src="projects/memory-game/images/blank.png" alt="pokeball" /></a>
        </div>
        <div className="h-full border rounded-lg hover:border-indigo-300">
          <p className="font-bold text-lg md:text-3xl text-center uppercase">downtown</p>
          <p className="text-sm text-center p-2">Website development for creative agency</p>
          <a className="flex justify-center" rel="noreferrer" target="_blank" href="http://www.agenciadowntown.com"><img className="flex rounded-full  p-2" src="images/Logo-Agencia-Downtown.png" alt="downtown agency logo" /></a>
        </div>
        <div className="h-full border rounded-lg hover:border-red-300">
          <p className="font-bold text-lg md:text-3xl text-center uppercase">in progress</p>
          <p className="text-sm text-center p-2">Developing some nice things</p>
          <a className="flex justify-center cursor-not-allowed"><img className="flex p-2" src="images/work-in-progress.png" alt="programming in progress" /></a>
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage
