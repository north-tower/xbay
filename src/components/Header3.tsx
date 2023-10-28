import React from 'react'
import { useAddress, useDisconnect, useMetamask} from "@thirdweb-dev/react"
import Link from 'next/link';
import { BellIcon, ShoppingCartIcon, ChevronDownIcon, MagnifyingGlassIcon,} from "@heroicons/react/24/outline"
import Image from 'next/image';

type Props = {}

function Header({}: Props) {
  const connectWithMetamask = useMetamask();
  const disconnect = useDisconnect();
  const address = useAddress();
  
  return (
    <div className='max-w-5xl mx-auto p-2'>
        <nav className='flex justify-between'>
           
            <div className='flex items-center space-x-4 text-sm'>
              <p className='hidden md:inline-flex cursor-pointer font-bold text-lg pr-6'>remotasks</p>
              <p className='hidden md:inline-flex cursor-pointer text-xs pr-3'>Dashboard</p>
              <p className='hidden md:inline-flex cursor-pointer text-xs pr-3'>Task Log</p>
              <p className='hidden md:inline-flex cursor-pointer text-xs pr-3'>Balance</p>
              <p className='hidden md:inline-flex cursor-pointer text-xs pr-3'>Remotasks Tiers</p>
              <p className='hidden md:inline-flex cursor-pointer text-xs pr-3'>Onboarding</p>
              <p className='hidden md:inline-flex cursor-pointer text-xs pr-3'>Feedback</p>           
              <p className='hidden md:inline-flex cursor-pointer text-xs pr-3'>Support</p>          

            </div>
            <div className='flex items-center space-x-2 text-sm'>
            <p className='hidden md:inline-flex cursor-pointer pr-3 text-xs'>
                Lang
              </p>
              <p className='hidden md:inline-flex cursor-pointer pr-3 text-xs'>
              <BellIcon className='h-3 w-3 ' /></p>
              <p className='hidden md:inline-flex cursor-pointer pr-4 text-xs pr-3'>
                JOHN DOE
              </p>

             
            </div>
        </nav>

        <hr  className='mt-2' />
        <Image src={'https://www.remotasks.com/static/images/collaboration.svg'} alt={'amkk'} width={120} height={120}/>

        <section className='flex items-center max-w-5xl  mx-auto p-2 space-x-2 py-5 '>
          <div className='flex items-center space-x-2 px-2 md:px-5 py-2 border-gray-200 rounded-md border-2 flex-1'>
            Progress Tracker
          </div>

         
        </section>
    </div>
  )
}

export default Header
