import React from 'react'
import Bitcoinbtc from './Bitcoinbtc'
import Fundamentals from './Fundamentals'
import Performance from './Performance'
import Sentiment from './Sentiment'


const LeftContainer = () => {
  return (
    <div className='w-881'>
      <Bitcoinbtc/>
      <Performance/>
      <Fundamentals/>
      <Sentiment/>
     

    </div>
  )
}

export default LeftContainer
