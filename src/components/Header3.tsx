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
    <div className='max-w-7xl mx-auto p-2'>
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
        
    </div>
  )
}

export default Header
