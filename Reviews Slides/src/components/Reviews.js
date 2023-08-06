import React, { useState } from 'react'
import Card from './Card'
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'
export default function Reviews({reviews}) {

    const[index, setIndex] = useState(0)
  
    function rightShiftHandler(){
            if(index+1>=reviews.length){
                setIndex(0)
            }else{
                setIndex(index+1)
            }
    }

    function leftShiftHandler(){
            if(index-1<0){
                setIndex(reviews.length-1)
            }else{
                setIndex(index-1)
            }
    }

    function randomtHandler(){
           setIndex( Math.floor(Math.random() * reviews.length))
    }
  
    return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl'>

      <Card review={reviews[index]}/>

      <div className='flex justify-center text-3xl mt-5 gap-3 text-violet-400 font-bold'>

      <button onClick={leftShiftHandler} className='px-4 py-2 cursor-pointer hover:text-violet-500 rounded-md mr-2'>
            
            <FiChevronLeft/>

      </button>

      <button onClick={rightShiftHandler} className='px-4 py-2 cursor-pointer hover:text-violet-500 transition-all duration-200 rounded-md'>
            <FiChevronRight/>
      </button>
     
      </div>

      <div className='flex justify-center mt-4'>

      <button onClick={randomtHandler} className='px-6 py-3 text-white bg-violet-400 rounded-md hover:bg-violet-500 transition duration-200'>

          Random Review

      </button>

      </div>

    </div>
  )
}
