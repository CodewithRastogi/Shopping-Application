import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CartItem from '../Components/CartItem';
import { useEffect } from 'react';

export default function Cart() {
  const {cart}=useSelector((state)=>state);
  const[totalAmount,setTotalAmount]=useState(0);
  
  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,cur)=>acc+cur.price,0));
  },[cart]);
  
  return (
    <div>
      {
        cart.length > 0 ?
        (
          <div className='flex'>
            <div className="flex flex-col">
              {
                cart.map((item,index)=>{
                  return <CartItem key={item.id} item={item} itemIndex={index}/>
                })
              }
            </div>
            <div className="flex flex-col justify-between mt-6 ml-11">
              <div className="ml-2 ">
                <p className="uppercase font-bold text-black">Your Cart</p>
                <p className="uppercase text-green-900 text-2xl font-bold">Summary</p>
                <p>
                  <span className="text-slate-900 font-bold">Total Items:{cart.length}</span>
                </p>
              </div>
              <div>
                <p className="text-slate-900">Total Amount:<span className="text-black font-extrabold">₹{totalAmount}</span></p>
               
                <button className="capitalize bg-green-600 text-white hover:bg-green-700 rounded-md w-full gap-y-5">
                  check out now
                </button>
              </div>
            </div>
          </div>
        )
         :
        (
          <div className="h-screen flex flex-col justify-center items-center">
            <h1>Cart Empty</h1>
            <NavLink to="/">
              <button className="capitalize py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-green-600 rounded-lg border border-gray-200 hover:bg-green-700 
               focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400
               dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">shop now</button>
            </NavLink>
          </div>
        )
      }
    </div>
  )
}
