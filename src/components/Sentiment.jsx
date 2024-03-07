

import React from 'react';
import KeyEventCards from './KeyEventCards';
import buysvg from "../assets/buy.svg";
import holdsvg from "../assets/hold.svg";
import sellsvg from "../assets/sell.svg";
import i from "../assets/i.svg";
import analystsvg from "../assets/76.svg"

const Sentiment = () => {
  return (
    <div className='mt-6 w-881 mx-11 mb-10 bg-white border border-gray-300 rounded-lg p-2 px-3 pt-5 m-2 pb-5'>
      <span className='font-semibold text-2xl mb-4'>Sentiment</span>

      <div className='flex pt-4 items-center'>
        <span className='text-lg font-semibold mr-2'>Key events </span>
        <img src={i} alt="Info icon" />
      </div>

      <KeyEventCards />

      <div className='flex pt-4 items-center'>
        <span className='text-lg font-semibold mr-2'>Analyst Estimates</span>
        <img src={i} alt="Info icon" />
      </div>

      <div className='flex '>
        <img src={analystsvg} className='mt-4'></img>
        <div className='mt-4 ml-4'>
          <p className='my-3 text-gray-500'>Buy</p>
          <p className='my-3 text-gray-500'>Hold</p>
          <p className='my-3 text-gray-500'>Sell</p>
        </div>

        <div className='mt-4'>
          <img src={buysvg} alt="buy-svg" className='mt-5 pl-5' />
          <img src={holdsvg} alt="buy-svg" className='mt-7 pl-5' />
          <img src={sellsvg} alt="buy-svg" className='mt-7 pl-5' />
        </div>

        <div className='mt-4'>
          <p className='my-3 text-gray-500 tex-sm font-medium pl-5'>76%</p>
          <p className='my-3 text-gray-500 text-sm font-medium pl-5'>8%</p>
          <p className='my-3 text-gray-500 text-sm font-medium pl-5' >16%</p>
        </div>
      </div>
    </div>
  );
}

export default Sentiment;
