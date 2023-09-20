import React from 'react';
import { useState } from 'react';
import { data } from '../Data/data';

const Food = () => {
    const [foods, setFoods] = useState(data)

    // Filter Type burger/pizza/etc.
    const filterType = (category) => {
        setFoods(
            data.filter((item) => {
                return item.category === category;
            })
        )
    }

    //Filtery by Price
    const filterPrice = (price) => {
        setFoods(
            data.filter((item) => {
                return item.price === price;
            })
        )
    }

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-2xl mb-2 md:text-4xl text-center'>Top Rated Menu Items</h1>
      {/* Filter Row */}
      <div className='flex flex-col gap-4 lg:flex-row justify-between mb-4 mt-2'>
        {/* Filter Type */}
        <div>
            <p className='font-bold text-gray-700'>Filter Type</p>
            <div className='flex max-w-[530px] flex-wrap'>
                <button onClick={() => setFoods(data)} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-500 m-1 '>All</button>
                <button onClick={() => filterType("burger")} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-500 m-1 '>Burgers</button>
                <button onClick={() => filterType("pizza")} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-500 m-1 '>Pizza</button>
                <button onClick={() => filterType("salad")} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-500 m-1 '>Salads</button>
                <button onClick={() => filterType("chicken")} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-500 m-1 '>Chicken</button>
            </div>
        </div>
        {/* Filter Price */}
        <div>
            <p className='font-bold text-gray-700'>Filter Price</p>
            <div className='flex flex-wrap max-w-[500px]'>
                <button onClick={() => filterPrice("15000")} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-500 m-1'>₦15000</button>
                <button onClick={() => filterPrice("20000")} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-500 m-1'>₦20000</button>
                <button onClick={() => filterPrice("25000")} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-500 m-1'>₦25000</button>
                <button onClick={() => filterPrice("30000")} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-500 m-1'>₦30000</button>
            </div>
        </div>
      </div>

        {/* Display Foods */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {foods.map((item, index) => {
            return (
            <div key={item.id} className='border shadow-lg rounded-lg hover:scale-105 duration-500 '>
                <img src={item.image} alt={item.name} 
                className='w-full h-[200px] object-cover rounded-t-lg'
                />
                <div className='flex sm:justify-between items-center px-2 py-4 flex-col sm:flex-row space-y-4 sm:space-y-0'>
                    <p className='font-bold text-sm text-center'>{item.name}</p>
                    <p>
                        <span className='bg-orange-500 text-white px-2 py-1 rounded-full flex items-center justify-center cursor-pointer'>₦{item.price}</span>
                    </p>
                </div>
            </div>
            )
        })}
      </div>
    </div>
  )
}

export default Food
