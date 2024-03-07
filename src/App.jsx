import { useState } from 'react'
import reactLogo from './assets/react.svg'
import LeftContainer from './components/LeftContainer'
import Navbar from './components/Navbar'

import RightContainer from './components/RightContainer'
import doubleright from "./assets/doubleright.svg"



function App() {
  

  return (
    <>
    <div>
      <Navbar/>
      <div className='flex mx-3 pt-2'>
       <span className='ml-11'>Cryptocurrencies</span>  <img  className='ml-2' src={doubleright}></img> <span  className='ml-2'>Bitcoin</span>
       </div>
      <div className='flex'>
        <LeftContainer/>
        <RightContainer/>
      </div>
    

    </div>
    </>
  )
}

export default App
