import React from 'react';
import { categories } from '../Data/data';

const Category = () => {
  return (
    <div className='max-w-[1640px] mx-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-center'>Top Rated Menu Items</h1>
      {/* Categories */}
      <div className=' grid grid-cols-2 md:grid-cols-4 gap-6 py-5'>
        {
            categories.map((item, index) => {
                return (
                    <div key={index} className='bg-gray-100 rounded-lg p-4 flex justify-between items-center hover:scale-95 duration-500 cursor-pointer'>
                        <h2 className='font-bold text-sm sm:text-xl'>{item.name}</h2>
                        <img src={item.image} alt={item.name} 
                        className='w-10 sm:w-20'
                        />
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default Category
