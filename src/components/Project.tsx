import React from 'react'
import Image from 'next/image'

type Props = {}

function Project({}: Props) {
  return (
    <div>
        <section className='flex items-center max-w-6xl  mx-auto p-2 space-x-2 py-5 mt-6 '>
        
        <Image src={'https://www.remotasks.com/static/images/collaboration.svg'} alt={'amkk'} width={240} height={240}/>
        </section>

        <section className='flex items-center max-w-6xl  mx-auto p-2 space-x-2 py-5 '>
          <div className='flex items-center space-x-2 px-2 md:px-5 py-2 border-gray-100 rounded-md border-2 flex-1'>
           <p>Progress Tracker
            </p> 
            0 XP
          </div>
    

         
        </section>
    </div>
  )
}

export default Project