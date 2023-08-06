import React from 'react';
import Reviews from './components/Reviews';
import reviews from './Data';

function App() {

  return (

    <div className='flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200'>

      <div className='text-center'>

        <h1 className='text-4xl font-bold'>Reviews</h1>

        <div className='bg-violet-400 h-[4px] w-30 mt-1 mx-auto'></div>

      </div>
      
      <div className='mt-8'>
        <Reviews reviews={reviews} />
      </div>

    </div>
  );
}

export default App;
