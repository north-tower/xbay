import React from 'react';
import Image from 'next/image';
import { InformationCircleIcon, BellIcon } from "@heroicons/react/24/outline";

type Props = {};

function Project({}: Props) {
  return (
    <div>
      <section className='flex items-center max-w-6xl mx-auto p-2 space-x-2 py-5 mt-6'>
        <div className='flex'>
          <div>
            <Image src={'https://www.remotasks.com/static/images/collaboration.svg'}
              alt={'amkk'} width={240} height={240} />
          </div>
          <div className='ml-8 w-full'>
            <p className=''>Welcome back, John!</p>
            <div className='flex flex-row'>
            <div className=' items-center space-x-2 px-2 md:px-5 py-2  bg-gray-100 border-gray-100
               rounded-md border-2 flex-1 mt-4 w-full'>
                  <div className="flex items-center">
                    <span className='font-bold'>  Your Active Projects </span> 
                    <span className='m-1'><InformationCircleIcon className='h-5'/></span>
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
