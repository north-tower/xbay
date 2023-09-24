import Header from '@/components/Header'
import React from 'react'
import { useAddress, useContract, MediaRenderer, useNetwork, useNetworkMismatch,
    useOwnedNFTs, useCreateAuctionListing, useCreateDirectListing
 } from '@thirdweb-dev/react'

type Props = {}


// Import necessary hooks and components

// ... (existing code) ...

function Create({}: Props) {
    const address = useAddress();
    const { contract } = useContract(
        process.env.NEXT_PUBLIC_MARKETPLACE_CONTRACT,"marketplace"
    );
    const { contract: collectionContract } = useContract(
        process.env.NEXT_PUBLIC_COLLECTION_CONTRACT,"nft-collection"
    );
    const ownedNfts = useOwnedNFTs(collectionContract,address);
    const createAuctionListing = useCreateAuctionListing(contract);
    const createDirectListing = useCreateDirectListing(contract);

    // Function to list NFT in marketplace

    return (
        <div>
            <Header />

            <main className='max-w-6xl mx-auto p-10 pt-2'>
                {/* ... (existing code) ... */}

                <div className='flex overflow-x-scroll space-x-2 p-4'>
                    {ownedNfts?.data?.map((nft) => (
                        <div key={nft.metadata.id} className='flex flex-col 
                            space-y-2 card min-w-fit border-2 bg-green-50'>
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





