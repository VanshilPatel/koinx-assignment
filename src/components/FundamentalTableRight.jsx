import React from 'react';

const FundamentalTableRight = () => {
  return (
    <div className='flex flex-col justify-center gap-y-3 w-440'>
      <div className='flex justify-between gap-x-5'>
        <span className='text-sm font-medium text-gray-400'>Market Cap</span>
        <span className='text-sm font-medium text-right'>$323,507,290,047</span>
      </div>
      <hr/>

      <div className='flex justify-between'>
        <span className='text-sm font-medium text-gray-400'>Market Cap Dominance</span>
        <span className='text-sm font-medium text-right'>38.343%</span>
      </div>
      <hr/>

      <div className='flex justify-between'>
        <span className='text-sm font-medium text-gray-400'>Volume / Market Cap</span>
        <span className='text-sm font-medium text-right'>0.0718</span>
      </div>
      <hr/>

      <div className='flex justify-betwee gap-x-28'>
        <span className='text-sm font-medium text-gray-400'>All time High</span>
        <div className='flex flex-col ml-2'>
          <span className='text-sm font-medium text-right'>
            $69,044.77   <span className='text-red-600'>{-75.6}%</span>
          </span>
          <span className='font-normal text-xs'>Nov 10, 2021 (about 1 year)</span>
        </div>
      </div>
      <hr/>
      
      <div className='flex justify-between'>
        <span className='text-sm font-medium text-gray-400'>All time Low</span>
        <div className='flex flex-col'>
          <span className='text-sm font-medium text-right'>$67.81   <span className='text-green-500'>24729.1%</span></span>
          <span className='font-normal text-xs'>Jul 06, 2013 (over 9 years)</span>
        </div>
      </div>
      <hr/>
    </div>
  );
};

export default FundamentalTableRight;
