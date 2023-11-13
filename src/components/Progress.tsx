import React from 'react'

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
                <h4 className='ml-0'>
                    <span className='font-bold'>
                    0                 </span><span className='text-gray-400'>XP</span>
                </h4>
                </div>
            </div>
            <div className="flex-auto w-32 ml-5">
            <div className='space-x-2 px-2 md:px-5 py-1 border-gray-200
               rounded-md border-2 mt-4 w-full'>
                03
            </div>
            </div>
        </div>
    </div>
  )
}

export default Progress