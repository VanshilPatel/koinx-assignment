import React from 'react'
import left from "../assets/left.svg"
import right from "../assets/right.svg"


const AboutBitcoin = () => {
  return (
    <div className='mx-11 border rounded-md'>
       <span className='font-semibold text-2xl  mb-4'>About Bitcoin</span>
       <p className='font-bold text-lg pt-3'>What is bitcoin ?</p>
       <p className='w-830 mt-2 text-gray-500 text-base font-medium'>Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.</p>
       <hr className='my-3' />
       <p className='font-bold text-lg pt-3'>Lorem ipsum dolor sit amet</p>
       <p className='w-830 mt-3   text-base font-medium'>Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.  </p>
       <p className='w-830 mt-3 py-1 text-base font-medium'>Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at.</p>
       <p className='w-830 mt-3 py-1 text-base font-medium'>Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui</p>
       
       
       <hr className='my-3' />

       
       
       <span className='font-semibold text-2xl  mb-4'>Already Holding Bitcoin ?</span>

       <div className='flex pt-3'>
            <div className='flex w-403 bg-green-400  border rounded-lg p-3'>
                <img src={left}></img>
                <div className='flex flex-col justify-center ml-2  pl-4 '>
                    <p className='text-white text-xl font-bold'>Calculate Your</p>
                    <p className='text-white text-xl font-bold'>Profits</p>
                    <button className='mt-2 text-black bg-white border rounded-md p-1 text-sm font-semibold'>Check Now -</button>
                </div>

            </div>


            <div className='flex w-403 bg-orange-400 mx-2 border rounded-lg p-3'>
                <img src={right}></img>
                <div className='flex flex-col justify-center ml-2  pl-4 '>
                    <p className='text-white text-xl font-bold'>Calculate Your Tax</p>
                    <p className='text-white text-xl font-bold'>Liability</p>
                    <button className='mt-2 text-black bg-white border rounded-md p-1 text-sm font-semibold'>Check Now -</button>
                </div>

            </div>
       </div>

       <hr className='mt-4 mb-5' />


       <p className='w-830 mt-4 text-base font-medium'>Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui</p>

    </div>
  )
}

export default AboutBitcoin
