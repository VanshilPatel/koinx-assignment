import React from 'react';

const FundamentalTableLeft = () => {
  return (
    <div className='flex flex-col justify-center gap-y-3 w-440'>
      <div className='flex justify-between gap-x-5'>
        <span className='text-sm font-medium text-gray-400'>Bitcoin Price</span>
        <span className='text-sm font-medium'>$16,815.46</span>
      </div>
      <hr/>

      <div className='flex justify-between gap-x-5'>
        <span className='text-sm font-medium text-gray-400'>24h Low / 24h High</span>
        <span className='text-sm font-medium'>$16,382.07 / $16,874.12</span>
      </div>
      <hr/>

      <div className='flex justify-between gap-x-5'>
        <span className='text-sm font-medium text-gray-400'>7d Low / 7d High</span>
        <span className='text-sm font-medium'>$16,382.07 / $16,874.12</span>
      </div>
      <hr/>

      <div className='flex justify-between gap-x-5'>
        <span className='text-sm font-medium text-gray-400'>Trading Volume</span>
        <span className='text-sm font-medium'>$23,249,202,782</span>
      </div>
      <hr/>

      <div className='flex justify-between gap-x-5'>
        <span className='text-sm font-medium text-gray-400'>Market Cap Rank</span>
        <span className='text-sm font-medium'>#1</span>
      </div>
      <hr/>
    </div>
  );
};

export default FundamentalTableLeft;
