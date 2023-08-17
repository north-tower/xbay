import Header from '@/components/Header'
import React from 'react'
import { useAddress, useContract, MediaRenderer, useNetwork, useNetworkMismatch,
    useOwnedNFTs, useCreateAuctionListing, useCreateDirectListing
 } from '@thirdweb-dev/react'

type Props = {}

function Create({}: Props) {
    const address = useAddress();
    const { contract } = useContract(
        process.env.NEXT_PUBLIC_MARKETPLACE_CONTRACT,"marketplace"
    );
    const { contract: collectionContract } = useContract(
        process.env.NEXT_PUBLIC_COLLECTION_CONTRACT,"nft-collection"
    );
    const ownedNfts = useOwnedNFTs(collectionContract,address);
   
  return (
    <div>
        <Header />

        <main className='max-w-6xl mx-auto p-10 pt-2'>
            <h1 className='text-4xl font-bold'>List an Item</h1>
            <h2 className='text-xl font-semibold pt-5'>
                Select an Item you would like to Sell</h2>
            <hr className='mb-5' />
            <p>Below you will find the NFTs you own in your wallet</p>
        
        <div className='flex overflow-x-scroll space-x-2 p-4'>
            {ownedNfts?.data?.map((nft) => (
                <div key={nft.metadata.id} className='flex flex-col 
                space-y-2 card min-w-fit border-2 bg-gray-100'>
                    <MediaRenderer className='h-48 rounded-lg'
                    src={nft.metadata.image} />
                <p className='text-lg truncate font-bold'>
                    {nft.metadata.name}</p>
                <p className='text-xs truncate'>
                    {nft.metadata.description}</p>
                </div>




            ))}
        </div>
        </main>
    </div>
  )
}

export default Create



