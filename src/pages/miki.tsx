import React from 'react'
import Header from '../components/Header'
import { useMakeOffer, useContract, Web3Button } from "@thirdweb-dev/react";


type Props = {}

function miki({}: Props) {
  const contractAddress = "0x1f3a4c667bc97899304E4849705C88FB8C334E11";
  const { contract } = useContract(contractAddress, "marketplace");
  const { mutateAsync: makeOffer, isLoading, error } = useMakeOffer(contract);

  return (
    <div>
      <Header />

  
    <Web3Button
      contractAddress={contractAddress}
      action={() =>
        makeOffer({
          listingId: 1, // ID of the listing to make an offer on
          pricePerToken: 0.0000091,  // Price per token to offer (in the listing's currency)
          quantity: 1, // Number of NFTs you want to buy (used for ERC1155 NFTs)
        })
      }
    >
      Make Offer
    </Web3Button>   
      
    </div>
  )
}

export default miki