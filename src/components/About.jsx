import React from 'react'

const About = () => {
  return(
  <div name="About" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'> 
      <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            About
        </p>
      </div>
        <p className='text-xl mt-20'>
        I'm a first-generation graduate computer science student and software engineer with a love for everything tech.
          I enjoy a wide array of technologies ranging from low-level systems design to computer vision. Fueled by a passion for learning, I am constantly on the lookout to for opportunites to learn and grow.
          Checkout my tech blog: {' '} 
          <a
             href='https://kevstechinsights.blog/'
             target='_blank'
             className='text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600'
             rel='noreferrer noopener'>
                 Kev's Tech Blog
          </a>
      </p>
      <br />
        <p className='text-xl'>
        Apart from my tech skills, I also possess various leadership experiences in the workforce successfully leading teams of 25+ employees and business that grossed well-over $1.2 million monthly.
      </p>
    </div>
  </div>
  );
}

export default About