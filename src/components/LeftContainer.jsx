import React from 'react'
import AboutBitcoin from './AboutBitcoin'
import Bitcoinbtc from './Bitcoinbtc'
import Fundamentals from './Fundamentals'
import Performance from './Performance'
import Sentiment from './Sentiment'
import Tokenomics from './Tokenomics'



const LeftContainer = () => {
  return (
    <div className='w-881'>
      <Bitcoinbtc/>
      <Performance/>
      <Fundamentals/>
      <Sentiment/>
      <AboutBitcoin/>
      <Tokenomics/>
     

    </div>
  )
}

export default LeftContainer
