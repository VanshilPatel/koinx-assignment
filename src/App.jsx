import { useState } from 'react'
import reactLogo from './assets/react.svg'
import LeftContainer from './components/LeftContainer'
import Navbar from './components/Navbar'

import RightContainer from './components/RightContainer'



function App() {
  

  return (
    <>
    <div>
      <Navbar/>
      <div className='bg-gray-100 px-8 py-2'> Cryptocurrencies -- Bitcoin</div>
      <div className='flex bg-white'>
        <LeftContainer/>
        <RightContainer/>
      </div>
      
    </div>
    </>
  )
}

export default App
