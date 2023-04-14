import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {add,remove} from "../redux/slice/cartSlice";
import  {toast} from 'react-hot-toast';


export default function Product({post}) {
    const {cart}=useSelector((state)=>state);
    const dispatch=useDispatch();
    const addToCart=()=>{
        dispatch(add(post));
        toast.success("Item added to cart");
    }
    const removeFromCart=()=>{
        dispatch(remove(post.id));
        toast.error('Item removed');
    }
  return (
    <div className="flex flex-col justify-center items-center hover:scale-110 tranisition duration-300 
    ease-in gap-3 p-4 
    mt-10 ml-5 rounded-xl
    hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
        <div>
            <p className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1'>
                {post.title}
            </p>
        </div>
        <div>
            <p className='w-40 text-gray-400 font-normal text-[10px] text-left '>
                {post.description.split(" ").slice(0,10).join(" ")+"..."}
            </p>
        </div>
        <div className="w-full h-full">
            <img src={post.image} className="w-full h-full"/>
        </div>
        <div className='w-full flex justify-center items-center gap-12 mt-5'>
            <p className='text-green-600 font-semibold'>₹{post.price}</p>
            {
               cart.some((p)=>p.id===post.id)?
               (
                <button onClick={removeFromCart}
                className='text-gray-700 border-2 border-gap-700 rounded-full font-semibold text-[12px] 
                p-1 px-3 uppercase hover:bg-gray-700 hover:text-white tranisition duration-300 ease-in'>
                    Remove Item
                </button>
               )
                :
               (
                <button onClick={addToCart}
                className='text-gray-700 border-2 border-gap-700 rounded-full font-semibold text-[12px]
                p-1 px-3 uppercase hover:bg-gray-700 hover:text-white tranisition duration-300 ease-in'>
                    Add To Cart
                </button>
               )
            }
        </div>
 
    </div>
  )
}


