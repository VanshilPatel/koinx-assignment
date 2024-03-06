import React from 'react'

const TrendingCoins = () => {
  return (
    <div className='flex flex-col gap-y-2 mt-5 border rounded-2xl pt-3 px-4 pb-6'>
      <span className='font-semibold text-2xl'>Trending Coins (24h)</span>

      <div className='flex justify-between'>
        <span>Etherium (ETH)</span>
        <button className='bg-green-200 px-3 border rounded-sm ml-2'><span className='text-green-500'> --8.21%</span></button>
      </div>

      <div className='flex justify-between'>
        <span>Bitcoin (BTC)</span>
        <button className='bg-green-200 px-3 border rounded-sm ml-2'><span className='text-green-500'> --8.21%</span></button>
      </div>

      <div className='flex justify-between'>
        <span>Polygon (MATIC)</span>
        <button className='bg-green-200 px-3 border rounded-sm ml-2'><span className='text-green-500'> --8.21%</span></button>
      </div>

      


    </div>
  )
}

export default TrendingCoins
