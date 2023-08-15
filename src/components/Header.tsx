import React from 'react'

type Props = {}

function Header({}: Props) {
  return (
    <div>
        <nav>
            <div>
                <button className="connectWalletBin">Connect your wallet</button>
            </div>
        </nav>
    </div>
  )
}

export default Header