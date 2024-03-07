import React from 'react'

const TeamCard = ({svg, name, designation}) => {
  return (
    <div className='bg-cardGrey my-3 pt-4 pb-2 border rounded-md'>
      <div className='flex align-middle mx-5 '>
        <div className='flex flex-col justify-center align-middle'>
            <img className="pt-1" src={svg}></img>
            <span className='font-semibold text-sm  pt-1 ml-1 '>{name}</span>
           

        </div>
        <p className='w-646 font-normal text-sm ml-3 mt-4'>
        Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu
        </p>
      </div>
      <p className='text-gray-600 text-xs font-medium ml-3'>{designation}</p>
    </div>
  )
}

export default TeamCard
