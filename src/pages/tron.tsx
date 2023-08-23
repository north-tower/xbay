import React from 'react'
import Header from '../components/Header2'

type Props = {}

function tron({}: Props) {
  return (
    <div className='bg-gray-100'>
        <Header />

        <div className='max-w-5xl mx-auto p-2'>
            <p className='font-bold mb-4'>Transaction Details</p>
            <p>Account <span className='text-red-600'>TVceiEtToBQkfgsjsjskk</span> transferred <span className='bg-gray-200 rounded-md pr-2 pl-2'>
            37,841 USDT</span> to <span className='text-red-600'>TVceiEtToBQkfgsjsjskk</span> <span className='text-xs text-gray-500'>
                (Huobi)
            </span>
            </p>


            <div className='m-5 bg-white p-4 rounded-md'>
                <div className='m-4'> 
                    <span className='bg-gray-200 rounded-full pl-1 pr-1'> ? </span> Hash: <span className='ml-60'>
                    12efsgssjskwhwghwjwbxnshshgehjhegjesfsffsfsf
                </span>
               </div>
               <div className='m-4'>
                <span className='bg-gray-200 rounded-full pl-1 pr-1'> ? </span> Result: <span className='ml-60 text-green-600 bg-green-100 rounded-sm pl-2 pr-2'>
                    SUCCESSSFUL
                </span>
               </div>
               <hr  className='mt-2' />
               <div className='m-4'>
                <span className='bg-gray-200 rounded-full pl-1 pr-1'> ? </span> Status: <span className='ml-60 text-green-600 bg-green-100 rounded-sm pl-2 pr-2'>
                    CONFIRMED
                </span><span className='text-sm text-gray-600 ml-6'>Confirmed by over 200 blocks</span>
               </div>
               <div className='m-4'>
                <span className='bg-gray-200 rounded-full pl-1 pr-1'> ? </span> Confirmed SRs: <span className='ml-48'>
                    19
                </span>  <span className='ml-8'>TRONLink</span>
                <span className='ml-8'>Valkyrie_Investments</span>
                <span className='ml-8'>TRONGrid</span>
                <span className='ml-8'>CryptoChain</span>
               </div>
               <hr  className='mt-2' />
               <div className='m-4'> 
                    <span className='bg-gray-200 rounded-full pl-1 pr-1'> ? </span> Block: <span className='ml-60'>
                    5646464
                </span>
               </div>
               <div className='m-4'>
                <span className='bg-gray-200 rounded-full pl-1 pr-1'> ? </span> Time: <span className='ml-60'>
                    2023-08-18 22:50:06(Local) | 13hrs 47min ago
                </span>
               </div>
               <hr  className='mt-2' />
               <div className='m-4'> 
                    <span className='bg-gray-200 rounded-full pl-1 pr-1'> ? </span> Resources Consumed & Fee: 
                     <span className='ml-20'>
                    345 Bandwidth <span className='ml-16'>31,895 Energy</span>
                </span>
               </div>           
               
            </div>
        </div>
    </div>
  )
}

export default tron