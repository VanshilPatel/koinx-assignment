
import React from 'react';
import left from "../assets/left.svg";
import right from "../assets/right.svg";
import arrow_right from "../assets/arrow_right.svg";

const AboutBitcoin = () => {
  return (
    <div className='mx-11 mt-3 w-881 mb-10 bg-white border border-gray-300 rounded-lg p-2 px-3 pt-5 m-2 pb-5'>
      <span className='font-semibold text-2xl mb-4'>About Bitcoin</span>

      <p className='font-bold text-lg pt-3'>What is bitcoin ?</p>
      <p className='w-830 mt-2 text-gray-600 text-base font-medium'>
        Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.
      </p>

      <hr className='my-3' />

      <p className='font-bold text-lg pt-3'>Lorem ipsum dolor sit amet</p>
      <p className='w-830 mt-3 text-base font-medium text-gray-600'>
        Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.
      </p>
      <p className='w-830 mt-3 py-1 text-base font-medium text-gray-600'>
        Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at.
      </p>
      <p className='w-830 mt-3 py-1 text-base font-medium text-gray-600'>
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
      </p>

      <hr className='my-3' />

      <span className='font-semibold text-2xl mb-4'>Already Holding Bitcoin ?</span>

      <div className='flex pt-3'>
  <div className='flex w-403 border rounded-lg p-3' style={{ background: 'linear-gradient(90deg, #79F1A4 0%, #0E5CAD 100%)' }}>
    <img src={left} alt="Left arrow" />
    <div className='flex flex-col justify-center ml-2 pl-4'>
      <p className='text-white text-xl font-bold'>Calculate Your</p>
      <p className='text-white text-xl font-bold'>Profits</p>
      <button className='mt-2 text-black bg-white border rounded-md p-1 text-sm font-semibold'>
        <div className='flex ml-2'>
          Check Now
          <img src={arrow_right} alt="Right arrow" className='ml-2 pl-1' />
        </div>
      </button>
    </div>
  </div>

  <div className='flex w-403 bg-orange-400 mx-2 border rounded-lg p-3' style={{ background: 'linear-gradient(90deg, #FF9865 0%, #EF3031 100%)' }}>
    <img src={right} alt="Right arrow" />
    <div className='flex flex-col justify-center ml-2 pl-4'>
      <p className='text-white text-xl font-bold'>Calculate Your Tax</p>
      <p className='text-white text-xl font-bold'>Liability</p>
      <button className='mt-2 text-black bg-white border rounded-md p-1 text-sm font-semibold w-136'>
        <div className='flex ml-2'>
          Check Now
          <img src={arrow_right} alt="Right arrow" className='ml-2 pl-1' />
        </div>
      </button>
    </div>
  </div>
</div>


      <hr className='mt-4 mb-5' />

      <p className='w-830 mt-4 text-base font-medium'>
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
      </p>
    </div>
  );
}

export default AboutBitcoin;

