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
    <div className='max-w-6xl mx-auto p-2'>
        <nav className='flex justify-between'>
            <div className='flex items-center space-x-2 text-sm'>
              {address ? (
                <button onClick={disconnect}
                 className="connectWalletBtn">Hi, {address.slice(0,5) +
                 "..." + address.slice(-4)}</button>
              ) : (
                <button onClick={connectWithMetamask} className="connectWalletBtn">Connect your wallet</button>
              )}

              <p className='hidden md:inline-flex cursor-pointer'>
                Daily Deals
              </p>
              <p className='hidden md:inline-flex cursor-pointer'>
                Help & Contact
              </p>
            </div>
            <div className='flex items-center space-x-4 text-sm'>
              <p className='hidden md:inline-flex cursor-pointer'>Ship to</p>
              <p className='hidden md:inline-flex cursor-pointer'>sell</p>
              <p className='hidden md:inline-flex cursor-pointer'>Watchlist</p>
          

              <Link href="/addItem" className='flex items-center hover:link'>
                Add to inventory
                <ChevronDownIcon className='h-4' />
              </Link>

              <BellIcon className='h-6 w-6' />
              <ShoppingCartIcon className='h-6 w-6' />

            </div>
        </nav>

        <hr  className='mt-2' />

        <section className=''>
          <div className='h-16 w-16 sm:w-28 md:w-44 cursor-pointer 
          flex-shrink-0'>
            <Link href='/'>
              <Image alt="Xbay Logo" 
              className='h-full w-full object-contain'
              src="https://links.papareact.com/bdb"
              width={100}
              height={100} />
            </Link>
          </div>
        </section>
    </div>
  )
}

export default Header