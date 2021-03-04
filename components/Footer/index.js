import React from 'react'

const Footer = () => {
  return (
    <div className="bg-gray-700 p-4 flex flex-col mt-40">
      <div className="mx-auto items-center flex flex-row text-center font-bold text-white">
        Project developed by: <a className="flex flex-row  items-center px-4" href='https://www.linkedin.com/in/george-gadelha/'>
          <img className="w-6 h-5 mr-2"
            src="./logo_linkedin.png" alt="Linkedin George">
          </img>
          <p className="hover:underline">
            George Gadelha
          </p>
        </a> |
        <a className="flex flex-row  items-center px-4" href="https://github.com/georgebgadelha">
          <img className="w-6 h-5 mr-2"
            src="./logo_github.png" alt="Linkedin George">
          </img>
          <p className="hover:underline">
            Github
          </p>
        </a>
      </div>
      <div className="pt-4 flex justify-evenly">
        <img className="h-10" src="/logo_fsm_week.png" alt="Logo FSM Week"/>
        <img className="h-10" src="/logo_devpleno.png" alt="Logo DevPleno"/>
      </div>
    </div>
  )
}

export default Footer