import React from 'react'
import blue from '../assets/blue.svg'
import green from '../assets/green.svg'

const KeyEventCards = () => {
    return (
      <div className='flex'>
        <div className="w-456 p-4 h-full bg-blue-200 rounded-lg p-18 flex items-start  mt-3">
          <img src={blue} alt="logo" className='mr-4' />
          <div className="text-black flex-grow">
            <p className="font-medium text-sm mb-2">
              Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.
            </p>
            <p className="font-normal text-sm ">
              Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.
            </p>
          </div>
        </div>
  
        <div className="w-456 p-4 h-full bg-green-200 rounded-lg p-18 flex items-start mx-11 mt-3">
          <img src={green} alt="logo" className='mr-4' />
          <div className="text-black flex-grow">
            <p className="font-medium text-sm mb-2">
              Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.
            </p>
            <p className="font-normal text-sm ">
              Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.
            </p>
          </div>
        </div>
      </div>
    );
  }
  

export default KeyEventCards
