import React from 'react'
import AboutBitcoin from './AboutBitcoin'
import Bitcoinbtc from './Bitcoinbtc'
import Fundamentals from './Fundamentals'
import Performance from './Performance'
import Sentiment from './Sentiment'
import Team from './Team'
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
      <Team/>
     

    </div>
  )
}

export default LeftContainer
