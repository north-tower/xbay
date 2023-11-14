import React from 'react'
import { CalendarIcon , MinusCircleIcon, FireIcon} from "@heroicons/react/24/solid"


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
                       
                        Nov 13-Nov 19</span>

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
              <div className='space-x-2 px-2 md:px-5 py-1 border-gray-200 rounded-md border-2 mt-4 w-full'>
                <h4 className='font-bold pb-2'>
                Current Status
              </h4>
              <div className='bg-gray-200 rounded-md p-2'>
                <div className="flex flex-row">
                  <div className="basis-1/2">
                    <span className='text-gray-500 text-sm'>
                    Tier
                  </span>
              <div className="flex items-center">
                <span className="">
                <MinusCircleIcon className="h-4 w-4 text-gray-600" />
                </span>
                <span className='text-sm'>Standard</span>
              </div>
              </div>
              <div className="basis-1/2">
     
              <div className="flex ">
                <span className="">
                  <FireIcon className="h-4 w-4 text-amber-400" />
                </span>
                <span className='text-sm text-gray-500'>4 Remopoints to be promoted</span>
              </div>
      </div> 
</div>
 
   </div>
   <div className=' rounded-md p-2 mt-2'>
                <div className="flex flex-row">
                  <div className="basis-1/2">
                    <span className='text-gray-500 text-sm'>
                    Oct 9- Nov 12
                  </span>
              <div className="flex items-center">
               
                <span className='text-sm'>Last 5 weeks</span>
              </div>
              </div>
              <div className="basis-1/2">
     
              <div className="flex ">
                <span className="">
                  <FireIcon className="h-4 w-4 text-amber-400" />
                </span>
                <span className='text-sm text-gray-500'>0 Remopoints</span>
              </div>
        
      
      </div>
      </div>
      </div>
   </div>


            </div>
        </div>
    </div>
  )
}

export default Progress