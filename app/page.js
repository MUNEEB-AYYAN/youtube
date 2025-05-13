"use client"

import { MyContext } from '@/helper/Context'
import axios from 'axios';
import React, { useContext, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const page = () => {
  const user = useContext(MyContext)

  const [userdata , setuserdata] = useState('');
  const [num , setnum] = useState(10);

  const getData = async () => {
    const responce = await axios.get('https://picsum.photos/v2/list')
    const a = JSON.stringify(responce.data)
    console.log(a);
    setuserdata(a);
    
  }

  const notify = () => {
    console.log('logged in successfully');
    toast.success('logged in successfully',{
      position:"top-center"
    });
  }
  
  return (
    <>
    <div className='p-2 bg-green-300 text-gray-500 font-semibold text-2xl text-center'> {user} {num} </div>
    <button onClick={getData} className='bg-sky-500 font-semibold text-white rounded-2xl  border-none px-4 py-2 m-2'>Click</button>
      {userdata}
    <ToastContainer />
    
    </>
  )
}

export default page