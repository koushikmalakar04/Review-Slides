import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

export default function Card({ review }) {

  return (
    <div className="flex flex-col md:relative">

      <div className='absolute top-[-7rem] z-[10] mx-auto'>

    <img className='aspect-square rounded-full w-[140px] h-[140px] z-[25]' src={review.image} alt='' />

    <div
      className='w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-10] left-[10px]'></div>
    </div>

    <div className='text-center mt-7'>

        <p className='text-2xl font-bold capitalize'>{review.name}</p>
        
        <p className='text-gray-400 uppercase text-sm'>{review.job}</p>

      </div>

      <div className='text-center mt-7'>

        <FaQuoteLeft className='text-violet-400 mx-auto mt-5' />

        <p className='text-center mt-4 text-slate-500'>{review.text}</p>

        <FaQuoteRight className='text-violet-400 mx-auto mt-5' />

      </div>
      
    </div>
  );
}
