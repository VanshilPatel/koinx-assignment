
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
    <div className='flex flex-col gap-y-2 mt-5 border rounded-2xl pt-3 px-4 pb-6'>
      <span className='font-semibold text-2xl'>Trending Coins (24h)</span>

      {topCoins.map((coin) => (
        <div className='flex justify-between' key={coin.item.id}>
          <span>{coin.item.name} ({coin.item.symbol})</span>
          <button className={`bg-${coin.item.data.price_change_percentage_24h?.usd >= 0 ? 'green' : 'red'}-100 px-3 border rounded-sm ml-2`}>
            <div className='flex'>
              <img src={uparrow} alt='Up Arrow'></img>
              <span className={`text-${coin.item.data.price_change_percentage_24h?.usd >= 0 ? 'green' : 'red'}-500 ml-1`}>
                {coin.item.price_change_percentage_24h?.usd?.toFixed(2)}%
              </span>
            </div>
          </button>
        </div>
      ))}
    </div>
  );
}

export default TrendingCoins
