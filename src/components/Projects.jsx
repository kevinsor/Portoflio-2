import React from 'react'
import mobileDevice from "../assets/mobile_device_astrophotography.png"
import shell from "../assets/shell_screenshot.png"
import portfolio from "../assets/portfolio.png"
const Projects = () => {

    const projects = [
        {
            id: 1,
            src: mobileDevice,
            link: 'https://github.com/kevinsor/ImprovingMobileDeviceAstrophotography',
            demo:'https://kevstechinsights.blog/mobile-device-astrophotography',
        },
        {
            id: 2,
            src: portfolio,
            link: '',
            demo: '',
        },
        {
            id: 3,
            src: shell,
            link: 'https://github.com/kevinsor/CommandLineShell/tree/main/p3_handout',
            demo: '',
        },
    ]
    return (
        <div name="Projects" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
              <div className='pb-8' >
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
                <p className='py-2'> Some of my work: </p>
                </div>
                <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {
                        projects.map(({ id, src, link, demo }) => (
                            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={src} alt='' className='rounded-md duration-200 hover:scale-105'></img>
                             <div className='flex items-center justify-center'>
                                    <a
                                        href={demo}
                                        target='_blank'
                                        className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                                        rel='noreferrer noopener'>
                                        Demo
                                    </a>
                                    <a
                                        href={link}
                                        target='_blank'
                                        className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                                        rel='noreferrer noopener'

                                    >
                                        Code
                                    </a>
                           </div>
                       </div>
                
                    ))
                }  
            </div>
        </div>
     </div>
  )
}

export default Projects