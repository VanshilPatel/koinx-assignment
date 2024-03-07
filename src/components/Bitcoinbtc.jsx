import React from 'react';
import Features from './Features';
import bitcoin from '../assets/bitcoin.svg';
import uparrow from '../assets/up_arrow.svg';

const Bitcoinbtc = () => {
  return (
    <div className='mx-11 mt-3 w-881 mb-10 bg-white border border-gray-300 rounded-lg p-2 m-2 px-3'>
      <div className='flex items-center gap-x-2 h-10 mt-6'>
        <img className="" src={bitcoin} alt="Bitcoin Logo" />
        <span className='font-semibold text-2xl'>Bitcoin </span><span className='text-gray-500'>BTC</span>
        <button className='bg-gray-500 border rounded-md text-white px-2 py-1 mx-8'>Rank #1</button>
      </div>

      <div className=' mt-6'>
        <div className='flex items-center gap-x-4'>
          <span className='font-semibold text-2xl'>$46,953.04</span>
          <button className='bg-green-100 px-3 border rounded-sm ml-2'>
            <div className='flex'>
              <img src={uparrow} alt="Up Arrow" />
              <span className='text-green-500 ml-1'> 2.51%</span>
            </div>
          </button>
          <span className='text-gray-400'>(24H)</span>
        </div>
        <span className='mt-2'>₹ 39,42,343</span>

        <hr className="text-gray-600 mt-6 mb-3" />

        <div className='h-96 bg-slate-300'>
          Chart to be embedded
        </div>

      </div>
      <Features />
    </div>
  );
};

export default Bitcoinbtc;
