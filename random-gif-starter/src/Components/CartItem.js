import React from 'react'
import { toast } from 'react-hot-toast';
import {MdOutlineDeleteForever} from 'react-icons/md';
import { useDispatch } from 'react-redux';
import {remove} from '../redux/slice/cartSlice';

export default function CartItem({item}) {
    const dispatch = useDispatch();
    const removeFromCart=()=>{
        dispatch(remove(item.id));
        toast.error("Item Removed");
    }
  return (
    <div>
    <div className="flex gap-10 mt-10 mx-auto ml-10">
        <div>
            <img src={item.image} className="w-[20vh] h-[20vh]"/>
        </div>

       <div>
            <h1 className="font-bold text-slate-950">{item.title}</h1>
            <h2>{item.description.split(" ").slice(0,10).join(" ")+"..."}</h2>
            <div className="flex justify-between items-center">
                <p className="text-green-500">₹{item.price}</p>
                <div onClick={removeFromCart}>
                    <MdOutlineDeleteForever/>
                </div>
              
            </div>
           
        </div>
    
    
  

    </div>
    <div className="bg-green-500 h-1 w-full m-10 shadow-5xl"></div>
    </div>
  );
}
