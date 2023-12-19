import React from 'react'
import Cart from '../assets/icons/cart.svg'
export default function Header() {
  return (
    <div className='w-full h-16 flex justify-between items-center'>
      <div className='w-[30%] flex justify-evenly items-center text-center md:hidden'>
        <h1 className="text-lg font-semibold" >Shop</h1>
        <h1 className="text-lg font-semibold" >Collection</h1>
        <h1 className="text-lg font-semibold" >Latest</h1>        
      </div>

      <div className='w-[40%] flex justify-center items-center text-center md:text-start md:justify-start md:ml-4'>
        <h1 className="text-lg font-semibold">LOGO</h1>
      </div>
      <div className='w-[30%] flex justify-evenly items-center text-center'>
        <h1 className="text-lg font-semibold md:hidden" >Men</h1>
        <h1 className="text-lg font-semibold md:hidden" >Women</h1>
        <img src={Cart} className="w-8 h-8" alt="" />
        <button className='w-20 h-10 rounded-full bg-accent-color text-accent-complementary'>
            LOGIN
        </button>
      </div>
    </div>
  )
}
