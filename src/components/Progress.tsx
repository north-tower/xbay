import React from 'react'
import { CalendarIcon } from "@heroicons/react/24/outline"


type Props = {}

function Progress({}: Props) {
  return (
    <div className='max-w-5xl mx-auto p-2'>
        <div className="flex ...">
            
            <div className="flex-auto w-96 ...">
                <div className='space-x-2 px-2 md:px-5 py-1 border-gray-200
               rounded-md border-2 mt-4 w-full'>
                <h4 className='font-bold pb-2'>
                    Progress Tracker
                </h4>
                <div className='ml-0'>
                    <span className='font-bold'>0                 </span>
                    <span className='text-gray-400'>XP</span>
                  

                    <span className='ml-96 bg-gray-200 rounded-md p-1'>
                       
                        Nov-13-Nov 19</span>

                </div>
                
<div className="flex justify-between mb-1">
  <span className="text-base font-medium text-blue-700 dark:text-white">Flowbite</span>
  <span className="text-sm font-medium text-blue-700 dark:text-white">45%</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
  <div className="bg-gray-100 h-2.5 rounded-full" ></div>
</div>

                </div>
            </div>
            <div className="flex-auto w-32 ml-5">
            <div className='space-x-2 px-2 md:px-5 py-1 border-gray-200
               rounded-md border-2 mt-4 w-full'>
                <h4 className='font-bold pb-2'>
                    Current Status
                </h4>
                <div className='bg-gray-200 rounded-md p-2'>
                    <span className='text-gray-500 text-sm'>
                    Tier

                    </span>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Progress