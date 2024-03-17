import React from 'react'
import html from "../assets/html.png"
import java from "../assets/java.png"
import react from "../assets/react.png"
import javascript from "../assets/javascript.png"
import matlab from "../assets/matlab.png"
import tailwind from "../assets/tailwind.png"
import css from "../assets/css.png"
import github from "../assets/github.png"
import python from "../assets/python.png"
import mongo from "../assets/mongo.png"
import c from "../assets/C.png"
import c_sharp from "../assets/Csharp.png"

const Experience = () => {
    const technologies = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500',
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500',
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500',
        },
        {
            id: 4,
            src: react,
            title: 'React',
            style: 'shadow-blue-500',
        },
        {
            id: 5,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-500',
        },
        {
            id: 6,
            src: java,
            title: 'Java',
            style: 'shadow-orange-500',
        },
        {
            id: 7,
            src: matlab,
            title: 'MATLAB',
            style: 'shadow-orange-500',
        },
        {
            id: 8,
            src: github ,
            title: 'GitHub',
            style: 'shadow-gray-500',
        },
        {
            id: 9,
            src: python,
            title: 'Python',
            style: 'shadow-yellow-500'
        },
        {
            id: 10,
            src: c,
            title: 'C',
            style: 'shadow-purple-500'
        },
        {
            id: 11,
            src: c_sharp,
            title: 'C#',
            style: 'shadow-purple-500'
        },
        {
            id: 12,
            src: mongo,
            title: 'MongoDB',
            style: 'shadow-green-500'
        },
    ]
  return (
      <div name="Experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
          <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
              <div className='pb-8'>
                  <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                  <p className='py-4'>Technologies I have worked with: </p>
              </div>
              <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                  {
                      technologies.map(({ id, src, title, style }) => (
                          <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                        <img src={src} alt="" className='w-20 mx-auto'/>
                              <p className='mt-4'>{title}</p>
                    </div>
                      ))
                  }
              </div>
          </div>
          
    </div>
  )
}

export default Experience