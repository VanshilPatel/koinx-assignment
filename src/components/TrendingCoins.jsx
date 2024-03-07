
import React, { useEffect, useState } from 'react';
import uparrow from "../assets/up_arrow.svg"

const TrendingCoins = () => {

    const [topCoins, setTopCoins] = useState([]);

  useEffect(() => {
   
    fetch('https://api.coingecko.com/api/v3/search/trending')
      .then((response) => response.json())
      .then((data) => {
     
        const top3Coins = data.coins.slice(0, 3);
        setTopCoins(top3Coins);
      })
     
  }, []);
  return (
    <div className='flex flex-col gap-y-2 mt-5 border bg-white rounded-2xl pt-3 px-4 pb-6'>
      <span className='font-semibold text-2xl'>Trending Coins (24h)</span>

      {topCoins.map((coin) => (
  <div className='flex justify-between items-center' key={coin.item.id}>
    <div className='flex items-center'>
      <img src={coin.item.small} alt='symbol' className='w-8 h-8 mr-3' />
      <span>({coin.item.name}) {coin.item.symbol}</span>
    </div>
    <button
      className={`${
        coin.item.data.price_change_percentage_24h?.usd < 0 ? 'bg-green-100' : 'bg-green-100'
      } px-3 border rounded-sm ml-2`}
    >
      <div className='flex items-center'>
        <img src={uparrow} alt='Up Arrow' className='w-4 h-4 mr-1' />
        <span className={`text-${coin.item.data.price_change_percentage_24h?.usd ? 'green' : 'green'}-500`}>
          {coin.item.data.price_change_percentage_24h?.usd?.toFixed(2)}%
        </span>
      </div>
    </button>
  </div>
))}


    </div>
  );
}

export default TrendingCoins
