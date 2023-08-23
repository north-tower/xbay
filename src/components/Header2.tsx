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
              <p className='hidden md:inline-flex cursor-pointer'>Home</p>
              <p className='hidden md:inline-flex cursor-pointer'>Blockchain</p>
              <p className='hidden md:inline-flex cursor-pointer'>Tokens</p>
              <p className='hidden md:inline-flex cursor-pointer'>Data</p>
              <p className='hidden md:inline-flex cursor-pointer'>Governance</p>
              <p className='hidden md:inline-flex cursor-pointer'>Tron Ecosysytem</p>
              <p className='hidden md:inline-flex cursor-pointer'>More</p>           

            </div>
            <div className='flex items-center space-x-2 text-sm'>
            <p className='hidden md:inline-flex cursor-pointer'>
                Register |
              </p>
              <p className='hidden md:inline-flex cursor-pointer'>
                Log in
              </p>
              {address ? (
                <button onClick={disconnect}
                 className="bg-black text-white">Hi, {address.slice(0,5) +
                 "..." + address.slice(-4)}</button>
              ) : (
                <button  onClick={() => connectWithMetamask()} className="bg-black text-white font-bold py-2 px-4 rounded cursor-pointer">Connect wallet</button>
              )}
              <BellIcon className='h-6 w-6' />
              {/* <ShoppingCartIcon className='h-6 w-6' /> */}

             
            </div>
        </nav>

        <hr  className='mt-2' />

        <section className='flex items-center max-w-5xl  mx-auto p-2 space-x-2 py-5 '>
          <div className='flex items-center space-x-2 px-2 md:px-5 py-2 border-gray-200 rounded-md border-2 flex-1'>
            <MagnifyingGlassIcon className='w-5 text-gray-400'/>
            <input className='flex-1 outline-none text-black'
             placeholder="Search by Token/Account/Contract/Txn Hash/Block" type='text' />
          </div>

         
        </section>
    </div>
  )
}

export default Header
