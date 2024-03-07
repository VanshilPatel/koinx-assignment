import React from 'react'
import TeamCard from './TeamCard'
import sandeep from '../assets/sandeep.svg'
import elina from '../assets/elina.svg'
import mandeep from '../assets/mandeep.svg'

const Team = () => {
  return (
    <div className='mx-11 mt-5  py-3 px-5 border rounded-md'>
        <span className='font-semibold text-2xl  mb-4'>Team</span>
        <p className='w-833 font-semibold text-base text-gray-600 mt-5'>Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.</p>
        <TeamCard svg={sandeep} name='John Smith' designation='Designation Here'/>
        <TeamCard svg={mandeep} name='Elina William' designation='Designation Here'/>
        <TeamCard svg={elina} name='John Smith' designation='Designation Here'/>
    </div>
  )
}

export default Team
