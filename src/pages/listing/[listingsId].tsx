import { useRouter } from 'next/router';
import React from 'react'

function ListingPage() {
    const router = useRouter();
    const { listingId } = router.query as { listingId: string };


    return (
        <div>
           I am an item : {listingId} 
        </div>
    )
}

export default ListingPage