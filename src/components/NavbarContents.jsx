import React from 'react'

const NavbarContents = () => {
  return (
    <div className='flex ml-96'>
    <button className='mx-3'>Crypto Taxes</button>
    <button className='mx-3'>Free Tools</button>
    <button className='mx-3'>Resource Center</button>
    <button
  className='ml-4 w-136 text-white h-10 border rounded-lg p-2'
  style={{
    background: 'linear-gradient(90deg, #2870EA 0%, #1B4AEF 100%)',
  }}
>
  Get Started
</button>
  </div>
  )
}

export default NavbarContents
