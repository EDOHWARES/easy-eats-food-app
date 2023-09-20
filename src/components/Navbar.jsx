import React from 'react';
import { useState } from 'react';
import {AiOutlineClose, AiOutlineMenu, AiOutlineSearch, AiFillTag} from "react-icons/ai";
import {BsFillCartFill, BsFillSaveFill} from "react-icons/bs";
import {TbTruckDelivery} from "react-icons/tb";
import {FaUserFriends, FaWallet} from "react-icons/fa";
import {MdFavorite, MdHelp} from "react-icons/md";

const Navbar = () => {
    const [nav, setNav] = useState(false)
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
        
        {/* Left section */}
        <div className='flex items-center'>
            <div onClick={() => setNav(!nav)} className='cursor-pointer'>
                <AiOutlineMenu size={30} />
            </div>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
                Easy <span className='font-bold'>Eats</span>
            </h1>
            <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                <p className='bg-black text-white rounded-full p-2 cursor-pointer'>Delivery</p>
                <p className='p-2 cursor-pointer'>Pickup</p>
            </div>
        </div>

        {/* Search section */}
        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
            <AiOutlineSearch size={25} />
            <input type="text" placeholder='Search foods' 
            className='bg-transparent p-2 focus:outline-none'
            />
        </div>

        {/* Cart button */}
        <button className='bg-black rounded-full text-white hidden md:flex items-center py-2'>
            < BsFillCartFill size={20} className='mr-2' />
            Cart
        </button>

        {/* Mobile Menu */}
        {/* Overlay */}
        {nav && <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div>}
        {/* Sidebar */}
        <div className={`${nav ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300" : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"}`}>
            <AiOutlineClose onClick={() => setNav(!nav)} size={30} className='absolute right-4 top-4 cursor-pointer hover:bg-gray-300 rounded-full p-2 duration-500' />
            <h2 className='text-2xl p-4'>Easy <span className='font-bold'>Eats</span></h2>
            <nav>
                <ul className='flex flex-col p-4 text-gray-600'>
                    <li className='text-xl py-4 flex cursor-pointer hover:bg-gray-200 duration-500'>
                        <TbTruckDelivery size={20} className='mr-4' />
                        Orders
                    </li>

                    <li className='text-xl py-4 flex hover:bg-gray-200 duration-500 cursor-pointer'>
                        <MdFavorite size={20} className='mr-4' />
                        Favorites
                    </li>

                    <li className='text-xl py-4 flex hover:bg-gray-200 duration-500 cursor-pointer'>
                        <FaWallet size={20} className='mr-4' />
                        Wallet
                    </li>

                    <li className='text-xl py-4 flex hover:bg-gray-200 duration-500 cursor-pointer'>
                        <MdHelp size={20} className='mr-4' />
                        Help
                    </li>

                    <li className='text-xl py-4 flex hover:bg-gray-200 duration-500 cursor-pointer'>
                        <AiFillTag size={20} className='mr-4' />
                        Promotion
                    </li>

                    <li className='text-xl py-4 flex hover:bg-gray-200 duration-500 cursor-pointer'>
                        <BsFillSaveFill size={20} className='mr-4' />
                        Best Ones
                    </li>

                    <li className='text-xl py-4 flex hover:bg-gray-200 duration-500 cursor-pointer'>
                        <FaUserFriends size={20} className='mr-4' />
                        Invite Friends
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar
