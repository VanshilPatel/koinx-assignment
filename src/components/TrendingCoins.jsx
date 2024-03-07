import React from 'react'
import uparrow from "../assets/up_arrow.svg"

const TrendingCoins = () => {
  return (
    <div className='flex flex-col gap-y-2 mt-5 border rounded-2xl pt-3 px-4 pb-6'>
      <span className='font-semibold text-2xl'>Trending Coins (24h)</span>

      <div className='flex justify-between'>
        <span>Etherium (ETH)</span>
        <button className='bg-green-100 px-3 border rounded-sm ml-2'>
            <div className='flex'>
            <img src={uparrow}></img>
            <span className='text-green-500 ml-1'> 2.51%</span>
            </div>
        </button>
      </div>

      <div className='flex justify-between'>
        <span>Bitcoin (BTC)</span>
        <button className='bg-green-100 px-3 border rounded-sm ml-2'>
            <div className='flex'>
            <img src={uparrow}></img>
            <span className='text-green-500 ml-1'> 2.51%</span>
            </div>
        </button>
      </div>

      <div className='flex justify-between'>
        <span>Polygon (MATIC)</span>
        <button className='bg-green-100 px-3 border rounded-sm ml-2'>
            <div className='flex'>
            <img src={uparrow}></img>
            <span className='text-green-500 ml-1'> 2.51%</span>
            </div>
        </button>
      </div>

      


    </div>
  )
}

export default TrendingCoins
