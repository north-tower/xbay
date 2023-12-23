import React from 'react';
import Image from 'next/image';
import { InformationCircleIcon, BellIcon } from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/solid";


type Props = {};

function Project({}: Props) {
  return (
    <div>
      <section className='flex items-center max-w-5xl mx-auto p-2 space-x-2 py-5 mt-6'>
        <div className='flex'>
          <div>
            <Image src={'https://www.remotasks.com/static/images/collaboration.svg'}
              alt={'amkk'} width={280} height={280} />
          </div>
          <div className='ml-12 w-full'>
            <p className='font-medium text-lg'>Welcome back, Mike!</p>
            <div className='flex flex-row '>
              <div className='space-x-2 px-2 md:px-5 py-1 bg-gray-100 border-gray-100
               rounded-md border-1 mt-4 w-full'>
                <div className="flex items-center">
                  <span className='font-medium' >Your Active Projects </span>
                  <span className='m-1'><InformationCircleIcon className='h-5 text-gray-400'/></span>
                  
                </div>
               <div className="flex items-center justify-between">
               <div className="flex items-center">
                  <span className='' >Cupcake Oxen,Offer Dancing</span>
                  <span className=''><PencilIcon className='h-3 text-gray-400'/></span>
                  
                </div>
              
               
              <span className='pl-64'>

              <button className='bg-sky-500 text-white  rounded-md px-2 py-4 font-medium'>Start Tasking </button>

              </span>
              </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Project;
