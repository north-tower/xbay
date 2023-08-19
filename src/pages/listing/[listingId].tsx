import { useRouter } from 'next/router';
import React from 'react'

import { ListingType, MediaRenderer, useContract, useListing } from "@thirdweb-dev/react"
import Header from '@/components/Header';
import { UserCircleIcon } from '@heroicons/react/24/solid';

function ListingPage() {
    const router = useRouter();
    const{ listingId } = router.query as { listingId: string };

    const { contract } = useContract(
        process.env.NEXT_PUBLIC_MARKETPLACE_CONTRACT,"marketplace"
    )

    const { data: listing, isLoading, error} = 
    useListing(contract, listingId);

    if(isLoading)
    return (
        <div>
            <Header />
            <div className='text-center animate-pulse text-green-400'>
                <p>Loading Item....</p>
            </div>
        </div>

        );

    if (!listing) {
        return <div>Listing not found</div>
    }
    return (
        <div>
          <Header />

          <main className='max-w-6xl mx-auto p-2 flex flex-col
           lg:flex-row space-y-10 space-x-5 pr-10'>
            <div className='p-10 border mx-auto lg:mx-0 max-w-md
             lg:max-w-xl'>
                <MediaRenderer src={listing.asset.image} />
            </div>
            <section className='flex-1 space-y-5 pb-20 lg:pb-0'>
                <div>
                    <h1 className='text-xl font-bold'>{listing.asset.name}</h1>
                    <p className='text-gray-600'>{listing.asset.description}</p>
                    <p className='flex items-center text-xs
                    sm:text-base'>
                        <UserCircleIcon className='h-5' />
                        <span className='font-bold pr-1'>Seller:
                        </span>
                        
                        {listing.sellerAddress}</p>
                </div>
                <div className='grid grid-cols-2 items-center py-2'>
                    <p className='font-bold'>Listing Type:</p>
                    <p>{listing.type ===  ListingType.Direct ? 
                    "Direct Listing" : "Auction Listing"}
                    </p>

                    <p className='font-bold'>Buy it Now Price</p>
                    <p className='text-4xl font-bold'>
                        {listing.buyoutCurrencyValuePerToken.displayValue}{" "}
                        {listing.buyoutCurrencyValuePerToken.symbol}
                    </p>

                    <button className='col-start-2 mt-2 bg-green-500 font-bold 
                    text-white rounded-full w-44 py-4 px-10'>
                        Buy Now
                    </button>
                </div>

                <div className='grid grid-cols-2 space-y-2 items-center justify-end'>
                    <hr className='col-span-2' />
                    <p className='col-span-2 font-bold'>
                        {listing.type === ListingType.Direct ?
                        "Make an Offer" : "Bid on this Auction"}
                    </p>

                    <input 
                    className='border p-2 rounded-lg mr-5 outline-red-500'
                    type='text' placeholder='Enter Value...' />
                    <button className='bg-red-600 font-bold text-white rounded-full
                    w-44 py-4 px-10'>
                        {listing.type === ListingType.Direct ? "Offer" : "Bid"}
                    </button>
                </div>


            </section>
          </main>
        </div>
    )
}

export default ListingPage