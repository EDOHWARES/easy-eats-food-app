import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] ms-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* Card */}
      <div className='rounded-xl relative cursor-pointer group'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 group-hover:bg-black/5 duration-500 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO'S Out</p>
            <p className='px-2'>Through 8/26</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4 hover:bg-black hover:text-white duration-500'>Order Now</button>
        </div>
        <img src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" 
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
        />
      </div>

      <div className='rounded-xl relative cursor-pointer group'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 group-hover:bg-black/5 duration-500 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>New Restaurants</p>
            <p className='px-2'>Added Daily</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4 hover:bg-black hover:text-white duration-500'>Order Now</button>
        </div>
        <img src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" 
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
        />
      </div>

      <div className='rounded-xl relative cursor-pointer group'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 group-hover:bg-black/5 duration-500 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>We deliver Desserts Too</p>
            <p className='px-2'>Tasty Treats</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4 hover:bg-black hover:text-white duration-500'>Order Now</button>
        </div>
        <img src="https://images.pexels.com/photos/1132558/pexels-photo-1132558.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" 
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
        />
      </div>
    </div>
  )
}

export default HeadlineCards
