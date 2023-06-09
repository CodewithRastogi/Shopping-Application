import React, { useEffect, useState } from 'react'
import Spinner from '../Components/Spinner';
import Product from '../Components/Product';

export default function Home() {
  const API_URL="https://fakestoreapi.com/products";
  const[loading,setLoading]=useState(false);
  const[posts,setPosts]=useState([]);
  async function fetchProductData(){
    setLoading(true);
    try{
        const res=await fetch(API_URL);
        const output=await res.json();
        setPosts(output);
    }
    catch(err){
        alert("No Data Found");
        setPosts([]);
    }
    setLoading(false);
  }
  useEffect(()=>{fetchProductData();},[]);
  return (
    <div>
        {
            loading ?

            <Spinner/> : posts.length > 0 ?
            (
             <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
             max-w-6xl p-2 mx-auto space-x-5 min-h-[50vh]'>
                {
                  posts.map((post)=>(<Product key={post.id} post={post}/>))
                }
             </div>
            )
            :
            (
            <div className='h-screen flex justify-center items-center'>
              <p>No Data Found</p>
            </div>
            )
        }
    </div>
  )
}
