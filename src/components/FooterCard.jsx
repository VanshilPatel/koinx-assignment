import React from 'react'
import a from "../assets/a.svg"

const FooterCard = ({ coinData }) => {
  // Assuming coinData has properties like 'id', 'symbol', 'image', 'current_price', 'price_change_percentage_24h'
  return (
    <div className='border border-gray-300 rounded-lg p-5 mx-5'>
      <div className='flex gap-x-2'>
        <img src={coinData.small} alt={coinData.symbol} className='w-8 h-8' />
        <span>{coinData.symbol}</span>
        <button
  className={`bg-${coinData.data.price_change_percentage_24h?.usd > 0 ? 'green' : 'red'}-100 px-3 border rounded-sm ml-2`}
>
  {coinData.data.price_change_percentage_24h?.usd !== undefined
    ? `${coinData.data.price_change_percentage_24h.usd.toFixed(2)}%`
    : '+0.52%'}
</button>

      </div>
    
      <p className='font-medium text-xl pt-2'>
  ${coinData.data.price !== undefined && !isNaN(coinData.data.price)
    ? coinData.data.price.toFixed(2)
    : '319.94'}
</p>
        <img src={coinData.sparkline ? coinData.sparkline : a} alt="Sparkline" className='w-full mt-2' />
    </div>
  )
}

export default FooterCard
