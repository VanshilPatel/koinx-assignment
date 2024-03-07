import React from 'react'
import arrow_right from "../assets/arrow_right.svg"
import photo from "../assets/photo.svg"

const GetStartedCard = () => {
  return (
    <div className='flex flex-col bg-customBlue border rounded-2xl py-7'>
      <div className='flex flex-col justify-center items-center mt-31'>
        <span className='text-white font-medium text-2xl'>Get Started with KoinX</span>
        <span className='text-white font-medium text-2xl'>for FREE </span>
        <span className='text-white font-medium text-sm mt-9'>With our range of features that you can equip for</span>
        <span className='text-white font-medium text-sm my-1'>free,KoinX allows you to be more educated and </span>
        <span className='text-white font-medium text-sm my-1'>aware of your tax reports</span>
      </div>
      <div className='mx-auto mt-8'>
      <img src={photo}></img>
      </div>
      <div className='mx-auto px-3 mt-5 mb-9'>
      <button className='border rounded-lg bg-white font-semibold text-base px-4 py-3'>
        <div className='flex'>
        Get Started for FREE
        <img src={arrow_right} className='ml-2 pl-2'></img>

        </div>
        </button>
      </div>
    </div>
  )
}

export default GetStartedCard
