import React from 'react';
import Image from 'next/image';
import { InformationCircleIcon, BellIcon } from "@heroicons/react/24/outline";

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
              
                <span className='pr-36'>No active project</span>  
              <span className='pl-64'>

              <button className='bg-sky-600 text-white  rounded-md p-2'>Start Tasking </button>

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
