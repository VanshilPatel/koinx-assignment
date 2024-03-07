import React from 'react';
import chartcontainer from "../assets/chartcontainer.svg";

const Tokenomics = () => {
  return (
    <div className='mt-6 mx-11 w-881 mb-10 bg-white border border-gray-300 rounded-lg p-2 pt-5 px-3 m-2 pb-5'>
      <span className='font-semibold text-2xl mb-4'>Tokenomics</span>
      <img className="mt-3" src={chartcontainer} alt="Chart Container" />

      <p className='mx-1 mt-4 font-semibold text-base text-gray-600 overflow-hidden line-clamp-4'>
        Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
      </p>
    </div>
  );
}

export default Tokenomics;
