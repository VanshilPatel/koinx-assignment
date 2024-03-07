// import React from 'react';
// import FundamentalTableLeft from './FundamentalTableLeft';
// import FundamentalTableRight from './FundamentalTableRight';
// import PerformanceCard from './PerformanceCard';
// import i from "../assets/i.svg";

// const FundamentalsAndPerformance = () => {
//   return (
//     <div className='mt-6 w-881 mb-10 bg-white border border-gray-300 rounded-lg p-2 m-2'>
//         <div className='mt-4 p-4  border-gray-300'>
//         <span className='font-semibold text-2xl mb-4'>Performance</span>
//         <PerformanceCard low={46930.22} high={49343.83} />
//         <PerformanceCard low={16930.22} high={49743.83} />
//       </div>
//       <div className='flex p-4  border-gray-300'>
//         <span className='text-lg font-semibold'>Fundamentals</span>
//         <img src={i} className='ml-2' alt="Info icon" />
//       </div>

//       <div className='flex mt-3'>
//         <div className='flex-grow'>
//           <FundamentalTableLeft />
//         </div>
//         <div className='flex-grow'>
//           <FundamentalTableRight />
//         </div>
//       </div>

      
//     </div>
//   );
// }

// export default FundamentalsAndPerformance;
import React from 'react';
import FundamentalTableLeft from './FundamentalTableLeft';
import FundamentalTableRight from './FundamentalTableRight';
import PerformanceCard from './PerformanceCard';
import i from "../assets/i.svg";

const FundamentalsAndPerformance = () => {
  return (
    <div className='mt-6 mx-11 w-881 mb-10 bg-white border border-gray-300 rounded-lg p-2 pt-5 px-3 m-2'>
      <div className='mt-4 border-gray-300'>
        <span className='font-semibold text-2xl mb-4'>Performance</span>
        <PerformanceCard low={46930.22} high={49343.83} />
        <PerformanceCard low={16930.22} high={49743.83} />
      </div>
      <div className='flex pt-4 border-gray-300'>
        <span className='text-lg font-semibold'>Fundamentals</span>
        <img src={i} className='ml-2' alt="Info icon" />
      </div>

      <div className='flex mt-3'>
        <div className='flex-grow'>
          <FundamentalTableLeft />
        </div>
        <div className='flex-grow '>
          <FundamentalTableRight />
        </div>
      </div>
    </div>
  );
}

export default FundamentalsAndPerformance;
